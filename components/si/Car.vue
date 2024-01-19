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
                <div class="border-b pt-5"></div>
            </div>
            <div class="px-3 ">
                <div class="flex flex-wrap justify-start items-center ">
                    <div v-if="item.bookingProps.extraInfo.length > 0" v-for="info in item.bookingProps.extraInfo"
                        :key="info" class="flex flex-row font-light py-1 w-2/4 text-xs">

                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 24 24">
                            <path
                                d="M5.268,10.732c-0.976-0.976-2.559-0.976-3.536,0s-0.976,2.559,0,3.536l4.645,4.645	c1.449,1.449,3.797,1.449,5.246,0L12.536,18L5.268,10.732z"
                                opacity=".35"></path>
                            <path
                                d="M22.268,4.732c-0.976-0.976-2.559-0.976-3.536,0L9,14.464L12.536,18l9.732-9.732C23.244,7.291,23.244,5.708,22.268,4.732z">
                            </path>
                        </svg>

                        <div class="pl-1">
                            {{ info.name }}
                        </div>

                    </div>
                    <!-- <div v-else-if="item.bookingProps.extraInfo.length > 0">

                                    </div> -->
                </div>
            </div>
            <div class="flex flex-row justify-around items-center text-red-600">
                {{ this.$store.state.currency.symbol }} {{ item.price.salePrice }}/ per day
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