<template>
    <div>
        <div class="flex justify-center items-center py-8">
            <nuxt-link :to="`/auto-info/${item.slug}`">
                <nuxt-img class="h-40" :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                    alt="car_image" />
            </nuxt-link>
        </div>
        <div class="bg px-2 py-8">
            <div class=" flex flex-col justify-center items-center pb-12 px-3 ">
                <div class="text-center font-semibold ">
                    {{ item.seo.title }}
                </div>
                <div class="flex flex-row justify-around items-start w-full pt-8  pb-4">
                    <div class="flex flex-col justify-center items-center p-2 w-2/6">

                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                            <path fill="#d0d1d2"
                                d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
                        </svg> -->

                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512" width="25" height="30">
                            <path fill="#000000"
                                d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                        </svg>

                        <span class="text-xs font-light pt-2">
                            {{ getEngine() }}
                        </span>
                    </div>

                    <div class="flex flex-col justify-center items-center p-2 w-2/6">

                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5">
                            <path fill="#d0d1d2"
                                d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
                        </svg> -->

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-fuel">
                            <line x1="3" x2="15" y1="22" y2="22" />
                            <line x1="4" x2="14" y1="9" y2="9" />
                            <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                            <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                        </svg>

                        <span class="text-xs font-light pt-2">
                            {{ getFuel() }}
                        </span>
                    </div>

                    <div class="flex flex-col justify-center items-center p-2 w-2/6">

                        <!-- <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" class="w-5 h-5">
                            <path fill="#d0d1d2"
                                d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
                        </svg> -->

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-life-buoy">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m4.93 4.93 4.24 4.24" />
                            <path d="m14.83 9.17 4.24-4.24" />
                            <path d="m14.83 14.83 4.24 4.24" />
                            <path d="m9.17 14.83-4.24 4.24" />
                            <circle cx="12" cy="12" r="4" />
                        </svg>

                        <span class="text-xs text-center font-light pt-2 text-black">
                            <!-- {{ getTransmission() }} -->
                            Automatic Transmission
                        </span>
                    </div>

                </div>
            </div>
            <div class="px-6 pb-10">
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

                        <div class="pl-1 text-center">
                            {{ info.name }}
                        </div>

                    </div>

                </div>
            </div>
            <div class="flex flex-row justify-around items-center text-red-600 pb-2">
                {{ this.$store.state.currency.symbol }} {{ item.price.salePrice }}/ {{ item.bookingProps.priceBy }}
                <div>
                    <nuxt-link :to="`/auto-info/${item.slug}`" :title="item.name" :aria-label="item.name">
                        <button type="submit"
                            class="w-20 py-2 text-sm rounded text-black border-2 border-black focus:outline-none hover:bg-red-600 hover:border-opacity-0 hover:text-white">
                            {{ this.$settings.sections.product.rent_it }}
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
                    return itm.slug.replace(/-/g, '  ');

                }
            }

        },

        // getEngine() {

        //     for (let itm of this.item.collections) {
        //         if (itm.name && itm.name.includes('ENGINE VOLUME')) {
        //             return itm.slug.replace(/-/g, '');
        //         }
        //     }

        // },

        // getFuel() {

        //     for (let itm of this.item.collections) {
        //         if (itm.name && itm.name.includes('FUEL TYPE')) {
        //             return itm.slug.replace(/-/g, '');
        //         }
        //     }

        // },

        // getTransmission() {

        //     for (let itm of this.item.collections) {
        //         if (itm.name && itm.name.includes('TRANSMISSION')) {
        //             return this.cleanName(itm.name, 'TRANSMISSION');
        //         }
        //     }
        // },

        getEngine() {

            for (let itm of this.item.collections) {
                if (itm.name && itm.name.includes('ENGINE VOLUME')) {
                    return this.cleanName(itm.name, 'ENGINE VOLUME');
                }
            }
        },

        getFuel() {

            for (let itm of this.item.collections) {
                if (itm.name && itm.name.includes('FUEL TYPE')) {
                    return this.cleanName(itm.name, 'FUEL TYPE');
                }
            }
        },

        cleanName(name, substringToRemove) {

            const cleanedName = name.replace(/[^\w\s]/g, '');
            return cleanedName.replace(substringToRemove, '').trim();
        }

    },
}
</script>

<style></style>