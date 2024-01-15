<template>
    <div class="container flex flex-col items-center my-12 bg-white">
        <div v-if="loading" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <div class="flex flex-row">
            <!-- <div v-if="item" class="mx-5 mb-16 lg:pb-14 pb-8 lg:mx-0 lg:px-0 border-2 border-gray-100">
                <div class="flex justify-center">
                    <img class="h-full" :src="item.image ? item.image.url : null" alt="post image" />
                </div>
                <div class="px-10 lg:pt-10">
                    <div class="my-6 flex flex-row justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="pr-3" viewBox="0 0 448 512">
                            <path fill="#dc2626"
                                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                        </svg>
                        <div class="text-xs">{{ formatDate(item.createdAt) }}</div>
                    </div>
                    <div class="pb-6 font-semibold text-2xl">
                        {{ item.title }}
                        <div class="mt-3 font-light text-xs">By :: <span class="text-red-600">{{ item.publisher.firstname }}
                                {{
                                    item.publisher.lastname }}</span></div>
                    </div>
                    <div class="text-sm font-light pb-8">
                        {{ item.content }}
                    </div>

                </div>
            </div> -->

            <div >
                <si-blog :item="item"></si-blog>
            </div>
            <div class="flex flex-col lg:pt-10 lg:mr-10 mx-5">

                <div class="w-full text-xs pb-8 ">
                    <input type="text" placeholder="Search"
                        class=" placeholder-gray-400  w-full bg py-2 pl-4 border-2 border-gray-100 rounded-xs focus:border-blue-500 focus:shadow-outline outline-none">
                </div>

                <div class="flex flex-col w-full border-2 pb-10 border-gray-100">
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

                </div>

            </div>
        </div>
        <div class="flex justify-center ">
            <div v-for="item in socialMedia" :key="item.name" class="flex items-center justify-center h-12 m-2">
                <a class="flex h-full" :href="item.url" target="_blank" rel="noopener noreferrer">
                    <si-image class="w-10 h-10" width="40" height="40" :src="item.image" :alt="item.name" />
                </a>
            </div>
        </div>
        <!-- <div v-if="item" class="related">
            <sections-related-posts :item="item" />
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            item: null,
            socialMedia: [
                {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                }
            ]
        }
    },
    async fetch() {
        try {
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
            this.item = data;

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;
            if (this.item.image) { this.$store.state.seo.image = this.item.image.url; }


            let url = `https://${this.$store.state.domain}/posts/${slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        } catch (e) {
            console.log({ e });
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }
    },
    mounted() {
        this.$storeino.fbpx('PageView')
    },
    methods: {
        formatDate(dateString) {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options).toUpperCase();
        },
    },
}
</script>
