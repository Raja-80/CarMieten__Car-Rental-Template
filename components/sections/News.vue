<template>
    <div class="container lg:pb-32 pt-32">
        <div class="flex flex-col justify-center items-center pb-28 px-5 ">

            <h1 class="text-black font-semibold text-3xl text-center ">

                {{ news_info.title }}

            </h1>

            <p class="  text-gray-400 font-normal italic font-serif text-lg pb-8">

                {{ news_info.under_title }}

            </p>

            <p class="text-black text-center text-sm font-light leading-loose  lg:px-80 px-8">

                {{ news_info.description }}

            </p>

        </div>

        <!-- {{ items[0] }} -->
        <div v-if="items.length > 0">
            <si-carousel component="si-blog" :list="items" ></si-carousel>
        </div>

    </div>
</template>

<script>
export default {
   
    data() {
        return {
            news_info: this.$settings.sections.news,
            items: [],
        }
    },
    async fetch() {

        const { data } = await this.$storeino.pages.search({ type: 'POST' })
        this.items = data.results

    }
}
</script>

<style></style>