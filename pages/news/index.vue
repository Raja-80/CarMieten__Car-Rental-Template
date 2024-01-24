<template>
    <div class="container flex flex-col justify-center items-center px-16 py-14">

        <div v-if="loading.posts" class="flex items-center justify-center my-8 w-full">
            <si-loader></si-loader>
        </div>

        <div v-if="news_search" class="flex flex-col py-10 mx-5 w-full">

            <div class="flex flex-row items-center w-full text-xs pb-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <input type="text" placeholder="Search" v-model="searchTerm" @input="onSearchInput"
                    class=" placeholder-gray-400  w-full bg py-2 pl-4 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">


            </div>

            <!-- <div class="flex flex-col w-full border-2 pb-10 border-gray-100">
                <div class="w-full py-5 bg">
                    <div class=" text-black text-base font-medium pl-4">
                        NEWSLETTER
                    </div>
                </div>
                <div class=" mb-6 border-b-2 border-red-700">
                </div>
                <div class=" px-8">
                    <div class="text-black text-xl font-medium pb-6 w-full">
                        Get Even More
                    </div>
                    <div class="text-black text-xs pb-4 w-full">
                        "Get all latest content delivered straight to your inbox."
                    </div>
                    <div class="flex flex-row justify-between items-center w-full border-2 border-gray-100">
                        <div class="text-xs pl-3">
                            <input type="email" placeholder="Enter email">
                        </div>
                        <div class=" text-white bg-red-600 py-3 px-6  text-xs">
                            <button type="submit" class="font-semibold">Go</button>
                        </div>
                    </div>
                    <div>
                        <p class="text-gray-400 text-xs pt-6 font-light w-full">
                            Don't worry we don't spam
                        </p>
                    </div>
                </div>

            </div> -->

        </div>
        <div v-if="!loading.posts" class="flex flex-col mx-7 w-full">

            <div v-if="items.length > 0" v-for="item in items" :key="item._id">
                <si-blog :item="item"></si-blog>
            </div>

            <div v-if="items.length > 0" class="flex items-center justify-center w-full p-20">
                <button v-for="pageNumber in paginate.last_page" :key="pageNumber" @click="getItems(pageNumber)" :class="['w-10 h-10 rounded-full m-1 flex items-center justify-center cursor-pointer hover:text-red-600 hover:bg-gray-200 text-base font-semibold',
                    paginate.current_page === pageNumber ? 'bg-red-600 text-white' : 'bg text-black',]">

                    {{ pageNumber }}

                </button>
            </div>

            <!-- if there are no news -->
            <div v-if="items.length <= 0"
                class="flex flex-col w-full py-10 text-base text-center font-medium text-white ">
                <b class=" bg-red-400 rounded-xl">{{ t('No_News_Founded') }}</b>
                <nuxt-link :to="`/`"
                    class="text-sm font-light hover:text-red-600 focus:underline focus:text-red-600 transition duration-1000 ease-in-in  pb-2 ">
                    Back To Home Page
                </nuxt-link>
            </div>
        </div>





    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: {
                posts: true,
            },
            news_search: this.$settings.sections.news_pge.search_for_news,
            query: {},
            param: [],
            items: [],
            paginate: { page: 1, limit: 3, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: 3 },
            lastParams: { page: 1, search: this.$route.query.search, limit: 3 },
            searchTerm: this.$route.query.search || '',
        }
    },
    async fetch() {
        try {

            for (const key in this.$route.query) {
                if (!this.$route.query[key]) continue;
                switch (key) {
                    case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
                }
            }

            this.lastParams = this.params;

            await this.getItems();

            if (this.items.length > 0) {
                this.$store.state.seo.title = this.items[0].title + ' - ' + this.$settings.store_name;
                this.$store.state.seo.description = this.items[0].excerpt || this.$settings.store_description;
                if (this.items[0].image) {
                    this.$store.state.seo.image = this.items[0].image.url;
                }
            }

            this.loading.posts = false;
        } catch (e) {
            console.log({ e });
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
    mounted() {
        this.$storeino.fbpx('PageView')
    },
    methods: {

        t(key) {
            const langs = {
                No_News_Founded: {
                    EN: "No News Founded",
                    FR: "Aucune Nouvelle Trouvée",
                    AR: "لا أخبار تم العثور عليها",
                    // ES: " ",
                    // PT: " "
                },
                Search: {
                    EN: "Search",
                    FR: "Recherche",
                    AR: "بحث",
                    // ES: "",
                    // PT: ""
                },
            }
            return langs[key] && langs[key][this.$store.state.language.code] || '';
        },

        formatDate(dateString) {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options).toUpperCase();
        },

        setParams(e, key, value) {
            if (key === 'page') {
                this.params.page = value;
            } else if (key === 'search') {
                this.searchTerm = value;
            }

            for (const key in this.params) {
                switch (key) {
                    case 'page': this.query['page'] = [this.params[key]]; break;
                }
            }

            let url = `/news/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if (typeof this.query[key] == 'object') {
                    url += `${key}=${this.query[key].join(',')}`;
                } else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },

        async getItems(page = null) {
            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.posts = true;
            try {
                this.params.search = this.searchTerm;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = 3;
                this.params.type = 'POST';
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.pages.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            } catch (e) {
                console.log({ e });
            }
            this.loading.posts = false;
        },
        onSearchInput() {
            this.getItems();
        },
    },

}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>