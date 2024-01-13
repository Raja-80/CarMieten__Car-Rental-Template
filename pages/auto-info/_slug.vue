<template>
    <div class="container flex lg:flex-row flex-col justify-between lg:items-start items-center pb-32 pt-14"
        v-if="selectedCar">
        <!-- {{ selectedCar }} -->

        <div class="flex flex-col  w-full px-6 ">
            <!-- {{ disableDates }} -->
            <hr>
            reservedhistory
            {{ this.selectedCar.bookingProps.reservedHistory }}
            <!-- {{ this.selectedCar.images[1].src }} -->
            <!-- {{ selectedCar.slug }} -->
            <!-- {{ this.reviews.data }} -->
            <div class="flex flex-col w-full ">
                <div class="mx-5 mb-16 lg:pb-14 pb-8 lg:mx-0 lg:px-0 border-2 border-gray-100">
                    <div>
                        <!-- <si-carousel component="si-carimage" :list="selectedCar.images"></si-carousel> -->
                        <nuxt-img class="h-full w-full"
                            :src="selectedCar.images[0] ? selectedCar.images[0].src : $store.state.defaults.logo"
                            alt="car" />
                    </div>
                    <!-- <div class="px-10 lg:pt-10">
                        <div>
                            <si-carousel component="si-carimage" :list="selectedCar.images"></si-carousel>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="lg:w-full mx-4 pb-16 lg:pb-0 lg:mx-0">
                <div
                    class="flex lg:flex-row flex-col justify-around bg lg:items-center items-start py-3 lg:py-0 pl-8 lg:pl-0  ">
                    <button @click="changeTitle('VEHICLE DESCRIPTION')"
                        :class="{ 'text-red-600 border-b-2 border-red-600': selectedTitle === 'VEHICLE DESCRIPTION' }"
                        class=" hover:text-red-600  py-5 ">VEHICLE DESCRIPTION</button>
                    <button @click="changeTitle('EQUIPMENT')"
                        :class="{ 'text-red-600 border-b-2 border-red-600': selectedTitle === 'EQUIPMENT' }"
                        class=" hover:text-red-600  py-5 ">EQUIPMENT</button>
                    <button @click="changeTitle('SPECIFICATIONS')"
                        :class="{ 'text-red-600 border-b-2 border-red-600': selectedTitle === 'SPECIFICATIONS' }"
                        class=" hover:text-red-600  py-5 ">SPECIFICATIONS</button>
                    <button @click="changeTitle('REVIEWS')"
                        :class="{ 'text-red-600 border-b-2 border-red-600': selectedTitle === 'REVIEWS' }"
                        class=" hover:text-red-600  py-5">REVIEWS</button>
                </div>
                <!-- Dynamic Content Area -->
                <div class="w-full">
                    <div v-if="selectedTitle === 'VEHICLE DESCRIPTION'" class=" font-light leading-loose pt-12">
                        <!-- {{ selectedCar.html }} -->
                        <div v-html="selectedCar.html" class=" text-black" style="color: black !important;"></div>
                    </div>
                    <div v-if="selectedTitle === 'EQUIPMENT'" class="pt-12">

                        <div class="flex flex-wrap justify-around items-center ">
                            <div v-if="selectedCar.bookingProps.extraInfo.length > 0"
                                v-for="item in selectedCar.bookingProps.extraInfo" :key="item"
                                class=" font-light py-3 w-1/4 mr-2">

                                <span class=" text-red-600 text-lg mr-2">+</span> {{ item.name }}
                                <div class="border-b-2 border-gray-100 pt-3"></div>

                            </div>
                            <!-- <div v-else class=" font-light py-3 w-1/4 mr-2">

                                <div class="text-black text-base text-center font-medium pt-3">
                                    THERE IS NO EQUIPMENT INFORMATION
                                </div>

                            </div> -->
                        </div>

                    </div>
                    <div v-else-if="selectedTitle === 'SPECIFICATIONS'" class=" border-2 border-gray-100 px-8 py-6 mt-14">
                        <div class="flex flex-col justify-start items-start font-light py-3 w-full  ">

                            <!-- 
                                <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                    <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                        {{ item.name }} :

                                    </div>
                                    <div class="lg:w-2/4 text-sm font-light">
                                        {{ item.desc }}

                                    </div>
                                </div>
                                <div class="border-b-2 border-gray-100 pt-3"></div>

                                 </div>  -->


                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    AUTO MAKER :
                                </div>
                                <span class="lg:w-2/4 text-sm font-light">
                                    {{ selectedCar.collections[0].name.toUpperCase() }}</span>
                            </div>

                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    MILEAGE :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">
                                            &nbsp &nbsp{{ mileageInfo(item).toUpperCase() }}</span> -->
                            </div>

                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    ENGINE :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">
                                            &nbsp &nbsp{{ transmission(item).toUpperCase() }}</span> -->
                            </div>


                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    AUTO VERSION :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">&nbsp &nbsp {{ item.collections[0].name.toUpperCase() }}</span> -->
                            </div>

                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    YEAR :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">&nbsp &nbsp {{ mileageInfo(item).toUpperCase() }}</span> -->
                            </div>

                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    FUEL :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">&nbsp &nbsp {{ carFuel(item).toUpperCase() }}</span> -->
                            </div>


                            <div class="flex lg:flex-row flex-col lg:justify-center  items-center">
                                <div class="lg:w-2/4 lg:pl-3 text-sm font-medium lg:pb-0 pb-3">
                                    TRANSMISSION :
                                </div>
                                <!-- <span  class="lg:w-2/4 text-sm font-light">&nbsp &nbsp {{ transmission(item).toUpperCase() }}</span> -->
                            </div>

                        </div>
                    </div>
                    <div v-else-if="selectedTitle === 'REVIEWS'" class="pt-14">

                        <div v-for="(review, index) in filteredReviews" :key="index"
                            class="flex flex-row justify-start items-start w-full pb-10">
                            <div class=" lg:w-1/6 w-3/6 lg:mx-8 mx-4 p-2">
                                <nuxt-img class=" rounded-full border-4 border-gray-200"
                                    :src="review.images[0] ? review.images[0] : $store.state.defaults.logo" alt="profile" />
                            </div>
                            <div class="w-5/6 flex flex-col justify-center items-start py-2">
                                <div class="text-black font-bold text-sm pb-1">{{ review.customer.firstname }} {{
                                    review.customer.lastname }}</div>
                                <div class=" text-red-600 font-light text-sm pb-1">{{ formatReviewDate(review.createdAt)
                                }}
                                </div>
                                <div class=" text-yellow-500 pb-1"><span v-html="getStarIcons(review.rating)"></span>
                                </div>
                                <div class="text-sm text-black leading-loose font-light pb-1">{{ review.content }}</div>
                            </div>
                        </div>

                        <si-app-loader placement="REPLACE_REVIEWS" class="pt-10" />

                    </div>
                </div>
            </div>
        </div>

        <!-- Filtering side -->
        <div class="flex flex-col justify-center lg:items-start items-center lg:w-2/6  ">
            <p class="w-full text-white bg-black text-center text-xl font-medium py-4">
                ${{ selectedCar.price.salePrice }}/ per day
            </p>

            <div class="bg w-full py-12 px-10">

                <div class="w-full pb-12">
                    <label class="block mb-1 text-black text-sm font-normal " for="pickupDate">DROP-OFF LOCATION</label>
                    <select v-model="locations.dropOff" placeholder="Select Location"
                        class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                        <option>Select Location</option>
                        <option v-for="(location, i) in dropofflocations" :key="i">{{ location.name }}</option>

                    </select>
                </div>
                <div class="w-full flex flex-col justify-start items-start pb-12">
                    <div class="pb-8 w-full">
                        <label class="block mb-1 text-black text-sm font-normal " for="pickupDate">{{ form.pickup
                        }}</label>
                        <datepicker id="pickupDate" v-model="pickupDate"
                            class=" focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
                            placeholder="Pick-up date"
                            :disabled-date="populateDisabledDates(this.selectedCar.bookingProps.reservedHistory)"
                            :disabled-dates="disableDates">
                        </datepicker>
                    </div>
                    <div class=" w-full">
                        <label class="block mb-1 text-black text-sm font-normal" for="dropOffDate">{{ form.dropoff
                        }}</label>
                        <datepicker id="dropOffDate" v-model="dropOffDate"
                            class=" focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
                            placeholder="Drop-off date"
                            :disabled-date="populateDisabledDates(this.selectedCar.bookingProps.reservedHistory)"
                            :disabled-dates="disableDates">
                        </datepicker>
                    </div>
                </div>

                <div class="w-full pb-12">
                    <label class="block mb-1 text-black text-sm font-normal pb-4" for="pickupDate">EXTRA
                        RESOURCE</label>
                    <div>
                        <ul>
                            <li v-for="(item, index) in items" :key="index">
                                <label :for="'toggle' + index"
                                    class="flex flex-row justify-between items-center cursor-pointer w-full  ">

                                    <div class="relative pb-3 flex flex-row justify-between items-center w-4/6 ">
                                        <div class="  w-4/12">
                                            <input type="checkbox" :id="'toggle' + index" class="hidden"
                                                v-model="item.selected" />
                                            <div class="toggle-wrapper w-12 h-6 bg-gray-300 rounded-full shadow-inner">
                                            </div>
                                            <div
                                                class="toggle-button absolute w-5 h-4 bg-white rounded-full shadow-md inset-y-0 left-1 mt-2">
                                            </div>
                                        </div>

                                        <div class=" text-gray-700 font-light text-xs w-12 mr-7">{{ item.name }}</div>

                                    </div>

                                    <div class="w-2/6">
                                        <div class="mb-3 text-gray-700 font-light text-xs  ml-3 ">
                                            <span class=" text-red-600"> ${{ item.price }} </span> /{{ item.duration }}
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="w-full">
                    <button @click="addToCart" type="button"
                        class=" w-full py-3 text-sm text-white bg-red-600 focus:outline-none hover:bg-red-700">
                        BOOKING THIS CAR
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
            pickupDate: '',
            dropOffDate: '',
            form: this.$settings.sections.form,
            selectedCar: null,
            selectedTitle: 'VEHICLE DESCRIPTION',
            disableDates: {},
            reviews: { paginate: { page: 0 }, results: [] },
            locations: {
                pickup: 'Select Location',
                dropOff: 'Select Location',
            },
            items: [
                { name: 'CHILD SEAT', selected: false, price: 50, duration: 'Total' },
                { name: 'ADDITIONAL DRIVER', selected: false, price: 35, duration: 'Total' },
                { name: 'GPS NAVIGATION', selected: false, price: 25, duration: 'Day' },
                { name: 'WIFI ACCESS', selected: false, price: 15, duration: 'Day' },
            ],
            dropofflocations: [
                { name: 'Location 01' },
                { name: 'Location 02' },
                { name: 'Location 03' },
                { name: 'Location 04' },
            ]

        };
    },

    methods: {

        async fetchData() {
            const { slug } = this.$route.params;
            try {
                const { data } = await this.$storeino.products.get({ slug });
                this.selectedCar = data;

                this.reviews = await this.$storeino.reviews.search({});

                // this.disableDates = this.getDisabledDates(this.selectedCar.bookingProps.reservedHistory);

                const reservedHistory = this.selectedCar.bookingProps.reservedHistory;
                // this.disableDates = this.populateDisabledDates(reservedHistory);

                // this.$store.state.seo.title = (this.selectedCar.seo.title || this.selectedCar.name) + ' - ' + this.$settings.store_name;
                // this.$store.state.seo.description = this.selectedCar.seo.description || this.selectedCar.description || this.$settings.store_description;
                // this.$store.state.seo.keywords = this.selectedCar.seo.keywords.length > 0 ? this.selectedCar.seo.keywords || [] : this.$settings.store_keywords || [];

                if (this.selectedCar.images.length > 0) { this.$store.state.seo.image = this.selectedCar.images[0].src; }
                // New meta tags
                // [{ hid: "product:price:amount", property: "product:price:amount", content: this.price.salePrice },
                // { hid: "productID", itemprop: "productID", content: this.selectedCar && this.selectedCar ? this.selectedCar._id : 'productID' }
                // ].forEach(meta => {
                //     const index = this.$store.state.seo.metaTags.findIndex(m => m.hid === meta.hid);
                //     if (index > -1) { this.$store.state.seo.metaTags.splice(index, 1, meta); }
                //     this.$store.state.seo.metaTags.push(meta);
                // });
                this.loading = false;
                // this.quantity = this.item.quantity;
                // Set default image if exists
                if (this.selectedCar.images.length > 0) this.setImage(0);

                if (this.selectedCar.type == 'simple') {
                    // Check outof stock
                    if (!this.selectedCar.outStock.disabled && this.selectedCar.quantity.instock <= 0) {
                        this.outofstock = true;
                    }
                }

            } catch (err) {
                console.error(err);
                this.$nuxt.error({ statusCode: 404, message: 'product_not_found' });
            }
        },

        populateDisabledDates(reservedDates) {
            return (date, currentDateArray) => {
                // Convert the selected date to a JavaScript Date object
                const currentDate = new Date(date);

                // Check if the currentDate is in the reservedDates array
                const isReserved = reservedDates.some(reservation => {
                    const start = new Date(reservation.startTime);
                    const end = new Date(reservation.endTime);
                    return currentDate >= start && currentDate <= end;
                });

                // Using $set to add the isReserved to the disableDates object with a value of true
                this.$set(this.disableDates, date, isReserved);

                return isReserved
            };
        },

        setImage(index) {
            this.image = this.$tools.copy(this.selectedCar.images[index]);
        },

        changeTitle(title) {
            this.selectedTitle = title;
        },

        formatReviewDate(dateString) {
            const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            const formattedDate = new Date(dateString).toLocaleString('en-US', options);
            return formattedDate;
        },

        toggleItem(index) {
            this.items[index].selected = !this.items[index].selected;
        },

        addToCart() {
            // Call add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.selectedCar._id,
                quantity: this.selectedCar.quantity.value,
                price: this.selectedCar.price.salePrice,
                pickupDate: this.pickupDate,
                dropOffDate: this.dropOffDate,

            });
            if (this.$settings.sections.auto_info.add_to_cart - page) {
                setTimeout(() => {
                    window.location.href = '/cart-page';
                }, 500);
            }
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
        },

        getStarIcons(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;
            const emptyStars = 5 - Math.ceil(rating);

            let stars = '';

            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }

            if (halfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }

            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }

            return stars;
        },

        formatDate(date) {
            const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
        },

    }, computed: {

        filteredReviews() {
            // Reviews based on the selected car
            const selectedProductId = this.selectedCar._id;
            return this.reviews.data.results.filter(review => review.product._id === selectedProductId);
        },
    }, created() {
        this.fetchData();
    },
};
</script>

<style>
.bg {
    background-color: #f7f7f7;
}

.toggle-wrapper {
    transition: background-color 0.3s;
}

.toggle-button {
    transition: transform 0.3s;
}

input:checked+.toggle-wrapper {
    background-color: #f13b2a;
}

input:checked+.toggle-wrapper+.toggle-button {
    transform: translateX(100%);
}

.alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #f87171;
    color: #fff;
    padding: 1rem;
    text-align: center;
    display: none;
}

.show-alert {
    display: block;
}
</style>