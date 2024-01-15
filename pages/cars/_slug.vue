<template>
    <div class="container flex flex-row justify-center items-start pb-32 pt-16 w-full ">

        <!-- {{ this.fuels }} -->
        <!-- {{ this.engines }} -->


        <!-- Loader -->
        <div v-if="loading.products" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>


        <div class="flex flex-col justify-between items-center">

            {{ this.params }}

            <!-- CARS SIDE -->
            <div v-if="!loading.products" class="flex flex-col justify-center items-center lg:pr-5  w-5/6">
                <!-- APPEARANCE -->
                <div class="flex flex-row justify-between items-center border-b w-full pb-5 p-3">

                    <!-- SORTING -->
                    <div class="flex flex-row justify-center items-center ">

                        <div class="flex flex-row jusify-center items-center  ml-5">
                            <div class="text-black text-xs font-normal mr-4 ">
                                SORT BY
                            </div>
                            <select
                                class="cursor-pointer pl-4 py-2 text-gray-400 text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none"
                                v-model="params.sort">
                                <option v-for="(sort, i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- LISTING -->
                    <div class="flex flex-row jusify-center items-center ">

                        <!-- LIST ICON -->
                        <div @click="changeView('list')" :key="'list'"
                            :class="{ ' active': currentView === 'list' && lastView !== 'list' }">

                            <svg class=" hover:shadow-md border-2 border-gray-200 cursor-pointer p-1 mr-5 transition-transform transform"
                                xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"
                                :class="{ 'bg-gray-200 rotate-180': currentView === 'list' && lastView !== 'list' }">
                                <path fill="#9ca3af"
                                    d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                            </svg>

                        </div>

                        <!-- GRID ICON -->
                        <div @click="changeView('grid')" :key="'grid'" :class="{ 'active': currentView === 'grid' }">

                            <svg class="hover:shadow-md border-2 border-gray-200 cursor-pointer p-1 transition-transform transform"
                                xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512"
                                :class="{ 'bg-gray-200 rotate-90': currentView === 'grid' && lastView !== 'grid' }">
                                <path fill="#9ca3af"
                                    d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div v-if="!loading.products && items.length == 0" class="flex items-center justify-center my-5">
                    <h1 class="py-3">{{ $settings.sections.cars.no_products_text }}</h1>
                </div>

                <!-- CARS GRID DISPLAYING -->
                <div v-if="currentView === 'grid'" class="flex flex-wrap justify-around items-center">
                    <div v-for="item in items" :key="item._id" class="p-3 lg:w-2/6 ">
                        <div class="flex justify-center items-center py-8">
                            <nuxt-link :to="`/auto-info/${item.slug}`">
                                <nuxt-img class="h-full"
                                    :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                                    alt="car_image" />
                            </nuxt-link>
                        </div>
                        <div class="bg px-2 py-6">
                            <div class="text-center pb-8 font-semibold ">
                                {{ item.seo.title }}
                                <div class="border-b-2 pt-5"></div>
                            </div>
                            <div class="px-3 ">
                                <div class="flex flex-wrap justify-start items-center ">
                                    <!-- <div v-if="item.bookingProps.extraInfo.length > 0"
                                    v-for="info in item.bookingProps.extraInfo.slice(3)" :key="info"
                                    class=" font-light py-1 w-2/4 text-xs">

                                    <span class=" text-xs ">+</span> {{ info.name }}

                                </div> -->
                                </div>
                            </div>
                            <div class="flex flex-row justify-around items-center text-red-600">
                                {{ $store.state.currency.symbol }} {{ item.price.salePrice }}/ per day
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
                </div>


                <!-- CARS LIST DISPLAYING -->
                <div v-else-if="currentView === 'list'" class="flex flex-col justify-around items-center ">
                    <div v-for="item in items" :key="item._id" class="flex flex-row  p-4 lg:w-full ">

                        <div class="flex justify-center items-center py-10 w-2/6">
                            <nuxt-link :to="`/auto-info/${item.slug}`">
                                <nuxt-img class=" h-32 w-full"
                                    :src="item.images[0] ? item.images[0].src : $store.state.defaults.logo"
                                    alt="car_image" />
                            </nuxt-link>
                        </div>

                        <div class="flex flex-col px-4 py-6 w-4/6">

                            <nuxt-link :to="`/auto-info/${item.slug}`">
                                <div class="text-black pb-3 font-semibold hover:text-red-600 hover:underline">
                                    {{ item.seo.title }}
                                </div>
                            </nuxt-link>
                            <div class="text-sm text-black font-light pb-4">
                                {{ item.description }}
                            </div>

                            <div class="flex flex-row items-start w-full">

                                <div
                                    class="flex flex-row justify-between items-center bg font-light p-5 text-sm text-black w-3/4">
                                    <div class="flex flex-col justify-start  text-black font-medium">
                                        <div class="flex flex-col justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                AUTO MAKER :
                                            </div>
                                            <span class="text-black font-light pt-1">
                                                {{ item.collections[0].name.toUpperCase() }}</span>
                                        </div>

                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                MILEAGE :
                                            </div>
                                            <!-- <span class="text-black font-light">
                                            &nbsp &nbsp{{ mileageInfo(item).toUpperCase() }}</span> -->
                                        </div>

                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                ENGINE :
                                            </div>
                                            <!-- <span class="text-black font-light">
                                            &nbsp &nbsp{{ transmission(item).toUpperCase() }}</span> -->
                                        </div>

                                    </div>

                                    <div class="flex flex-col justify-start  text-black font-medium">
                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                AUTO VERSION :
                                            </div>
                                            <!-- <span class="text-black font-light">&nbsp &nbsp {{ item.collections[0].name.toUpperCase() }}</span> -->
                                        </div>

                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                YEAR :
                                            </div>
                                            <!-- <span class="text-black font-light">&nbsp &nbsp {{ mileageInfo(item).toUpperCase() }}</span> -->
                                        </div>

                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                FUEL :
                                            </div>
                                            <!-- <span class="text-black font-light">&nbsp &nbsp {{ carFuel(item).toUpperCase() }}</span> -->
                                        </div>


                                        <div class="flex flex-row justify-start  text-black font-normal text-xs pb-1">
                                            <div>
                                                TRANSMISSION :
                                            </div>
                                            <!-- <span class="text-black font-light">&nbsp &nbsp {{ transmission(item).toUpperCase() }}</span> -->
                                        </div>

                                    </div>

                                </div>

                                <div class=" text-center text-base text-red-600 w-1/4 pt-5">
                                    {{ $store.state.currency.symbol }} {{ item.price.salePrice }}/ per day
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <!-- PAGINATION BUTTONS -->
            <div v-if="items.length > 0" class="flex items-center justify-center w-full p-20">
                <button v-for="pageNumber in paginate.last_page" :key="pageNumber" @click="getItems(pageNumber)" :class="['w-10 h-10 rounded-full m-1 flex items-center justify-center cursor-pointer hover:text-red-600 hover:bg-gray-200 text-base font-semibold',
                    paginate.current_page === pageNumber ? 'bg-red-600 text-white' : 'bg text-black',]">

                    {{ pageNumber }}

                </button>
            </div>
        </div>

        <!-- Filtering side -->
        <div class="hidden lg:flex flex-col justify-center items-start py-10 px-8 bg  ">

            <p class="text-black text-base font-medium pb-6">
                BOOKING TIME
            </p>
            <div class="flex flex-col justify-start items-start pb-12">
                <div class="pb-8 w-full">
                    <datepicker id="pickupDate" v-model="pickupDate"
                        class=" focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
                        placeholder="Select date...">
                    </datepicker>
                </div>

                <div class="w-full ">
                    <datepicker id="dropOffDate" v-model="dropOffDate"
                        class=" focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
                        placeholder="Select date...">
                    </datepicker>
                </div>
            </div>
            <div class="w-full">
                <p class="text-black text-base font-medium pb-6">
                    PICK-UP LOCATION
                </p>
                <div class="w-full pb-12">
                    <select v-model="locations.pickup"
                        class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 focus:border-blue-3 focus:shadow-outline outline-none">

                        <option>Select Location</option>
                        <option v-for="(location, i) in pickuplocations" :key="i">{{ location.name }}</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <p class="text-black text-base font-medium pb-6">
                    DROP-OFF LOCATION
                </p>
                <div class="w-full pb-12">
                    <select v-model="locations.dropoff"
                        class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 focus:border-blue-3 focus:shadow-outline outline-none">

                        <option>Select Location</option>
                        <option v-for="(location, i) in dropofflocations" :key="i">{{ location.name }}</option>

                    </select>
                </div>
            </div>
            <div class="pb-12">
                <p class="text-black text-base font-medium pb-4">
                    PRICE RANGE
                </p>
                <div v-if="filters" class="flex flex-col my-2 w-full" dir="ltr">
                    <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
                </div>
            </div>

            <div class="w-full  pb-12">
                <p class="text-black text-base font-medium pb-4">
                    FUEL TYPE
                </p>
                <select v-model="selectedFuelType" @change="setParams($event, '', )"
                    class="w-full cursor-pointer pl-4 py-2 text-black text-xs bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">
                    <option>All Fuel Types</option>
                    <option v-for="(fuel, i) in fuels.results" :key="i" @change="setParams" value="fuel._id">{{ fuel.name }}
                    </option>
                </select>
            </div>

            <div class="w-full  pb-12">
                <p class="text-black text-base font-medium pb-4">
                    PRODUCTION YEAR
                </p>
                <select v-model="selectedProductionYear"
                    @change="setParams($event, 'productionYear', selectedProductionYear)"
                    class="w-full cursor-pointer pl-4 py-2 text-black text-xs bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">
                    <option>All Production Years</option>
                    <option v-for="(year, i) in years.results" :key="i">{{ year.name }}</option>
                </select>
            </div>

            <div class="w-full  pb-12">
                <p class="text-black text-base font-medium pb-4">
                    ENGINE VOLUME
                </p>
                <select v-model="selectedEngineVolume" @change="setParams($event, 'engineVolume', selectedEngineVolume)"
                    class="w-full cursor-pointer pl-4 py-2 text-black text-xs bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">
                    <option>All Engine Volumes</option>
                    <option v-for="(engine, i) in engines.results" :key="i">{{ engine.name }}</option>
                </select>
            </div>

            <div class="w-full pb-12">
                <p class="text-black text-base font-medium pb-4">
                    CAR BRAND
                </p>
                <select v-model="selectedCarBrand"
                    :selected="params['brand.slug-in'] && params['brand.slug-in'].indexOf(brand.slug) >= 0"
                    @change="setParams($event, 'brand.slug-in', brand.slug)"
                    class="w-full cursor-pointer pl-4 py-2 text-black text-xs bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                    <option>All Brands</option>
                    <option v-for="(brand, i) in brands" :key="i">
                        {{ brand.name }}
                    </option>

                </select>
            </div>

            <div class="item-center mx-10">
                <button @click="resetFilters" type="reset"
                    class=" w-32 py-3 text-sm text-white bg-red-600 focus:outline-none hover:bg-red-700">
                    RESET FILTER
                </button>
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
            loading: {
                products: true,
                filters: true,
                brands: true,
                years: true,
                engines: true,
                fuels: true,
            },
            query: {},
            param: [],
            filters: null,
            years: [],
            engines: [],
            fuels: [],
            items: [],
            brands: [],
            avialableCars: [],
            paginate: { page: 1, limit: 9, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: 9,'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { page: 1, search: this.$route.query.search, limit: 9,'collections.slug-in': [], sort: { createdAt: -1 } },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: this.$settings.sections.cars.sorts.price_desc },
                { field: { 'price.salePrice': -1 }, name: this.$settings.sections.cars.sorts.price_asc },
                { field: { 'name': 1 }, name: this.$settings.sections.cars.sorts.name_desc },
                { field: { 'name': -1 }, name: this.$settings.sections.cars.sorts.name_asc },
                { field: { createdAt: -1 }, name: this.$settings.sections.cars.sorts.oldest },
                { field: { createdAt: 1 }, name: this.$settings.sections.cars.sorts.newest }
            ],
            pickupDate: null,
            dropOffDate: null,
            form: this.$settings.sections.form,
            selectedFuelType: 'All Fuel Types',
            selectedProductionYear: 'All Production Years',
            selectedEngineVolume: 'All Engines Volumes',
            selectedCarBrand: 'All Brands',
            currentView: 'grid',
            lastView: '',
            locations: {
                pickup: 'Select Location',
                dropoff: 'Select Location',
            },
            pickuplocations: [
                { name: 'Location 01' },
                { name: 'Location 02' },
                { name: 'Location 03' },
                { name: 'Location 04' },
            ],
            dropofflocations: [
                { name: 'Location 01' },
                { name: 'Location 02' },
                { name: 'Location 03' },
                { name: 'Location 04' },
            ],
        };
    },

    async mounted() {

        console.log(this.params, '<- param', this.items, '<- items')

        console.log(this.$route.params.slug)
        if (this.$route.params.slug) {
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });

        }
        console.log('params-collections',this.params['collections.slug-in'])

        for (const key in this.$route.query) {
            if (!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
            }
        }

        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getBrands();
        await this.getYear();
        await this.getFuel();
        await this.getEngine();

        console.log('after lastparams')

        try {
            console.log('Fetching data...');

            this.selectedCarBrand = this.$route.query.maker || 'All Makers';

            this.loading.products = false;
        } catch (error) {
            console.error('Error fetching data:', error);
            this.loading.products = false;
        }
    },
    methods: {

        resetFilters() {
            this.pickupDate = '';
            this.dropOffDate = '';
            this.selectedProductionYear = 'All Production Years';
            this.selectedEngineVolume = 'All Engines Volumes';
            this.selectedFuelType = 'All Fuel Types';
            this.selectedCarBrand = 'All Brands';
        },

        convertToDate(dateString) {
            if (dateString instanceof Date) {
                return dateString;
            }
            if (typeof dateString === 'string') {
                return new Date(dateString);
            }
            return null;
        },

        changeView(newView) {
            if (this.currentView !== newView) {
                this.lastView = this.currentView;
                this.currentView = newView;
            }
        },

        setParams(e, key, value) {
            if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
                this.$set(this.params, key, e.target.value);
                return false;
            } else {
                if (e.target.selected) {
                    if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            for (const key in this.params) {
                switch (key) {
                    case 'collections.slug-in': this.param = this.params[key]; break;
                    case 'price.salePrice-from': this.query['price-from'] = this.params[key]; break;
                    case 'price.salePrice-to': this.query['price-to'] = this.params[key]; break;
                    case 'brand.slug-in': this.query['brands'] = this.params[key]; break;
                    case 'page': this.query['page'] = [this.params[key]]; break;

                }
            }
            let url = `/cars/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if (typeof this.query[key] == 'object') {
                    url += `${key}=${this.query[key].join(',')}`;
                } else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },
        async getFilters() {
            this.filters = null;
            this.loading.filters = true;
            try {
                const { data } = await this.$storeino.products.filters({ productType: 'BOOKING' });
                this.filters = data;

            } catch (e) {
                console.log({ e });
            }
            this.loading.filters = false;
        },

        async getYear() {
            this.years = [];
            this.loading.years = true;
            try {
                const { data } = await this.$storeino.collections.search({ parent: '659d351631895c06900c1697' });
                this.years = data;
            } catch (e) {
                console.log({ e });
            }
            this.loading.years = false;
        },

        async getFuel() {
            this.fuels = [];
            this.loading.fuels = true;
            try {
                const { data } = await this.$storeino.collections.search({ parent: '659d0e2231895c06900c077c' });
                this.fuels = data;
            } catch (e) {
                console.log({ e });
            }
            this.loading.fuels = false;
        },

        async getEngine() {
            this.engines = [];
            this.loading.engines = true;
            try {
                const { data } = await this.$storeino.collections.search({ parent: '659d331631895c06900c153e' });
                this.engines = data;
            } catch (e) {
                console.log({ e });
            }
            this.loading.engines = false;
        },

        async getAvialableCars() {
            this.avialableCars = [];
            this.loading.avialableCars = true;
            try {
                // const { data } = await this.$storeino.prod.search({ parent: '659d331631895c06900c153e' });
                // this.avialableCars = data;
            } catch (e) {
                console.log({ e });
            }
            this.loading.avialableCars = false;
        },

        async getBrands() {
            this.brands = [];
            this.loading.brands = true;
            try {
                const { data } = await this.$storeino.brands.search({});
                this.brands = data.results;
            } catch (e) {
                console.log({ e });
            }
            this.loading.brands = false;
        },

        async getItems(page = null) {
            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.products = true;
            try {
                this.params.search = this.$route.query.search;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = 9;
                // if (this.selectedFuelType != 'All Fuel Types' || this.selectedEngineVolume != 'All Engines Volumes' || this.selectedProductionYear != 'All Production Years') {
                //     // this.params.collections.\_id-in = this.selectedFuelType;
                // }
                // this.params.productType = 'BOOKING';
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            } catch (e) {
                console.log({ e });
            }
            this.loading.products = false;
        },


    },
    watch: {
        params: {
            handler(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
                    this.getItems();
                }
            },
            deep: true
        },
        "$route.query.search"(val) {
            this.$set(this.params, 'search', val);
        }
    },
    computed: {


    },

}; 
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>
    