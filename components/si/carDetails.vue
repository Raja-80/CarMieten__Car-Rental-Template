<template>
    <div class="flex lg:flex-row flex-col justify-center items-center lg:p-4 p-8 w-full ">
        <div class="flex justify-center items-center lg:py-10 py-6  lg:w-2/6">
            <nuxt-link :to="`/auto-info/${item.slug}`">
                <nuxt-img class=" h-32 w-full" :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                    alt="car_image" />
            </nuxt-link>
        </div>

        <div class="flex flex-col px-4 py-6 lg:w-4/6 w-full">

            <nuxt-link :to="`/auto-info/${item.slug}`">
                <div class="text-black pb-3 font-semibold hover:text-primary hover:underline">
                    {{ item.seo.title }}
                </div>
            </nuxt-link>
            <div class="text-sm text-black font-light pb-4">
                {{ item.description }}
            </div>

            <div class="flex lg:flex-row flex-col  items-start w-full">

                <div
                    class="flex lg:flex-row flex-col lg:justify-between items-start bg font-light p-5 text-sm text-black lg:w-3/4 w-full">
                    <div class="flex flex-col justify-start  text-black font-medium">
                        <div
                            class="flex lg:flex-col flex-row justify-start lg:items-start items-center  text-black font-semibold text-xs pb-1">
                            <div>
                                {{ product.auto_maker }}
                            </div>
                            <span class="text-black font-light lg:pt-1 lg:pl-0 pl-4 ">
                                {{ item.brand.name.toUpperCase() }}
                            </span>
                        </div>

                        <div class="flex flex-row justify-start  text-black font-semibold text-xs pb-1">
                            <div>
                                Engine Volume  :
                            </div>
                            <span class="text-black font-light lg:pl-0 pl-4 ">

                                {{ getEngine(item) }}
                            </span>
                        </div>

                    </div>

                    <div class="flex flex-col justify-start  text-black font-medium">

                        <div class="flex flex-row justify-start  text-black font-semibold text-xs pb-1">
                            <div>
                                Year  :
                            </div>
                            <span class="text-black font-light lg:pl-0 pl-4 ">
                                {{ getYearP(item) }}
                            </span>
                        </div>

                        <div class="flex flex-row justify-start  text-black font-semibold text-xs pb-1">
                            <div>
                                Fuel  :
                            </div>
                            <span class="text-black font-light lg:pl-0 pl-4 ">
                                {{ getFuel(item) }}
                            </span>
                        </div>

                        <div class="flex flex-row justify-start  text-black font-semibold text-xs pb-1">
                            <div>
                                Transmission  
                            </div>
                            <span class="text-black font-light lg:pl-0 pl-4 ">
                                {{ getTransmission(item) }}
                            </span>
                        </div>

                    </div>

                </div>

                <div class=" text-center text-base text-primary lg:w-1/4 w-full pt-5">
                    {{ $store.state.currency.symbol }} {{ item.price.salePrice }}/ {{ item.bookingProps.priceBy }}
                </div>

            </div>
            <div class="border-b border-gray-200 py-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    
    data() {
        return {
            product: this.$settings.sections.product,
        }
    },
    
    methods: {

        getYearP(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('PRODUCTION YEAR')) {
                    return itm.slug.replace(/-/g, '');
                }
            }
        },

        getEngine(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('ENGINE VOLUME')) {
                    return itm.slug.replace(/-/g, '');
                }
            }
        },

        getFuel(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('FUEL TYPE')) {
                    return itm.slug.replace(/-/g, '');
                }
            }
        },

        getTransmission(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('TRANSMISSION')) {
                    return itm.slug.replace(/-/g, '  ');
                }
            }
        },

    },
}
</script>

<style></style>