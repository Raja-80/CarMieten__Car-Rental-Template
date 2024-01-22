<template>
    <div class="container pt-20 pb-32">

        <div v-if="isHomePage" class=" flex justify-around items-center">

            <!-- Banner title side -->

            <div class="hidden lg:block bg-fixed text-white pl-4">
                <h1 class=" font-semibold text-6xl mb-2">
                    {{ banner.title }}
                </h1>
                <p v-if="banner.show_description" class=" font-light w-10/12 ">
                    {{ banner.description }}
                </p>
            </div>

            <!-- Banner right side form -->

            <div class="">
                <form v-if="form.active" class="bg-white py-8 px-12 mx-5 flex flex-col justify-center items-center">
                    <div class="flex flex-col justify-start items-start">

                        <div class="pb-7 pt-4 w-full">
                            <p class="block mb-1 text-black text-xs font-light">
                                PICK-UP LOCATION
                            </p>
                            <div class="w-full">
                                <select v-model="pickupAdresse"
                                    class="w-full cursor-pointer pl-1 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 hover:border-blue-500 focus:shadow-outline outline-none">

                                    <option>Select Location</option>
                                    <option v-for="(city, index) in uniqueCities" :key="index" :value="city">{{ city }}
                                    </option>

                                </select>
                            </div>
                        </div>

                        <div class="pb-7 pt-4 w-full">
                            <label class="block mb-1 text-black text-xs font-light" for="pickupDate">
                                {{ form.pickup_date }}
                            </label>

                            <datepicker id="pickupDate" v-model="pickupDate"
                                class="w-full font-light  py-2 focus:border-blue-500 focus:shadow-outline outline-none"
                                placeholder="Select date...">
                            </datepicker>
                        </div>

                        <div class="pb-7 pt-3">
                            <label class="block mb-1 text-black text-xs font-light" for="dropOffDate">
                                {{ form.dropoff_date }}
                            </label>

                            <datepicker id="dropOffDate" v-model="dropOffDate"
                                class="w-full  py-2 focus:border-blue-500 focus:shadow-outline outline-none"
                                placeholder="Select date...">
                            </datepicker>
                        </div>
                    </div>

                    <div v-if="form.show_brands" class="pb-7 w-full">
                        <label class="block mb-1 text-black text-xs font-light" for="selectItem">
                            {{ form.brands_title }}
                        </label>

                        <div class="relative ">
                            <select v-model="selectedCarBrands"
                                class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                <option>All Brands</option>
                                <option v-for="(brand, i) in brands" :key="i" :id="brand.slug">{{ brand.name }}</option>

                            </select>
                        </div>

                    </div>

                    <div class="pb-4 ">
                        <nuxt-link :to="`/cars`">
                            <button type="submit" @click="searchItems"
                                class="w-32 py-3 text-sm rounded text-white bg-red-600 focus:outline-none hover:bg-red-700">
                                {{ form.find }}
                            </button>
                        </nuxt-link>

                    </div>
                </form>
            </div>
        </div>

        <!-- For other pages -->
        <div v-else class="flex flex-col text-white pl-4 ">
            <h1 class="font-normal text-3xl pb-6 pt-4 mb-2">{{ $route.name }}</h1>
            <div class="flex flex-row justify-start items-center ">
                <div class="border-b-2 border-white w-6 mr-4 mt-2">
                </div>
                <nuxt-link :to="`/`">
                    <div class="text-white font-light text-xl hover:text-red-600 pr-2">
                        Home
                    </div>
                </nuxt-link>
                <div class="text-white font-light text-xl ">{{ $route.path }}</div>
            </div>
        </div>

    </div>
</template>
  
<script>
import Datepicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {
        Datepicker,
    },
    data() {
        return {
            pickupDate: '',
            dropOffDate: '',
            pickupAdresse: 'Select Location',
            selectedCarBrands: 'All Brands',
            banner: this.$settings.sections.banner,
            form: this.$settings.sections.form,
            products: [],
            brands: [],
        };
    }, async fetch() {

        const { data } = await this.$storeino.brands.search()
        this.brands = data.results;

        const response = await this.$storeino.products.search({ productType: 'BOOKING' });
        this.products = response.data.results;
        
    },
    computed: {

        isHomePage() {
            return this.$route.path === '/';
        },

        uniqueCities() {

            const citiesSet = new Set();

            this.products.forEach((item) => {
                if (item.bookingProps.firstAddresses && item.bookingProps.firstAddresses.length > 0) {
                    item.bookingProps.firstAddresses.forEach((address) => {
                        const city = address.city.name;
                        if (!citiesSet.has(city)) {
                            citiesSet.add(city);
                        }
                    });
                }
            });

            return Array.from(citiesSet);
        },
    },
    methods: {
        searchItems() {
            const formattedPickupDate = this.pickupDate instanceof Date ? this.pickupDate.toISOString() : '';
            const formattedDropOffDate = this.dropOffDate instanceof Date ? this.dropOffDate.toISOString() : '';

            const queryParams = {
                brands: this.selectedCarBrands.toLowerCase(),
                pickupDate: formattedPickupDate,
                dropOffDate: formattedDropOffDate,
            };

            if (this.pickupAdresse !== 'Select Location') {
                queryParams.pickupAdresse = this.pickupAdresse;
            }


            const url = `/cars?${new URLSearchParams(queryParams)}`;

            this.$router.push(url);
        },
    },
};
</script>
  
<style ></style>
  