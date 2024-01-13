<template>
    <div class="container pt-20 pb-32">

        <div v-if="isHomePage" class=" flex justify-around items-center">

            <!-- Banner description -->

            <div class="hidden lg:block bg-fixed text-white pl-4">
                <h1 class=" font-semibold text-6xl mb-2">
                    {{ $settings.sections.banner.title }}
                </h1>
                <p class=" font-light w-10/12 ">
                    {{ $settings.sections.banner.description }}
                </p>
            </div>

            <!-- Banner right side form -->

            <div class="">
                <!-- action="`/cars?maker=${selectedCarMaker}`" -->
                <form v-if="form.active" class="bg-white py-8 px-12 mx-5 flex flex-col justify-center items-center">
                    <div class="flex flex-col justify-start items-start">
                        <div class="pb-7 pt-4 w-full">
                            <label class="block mb-1 text-black text-xs font-light" for="pickupDate">{{ form.pickup
                            }}</label>
                            <datepicker id="pickupDate" v-model="pickupDate"
                                class="w-full font-light  py-2 focus:border-blue-500 focus:shadow-outline outline-none"
                                placeholder="Select date...">
                            </datepicker>
                        </div>

                        <div class="pb-7 pt-3">
                            <label class="block mb-1 text-black text-xs font-light" for="dropOffDate">{{ form.dropoff
                            }}</label>
                            <datepicker id="dropOffDate" v-model="dropOffDate"
                                class="w-full  py-2 focus:border-blue-500 focus:shadow-outline outline-none"
                                placeholder="Select date...">
                            </datepicker>
                        </div>
                    </div>

                    <div class="pb-7 w-full">
                        <label class="block mb-1 text-black text-xs font-light" for="selectItem">{{ form.maker_title
                        }}</label>
                        <div class="relative ">
                            <select v-model="selectedCarMaker"
                                class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                <option>All Makers</option>
                                <option v-for="(maker, i) in brands" :key="i">{{ maker.name }}</option>

                            </select>
                        </div>

                    </div>

                    <div class="pb-4 ">
                        <!-- { path: '/cars', query: { maker: selectedCarMaker, pickupDate, dropOffDate } } -->
                        <nuxt-link :to="`/cars`">
                            <button type="submit" @click="searchCars"
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
            selectedCarMaker: 'All Makers',
            banner: this.$settings.sections.banner,
            form: this.$settings.sections.form,
            brands: [],
        };
    }, async fetch() {

        const { data } = await this.$storeino.brands.search()
        this.brands = data.results;
        // console.log(this.pickupDate);
    },
    computed: {
        isHomePage() {
            return this.$route.path === '/';
        },
    },
    methods: {
        searchCars() {
            const formattedPickupDate = this.pickupDate instanceof Date ? this.pickupDate.toISOString() : '';
            const formattedDropOffDate = this.dropOffDate instanceof Date ? this.dropOffDate.toISOString() : '';

            const queryParams = {
                maker: this.selectedCarMaker,
                pickupDate: formattedPickupDate,
                dropOffDate: formattedDropOffDate,
            };

            const url = `/cars?${new URLSearchParams(queryParams)}`;

            this.$router.push(url);
        },
    },
};
</script>
  
<style >

</style>
  