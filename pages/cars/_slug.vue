<template>
    <div class="container flex flex-col justify-center items-center pb-32 pt-16 w-full ">
        <div v-if="loading.products" class="flex items-center justify-center my-8 w-full">
            <si-loader></si-loader>
        </div>
        <div class="flex lg:flex-row flex-col justify-center lg:items-start items-center w-full">
            <div class="flex flex-col justify-between items-center lg:w-3/4 w-4/4">

                <!-- CARS SIDE -->
                <div v-if="!loading.products" class="flex flex-col justify-center items-center lg:pr-5 w-full">

                    <!-- APPEARANCE -->
                    <div class="flex flex-row justify-between items-center border-b w-full pb-5">

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
                        <div class="flex flex-row jusify-center items-center mr-5">

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
                    <div v-if="currentView === 'grid'" class="flex flex-wrap justify-center items-start">
                        <div v-for="item in items" :key="item.id" class="p-3 ">
                            <si-car :item="item"></si-car>
                        </div>
                    </div>


                    <!-- CARS LIST DISPLAYING -->
                    <div v-else-if="currentView === 'list'" class="flex flex-col justify-around items-center ">
                        <div v-for="item in items" :key="item._id"
                            class=" w-full ">

                            <si-car-details :item="item"></si-car-details>

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
            <div v-if="!loading.products && !loading.collections && !loading.brands"
                class=" flex flex-col justify-center items-start py-10 px-8 bg  lg:w-1/4">

                <p class="text-black text-base font-medium pb-6">
                    BOOKING TIME
                </p>
                <div class="flex flex-col justify-start items-start pb-12 w-full">
                    <div class="pb-8 w-full">
                        <p class="text-black text-sm font-normal pb-3">
                            Pick-up Date
                        </p>
                        <datepicker id="pickupDate" v-model="pickupDate" @input="handlePickupDateSelection"
                            class=" focus:border-blue-500 focus:shadow-outline outline-none w-full"
                            :style="{ width: '100%' }" placeholder="Select date..." :disabled-dates="disablePastDates">
                        </datepicker>
                    </div>

                    <p v-if="isPickupDateSelected" class="text-black text-sm font-normal pb-3">
                        Drop-off Date
                    </p>
                    <transition name="slid" v-if="isPickupDateSelected" class="w-full ">
                        <datepicker id="dropOffDate" v-model="dropOffDate"
                            class=" focus:border-blue-500 focus:shadow-outline outline-none w-full"
                            :style="{ width: '100%' }" placeholder="Select date..." :disabled-dates="disablePastDates">
                        </datepicker>
                    </transition>

                    <transition name="slid" v-if="isPickupDateSelected && !dropOffDate">
                        <div class=" text-white text-sm font-light w-full p-2 mt-2 bg-red-500 rounded-md shadow-md">
                            Please choose a Drop-Off Date to find available cars.
                        </div>
                    </transition>
                </div>
                <div class="w-full">
                    <p class="text-black text-base font-medium pb-6">
                        PICK-UP LOCATION
                    </p>
                    <div class="w-full pb-12">
                        <select v-model="locations.pickup"
                            class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 hover:border-blue-500 focus:shadow-outline outline-none">

                            <option>All Locations</option>
                            <option v-for="(city, index) in uniqueCities" :key="index" :value="city">{{ city }}</option>

                        </select>
                    </div>
                </div>

                <div class="pb-12 w-full">
                    <p class="text-black text-base font-medium pb-4 w-full">
                        PRICE RANGE
                    </p>
                    <div v-if="filters" class="flex flex-col my-2 " dir="ltr">
                        <si-price-range @change="setParams" :min="filters.prices.min" :max="filters.prices.max" />
                    </div>
                </div>

                <div v-for="(item, i) in collections" :key="i" class="w-full pb-12 ">
                    <div class="flex items-center">
                        <input v-if="item.childrens && item.childrens.length == 0" class="w-4 h-4 mx-1"
                            :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0"
                            :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)" type="checkbox" />
                        <label @click="setActive(i + 'fit', i + 'ret')" v-if="item.childrens && item.childrens.length > 0"
                            class="capitalize cursor-pointer collec-name text-black text-base font-medium w-full"
                            :for="item.slug">{{ item.name }}</label>
                        <label v-if="item.childrens && item.childrens.length == 0"
                            class="capitalize cursor-pointer collec-name " :for="item.slug">{{ item.name }}</label>
                        <svg @click="setActive(i + 'fit', i + 'ret')" :id="i + 'ret'"
                            v-if="item.childrens && item.childrens.length > 0" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1"
                            width="15" height="15" x="0" y="0" viewBox="0 0 451.847 451.847"
                            style="enable-background:new 0 0 512 512 ; cursor:pointer;" xml:space="preserve"
                            class="rotated">
                            <g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                        fill="#7a7575" data-original="#000000" style="" class="" />
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg">
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div :id="i + 'fit'" class="fit-collapsible pb-2 max-h-40 overflow-y-auto" :class="[
                        item.childrens.length > 0 ? 'sub-collections' : '']">
                        <ul class="list-sub-collections fit-collapsible-content"
                            v-if="item.childrens && item.childrens.length > 0">
                            <li v-for="(child, i) in item.childrens" :key="i" class="pb-2">
                                <input class="w-4 h-4 mx-1"
                                    :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0"
                                    :id="child.slug" @change="setParams($event, 'collections.slug-in', child.slug)"
                                    type="checkbox" />
                                <label :for="child.slug" class="cursor-pointer c-p c-grey">{{ child.name }}</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="pb-12 w-full">


                    <div class="flex items-center w-full">

                        <label @click="setActive('brandFit', 'brandRet')"
                            class="capitalize cursor-pointer collec-name text-black text-base font-medium pb-4 w-full">
                            CAR BRAND
                        </label>
                        <svg @click="setActive('brandFit', 'brandRet')" :id="'brandRet'" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="15" height="15" x="0" y="0"
                            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 512 512; cursor:pointer;"
                            xml:space="preserve" class="rotated">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                    fill="#7a7575" data-original="#000000" style="" class="" />
                            </g>
                        </svg>
                    </div>
                    <div :id="'brandFit'" class="fit-collapsible pb-2 max-h-40 overflow-y-auto" :class="[
                        brands.length > 0 ? 'sub-collections' : '']">
                        <ul class="list-sub-collections fit-collapsible-content">
                            <li v-for="(item, i) in brands" :key="i" class="pb-1">
                                <input class="w-4 h-4 mx-1"
                                    :checked="params['brand.slug-in'] && params['brand.slug-in'].indexOf(item.slug) >= 0"
                                    :id="item.slug" @change="setParams($event, 'brand.slug-in', item.slug)"
                                    type="checkbox" />
                                <label :for="item.slug" class="cursor-pointer c-p c-grey">{{ item.name }}</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-center items-center w-full">
                    <button @click="resetFilters" type="reset"
                        class=" w-32 py-3 text-sm font-semibold text-white bg-red-600 focus:outline-none hover:bg-red-700">
                        {{ this.$settings.sections.cars.reset_filter_text }}
                    </button>
                </div>

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
                collections: true,

            },
            query: {},
            param: [],
            filters: null,
            items: [],
            collections: [],
            showAllBrands: false,
            brands: [],
            paginate: { page: 1, limit: 9, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: 9, 'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { page: 1, search: this.$route.query.search, limit: 9, 'collections.slug-in': [], sort: { createdAt: -1 } },
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
            currentView: 'grid',
            lastView: '',
            locations: {
                pickup: 'All Locations',
                dropoff: 'All Locations',
            },
            cars: [],
            originalItems: [],
            isPickupDateSelected: false,
            year: '',
            engine: '',
            fuel: '',
            transmission: '',
        };
    },

    async mounted() {

        if (this.$route.params.slug) {
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });

        }

        for (const key in this.$route.query) {
            if (!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
                case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(',')); break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
            }
        }

        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getBrands();
        await this.getCollections();

        this.subCollections();

        console.log('after lastparams')

        try {
            console.log('Fetching data...');

            if (this.$route.query.pickupDate) {
                this.pickupDate = new Date(this.$route.query.pickupDate);
            }

            if (this.$route.query.dropOffDate) {
                this.dropOffDate = new Date(this.$route.query.dropOffDate);
            }

            if (this.$route.query.pickupAdresse) {
                this.locations.pickup = this.$route.query.pickupAdresse;
            }

            this.loading.products = false;
        } catch (error) {
            console.error('Error fetching data:', error);
            this.loading.products = false;
        }
    },
    methods: {

        setParams(e, key, value) {
            if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
                this.$set(this.params, key, e.target.value);
                return false;
            } else {
                if (e.target.checked) {
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
                    case 'tags-in': this.query['tags'] = this.params[key]; break;
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

        async updateFilteredItems(applyFilters = true) {

            console.log('Updating filtered items...');

            if (this.dropOffDate === null && (this.locations.pickup === 'All Locations' || this.locations.pickup === '')) {

                this.items = [...this.originalItems];

            } else if (this.dropOffDate === null && (this.locations.pickup !== 'All Locations' || this.locations.pickup !== '')) {

                this.items = this.items.filter(car => {
                    return car.bookingProps && car.bookingProps.firstAddresses &&
                        Array.isArray(car.bookingProps.firstAddresses) && car.bookingProps.firstAddresses.some(address => {
                            return address.city.name === this.locations.pickup;
                        });
                });
            } else if (this.dropOffDate instanceof Date && (this.locations.pickup === 'All Locations' || this.locations.pickup === '')) {

                this.items = this.items.filter(car => {

                    const isAvailableInRange = !car.bookingProps.reservedHistory.some(reservation => {
                        const reservationStart = new Date(reservation.startTime).getTime();
                        const reservationEnd = new Date(reservation.endTime).getTime();
                        const pickupDate = this.pickupDate.getTime();
                        const dropOffDate = this.dropOffDate.getTime();

                        return !(pickupDate > reservationEnd || dropOffDate < reservationStart);
                    });

                    return isAvailableInRange;
                });
            } else if (this.dropOffDate instanceof Date && (this.locations.pickup !== 'All Locations' || this.locations.pickup !== '')) {

                this.items = this.items.filter(car => {

                    const isSameCity = !this.locations.pickup || (car.bookingProps && car.bookingProps.firstAddresses &&
                        Array.isArray(car.bookingProps.firstAddresses) && car.bookingProps.firstAddresses.some(address => {
                            return address.city.name === this.locations.pickup;
                        }));

                    const isAvailableInRange = !car.bookingProps.reservedHistory.some(reservation => {
                        const reservationStart = new Date(reservation.startTime).getTime();
                        const reservationEnd = new Date(reservation.endTime).getTime();
                        const pickupDate = this.pickupDate.getTime();
                        const dropOffDate = this.dropOffDate.getTime();

                        return !(pickupDate > reservationEnd || dropOffDate < reservationStart);
                    });

                    return isSameCity && isAvailableInRange;
                });
            }

            if (applyFilters) {
                await this.getItems(null, false);
            }
            console.log('Filtered items updated.');
        },

        async getItems(page = null, applyFilters = true) {
            console.log('Getting items...');

            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.products = true;
            try {
                this.params.page = page || this.paginate.current_page;
                this.params.limit = 9;
                this.params.productType = 'BOOKING';
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.originalItems = [...this.items];
                this.paginate = data.paginate;

                await this.updateFilteredItems(applyFilters);

            } catch (e) {
                console.log({ e });
            }
            this.loading.products = false;


            console.log('Items retrieved.');
        },


        searchItems() {
            const formattedPickupDate = this.pickupDate instanceof Date ? this.pickupDate.toISOString() : '';
            const formattedDropOffDate = this.dropOffDate instanceof Date ? this.dropOffDate.toISOString() : '';

            const queryParams = {
                pickupDate: formattedPickupDate,
                dropOffDate: formattedDropOffDate,
            };

            if (this.locations.pickup !== 'All Locations') {
                queryParams.pickupAdresse = this.locations.pickup;
            }

            if (this.locations.dropoff !== 'All Locations') {
                queryParams.dropoffAdresse = this.locations.dropoff;
            }

            const url = `/auto-info?${new URLSearchParams(queryParams)}`;

            this.$router.push(url);
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

        async getCollections() {
            this.collections = [];
            this.loading.collections = true;
            try {
                const { data } = await this.$storeino.collections.search({ limit: 1000 });
                this.collections = data.results;
            } catch (e) {
                console.log({ e });
            }
            this.loading.collections = false;
        },

        subCollections() {
            for (let itm of this.collections) {
                if (itm.childrens && itm.childrens.length > 0) itm.childrens = [];
            }
            for (let i = 0; i < this.collections.length; i++) {
                for (let j = 0; j < this.collections.length; j++) {
                    if (
                        this.collections[i] &&
                        this.collections[j] &&
                        this.collections[i].parent == this.collections[j]._id
                    ) {
                        let childObject = this.collections[i];
                        if (!this.collections[j].childrens) {
                            this.collections[j].childrens = [];
                        }
                        this.collections[j].childrens.push(childObject);
                        this.collections.splice(i, 1);
                        i--;
                    }
                }
            }
        },

        onSearchInput() {
            this.getItems();
        },

        getYearP(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('PRODUCTION YEAR')) {
                    return itm.slug.replace(/-/g, '').toUpperCase();;
                }
            }
        },
        getEngine(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('ENGINE VOLUME')) {
                    return itm.slug.replace(/-/g, '').toUpperCase();;
                }
            }
        },
        getFuel(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('FUEL TYPE')) {
                    return itm.slug.replace(/-/g, '').toUpperCase();;
                }
            }
        },
        getTransmission(item) {

            for (let itm of item.collections) {
                if (itm.name && itm.name.includes('TRANSMISSION')) {
                    return itm.slug.replace(/-/g, ' ').toUpperCase();
                }
            }
        },

        toggleShowAllBrands() {
            this.showAllBrands = !this.showAllBrands;
        },

        resetFilters() {
            this.pickupDate = '';
            this.dropOffDate = '';
            this.locations.pickup = 'All Locations';
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

        setActive: function (id, idRet) {
            var element = document.getElementById(id);
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
            var icon = document.getElementById(idRet);
            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
            } else {
                icon.classList.add('active');
            }
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

        async fetchCars() {
            try {
                const { data } = await this.$storeino.products.search({ productType: 'BOOKING' });
                this.cars = data.results;

            } catch (e) {
                console.log({ e });
            }
        },

        handlePickupDateSelection() {
            this.isPickupDateSelected = !!this.pickupDate;
        },

        disablePastDates(date) {
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            return date < currentDate;
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
        },
        'locations.pickup': 'updateFilteredItems',
        dropOffDate: 'updateFilteredItems',
    },
    computed: {

        uniqueCities() {

            const citiesSet = new Set();

            this.cars.forEach((item) => {
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

    created() {
        this.fetchCars();
    },

}; 
</script>

<style>
.bg {
    background-color: #f7f7f7;
}


[dir="ltr"] .collec-name {
    margin-right: auto;
}

[dir="rtl"] .collec-name {
    margin-left: auto;
}


[dir="ltr"] .sub-collections .list-sub-collections {
    list-style: none;
    padding-left: 10px;
}

[dir="rtl"] .sub-collections .list-sub-collections {
    list-style: none;
    padding-right: 10px;
}

[dir="rtl"] .list-sub-collections li {
    text-align: left;
}

.fit-collapsible {
    overflow: unset;
    text-align: left;
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
}

.fit-collapsible .fit-collapsible-content {
    max-height: 0;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
}

.fit-collapsible.active .fit-collapsible-content {
    max-height: 500px;
}

.sub-collections.max-h-40.overflow-y-auto {
    max-height: 100px;
    overflow-y: auto;
}

.sub-collections::-webkit-scrollbar {
    width: 12px;
}

/* Handle */
.sub-collections::-webkit-scrollbar-thumb {
    background-color: #5a6575;
    border-radius: 6px;
}

/* Handle on hover */
.sub-collections::-webkit-scrollbar-thumb:hover {
    background-color: #7d808d;
}

/* Button at the top and bottom of the scrollbar */
.sub-collections::-webkit-scrollbar-button {
    display: none;
}

.rotated {
    transform: rotate(0deg);
    transition: 0.3s;
}

.rotated.active {
    transform: rotate(180deg);
}

[dir="rtl"] .rotated {
    transform: rotate(90deg);
    transition: 0.3s;
}

[dir="rtl"] .rotated.active {
    transform: rotate(0deg);
}
</style>
    