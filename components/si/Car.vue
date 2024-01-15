<template>
    <div>
        <div class="flex justify-center items-center py-8">
            <nuxt-link :to="`/auto-info/${item.slug}`">
                <nuxt-img class="h-40" :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                    alt="car_image" />
            </nuxt-link>
        </div>
        <div class="bg px-2 py-6">
            <div class="text-center pb-8 font-semibold ">
                {{ item.seo.title }}
                <div class="border-b-2 pt-5"></div>
            </div>
            <div class="px-3 pb-4">
                <div class="flex flex-wrap justify-start items-center ">
                    <!-- <div v-if="item.bookingProps.extraInfo.length > 0" v-for="info in item.bookingProps.extraInfo.slice(3)"
                        :key="info" class=" font-light py-1 w-2/4 text-xs">

                        <span class=" text-xs ">+</span> {{ info.name }}

                    </div> -->
                </div>
            </div>
            <div class="flex flex-row justify-around items-center text-red-600">
                {{this.$store.state.currency.symbol}} {{ item.price.salePrice }}/ per day
                <div>
                    <nuxt-link :to="`/auto-info/${item.slug}`" :title="item.name" :aria-label="item.name">
                        <button type="submit"
                            class="w-20 py-2 text-sm rounded text-black border-2 border-black focus:outline-none hover:bg-red-600 hover:border-opacity-0 hover:text-white">
                            RENT IT
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style></style>