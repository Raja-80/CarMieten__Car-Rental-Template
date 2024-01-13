<!-- <template>
    <div class="container">
        <div class="m-2">
            <h2 class="text-2xl">{{ $settings.sections.product.reviews.title }}</h2>
        </div>
        <div v-if="loading" class="flex justify-center items-center my-5">
            <si-loader></si-loader>
        </div>
        <div class=" rounded-md p-2 my-3 mx-2 reviews" id="reviews">
            <div class="flex flex-wrap">
                <div v-for="(review, index) in reviews.results" :key="index" class="w-full md:w-1/2">
                    <div class="bg-white shadow flex justify-between flex-col m-1 p-2 h-full rounded-md">
                        <div class="flex flex-col">
                            <div class="flex">
                                <div class="flex">
                                    <si-avatar
                                        :name="`${review.customer.firstname} ${review.customer.lastname}`"></si-avatar>
                                    <span class="m-1"></span>
                                    <div>
                                        <b class="capitalize">{{ `${review.customer.firstname} ${review.customer.lastname}`
                                        }}</b>
                                        <div class="mb-1 flex">
                                            <span v-for="(star, i) in 5"
                                                :class="star <= review.rating ? ' text-yellow-500 ' : 'text-gray-400'"
                                                :key="i">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                    class="w-5 h-5 translate">
                                                    <path fill="currentColor"
                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                        class="">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>{{ review.content }}</div>
                        </div>
                        <div class="overflow-auto w-full">
                            <div class="flex bg-gray-100">
                                <si-image width="100" height="100"
                                    class="w-16 h-16 m-1 bg-white rounded-md shadow cursor-pointer"
                                    v-for="(image, index) in review.images" :key="index" :src="image"
                                    @click="$store.state.fullImage = image"
                                    :alt="`${review.rating} stars - ${review.content}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: { type: Object, default: null }
    },
    data() {
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            loading: true
        }
    },
    async fetch() {
        const { data } = await this.$storeino.reviews.search({
            "product._id": this.item._id,
            page: this.reviews.paginate.page + 1
        })
        this.reviews = data;
        this.loading = false;
    }
}
</script> -->





<template>
    <div class="container lg:pb-32 pb-24 pt-20">
        <div class="flex flex-col justify-center items-center ">
            <h1 class="text-black font-semibold text-3xl text-center ">

                {{ reviews_title.title }}

            </h1>

            <p class="  text-gray-400 font-normal italic font-serif text-lg pb-8">

                {{ reviews_title.under_title }}

            </p>

            <!-- <div v-if="loading" class="flex justify-center items-center my-5">
                <si-loader></si-loader>
            </div> -->
            
            <div v-if="reviews.results.length > 0">
                <si-slidingone component="si-review" :list="reviews.results" :internalVisibleItems="1"></si-slidingone>
            </div>

        </div>
        

    </div>
</template>

<script>
export default {

    data() {
        return {
            reviews: { paginate: { page: 0 }, results: [] },
            reviews_title: this.$settings.sections.reviews,
            compeny_name: this.$settings.sections.navbar.name,
            loading: true,
        }
    },
    async fetch() {
        const { data } = await this.$storeino.reviews.search({})
        this.reviews = data;
        this.loading = false;
    },
}
</script>

<style></style>

