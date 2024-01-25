<template>
    <div>
        <div class="flex justify-center items-center py-8">
            <nuxt-link :to="`/auto-info/${item.slug}`">
                <nuxt-img class="h-40" :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                    alt="car_image" />
            </nuxt-link>
        </div>
        <div class="bg px-2 py-6">
            <div class=" flex flex-col justify-center items-center pb-8 ">
                <div class="text-center font-semibold ">
                    {{ item.seo.title }}
                </div>
                <div class="flex flex-row justify-around items-center w-full pt-8">
                    <div class="flex flex-col justify-center items-center ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-fuel">
                            <line x1="3" x2="15" y1="22" y2="22" />
                            <line x1="4" x2="14" y1="9" y2="9" />
                            <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                            <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                        </svg>

                        <span class="text-sm font-light pt-2">
                            {{ getEngine() }}
                        </span>
                    </div>

                    <div class="flex flex-col justify-center items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-fuel">
                            <line x1="3" x2="15" y1="22" y2="22" />
                            <line x1="4" x2="14" y1="9" y2="9" />
                            <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                            <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                        </svg>

                        <span class="text-sm font-light pt-2">
                            {{ getFuel() }}
                        </span>
                    </div>

                    <div class="flex flex-col justify-center items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-fuel">
                            <line x1="3" x2="15" y1="22" y2="22" />
                            <line x1="4" x2="14" y1="9" y2="9" />
                            <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                            <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                        </svg>

                        <span class="text-sm font-light pt-2">
                            {{ getTransmission() }}
                        </span>
                    </div>
                </div>
                <div class="border-b border-gray-100 pt-5"></div>
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
                {{ this.$store.state.currency.symbol }} {{ item.price.salePrice }}/ {{ item.bookingProps.priceBy }}
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
    },
    methods: {

        getTransmission() {

            for (let itm of this.item.collections) {
                if (itm.name && itm.name.includes('TRANSMISSION')) {
                    const firstWord = itm.slug.replace(/-/g, ' ').toUpperCase().split(' ')[0];
                    return firstWord;
                }
            }

        },

        getEngine() {

            for (let itm of this.item.collections) {
                if (itm.name && itm.name.includes('ENGINE VOLUME')) {
                    return itm.slug.replace(/-/g, '').toUpperCase();;
                }
            }

        },

        getFuel() {

            for (let itm of this.item.collections) {
                if (itm.name && itm.name.includes('FUEL TYPE')) {
                    return itm.slug.replace(/-/g, '').toUpperCase();;
                }
            }

        },
    },
}
</script>

<style></style>