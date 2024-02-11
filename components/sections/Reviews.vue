<template>
    <div v-if="reviews_section.show_reviews_section" class="container lg:pb-32 pb-24 pt-20">
        <div class="flex flex-col justify-center items-center ">
            <h1 data-aos="fade-up" class="text-black font-semibold text-3xl text-center ">

                {{ reviews_section.title }}

            </h1>

            <p data-aos="fade-up" class="  text-gray-400 font-normal italic font-serif text-lg pb-8">

                {{ reviews_section.under_title }}

            </p>

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
            reviews_section: this.$settings.sections.reviews,
        }
    },
    
    async fetch() {
        const { data } = await this.$storeino.reviews.search({})
        this.reviews = data;

    },
}
</script>

<style></style>

