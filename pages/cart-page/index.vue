<template>
    <div class="container pb-10 pt-12 ">

        <div class="flex flex-col justify-start border  ">

            <div v-if="loading.cart" class="flex items-center justify-center my-5">
                <si-loader></si-loader>
            </div>

            <div class="flex lg:flex-row flex-col justify-center lg:items-start items-center border-b lg:h-72 h-96">
                <div class="flex flex-col border-r  h-full">

                    <div class="lg:flex hidden justify-center items-center w-16 text-center h-10 bg pb-10 "></div>

                    <div class="flex justify-center items-center w-16 h-full ">
                        <button
                            class=" w-5 text-sm font-extrabold text-center rounded-full text-gray-400  hover:bg-red-600 hover:text-white">
                            x
                        </button>
                    </div>
                </div>

                <div class=" lg:flex hidden flex-col border-r  h-full">

                    <div class="flex justify-center items-center w-40 text-center h-10 bg pb-10 ">
                    </div>

                    <div class="flex justify-center items-center w-40 px-6  h-full ">
                        <img src="~/assets/images/cars/4494977815b9b41fc38001632250464_0_0.jpg" alt="Car Image">
                    </div>

                </div>

                <div class="flex flex-col border-r h-full">

                    <div class="flex justify-center items-center w-96 text-center  py-2 font-normal text-black bg">
                        PRODUCT
                    </div>

                    <div class="flex flex-col justify-center items-start w-96  pl-4 pb-3 pt-3  h-full">

                        <p class="text-sm font-normal text-black ">Your Auto :</p>

                        <nuxt-link v-if="selectedCar" :to="`/auto-info/${selectedCar.slug}`">
                            <div class=" text-sm font-medium text-black hover:text-red-600 hover:underline ">
                                {{ selectedCar.name }}
                            </div>
                        </nuxt-link>

                        <p class="text-sm font-medium text-black py-1">Pickup Date: {{ pickupDate }}</p>
                        <p class="text-sm font-medium text-black py-1">Drop-off Date: {{ dropOffDate }}</p>
                        <p class="text-sm font-medium text-black py-1">Start Location: {{ pickupLocation }}</p>
                        <p class="text-sm font-medium text-black py-1">Finish Location: {{ dropOffLocation }}</p>

                        <div class="selected-items">
                            <div v-for="(item, index) in selectedItems" :key="index">
                                {{ item.name }} - {{ item.price }} / {{ item.duration }}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex flex-col border-r h-full">

                    <div class="flex justify-center items-center w-32 text-center  py-2 font-normal text-black bg">
                        PRICE</div>

                    <div class="flex justify-center items-center w-32 h-full ">
                        <p class=" text-red-600 text-center">${{ selectedCar.price.salePrice }}</p>
                    </div>
                </div>
                <div class="flex flex-col border-r h-full">

                    <div class="flex justify-center items-center w-64 text-center  py-2 font-normal text-black bg">
                        QUANTITY</div>

                    <div class="flex flex-col justify-center items-center w-64 h-full ">
                        <p class=" text-sm font-light text-black ">
                            {{ numberOfDays }} Day(s)
                        </p>
                        <!-- <p class=" text-xs font-extralight italic text-black ">
                            Save Up 25% to rental from 3 days<br>
                            Save Up 50% to rental from 5 days
                        </p> -->
                    </div>
                </div>
                <div class="flex flex-col   h-full">

                    <div class="flex justify-center items-center w-36 text-center  py-2 font-normal text-black bg">
                        SUBTOTAL</div>

                    <div class="flex justify-center items-center w-36 h-full ">
                        <p class=" text-red-600 font-semibold text-center">$ 1,330.00</p>
                    </div>
                </div>
            </div>

            <div class=" flex flex-row justify-start items-center pl-4 py-2">

                <input type="text" placeholder="Coupon code" class=" placeholder-gray-300 text-xs border w-80 pl-3 py-2 ">

                <div>
                    <button @click="applyCoupon"
                        class=" text-white text-center font-medium text-xs border-2 border-black bg-black hover:bg-opacity-70 hover:border-opacity-0 w-36 py-2 ml-2 ">
                        APPLY COUPON
                    </button>

                </div>

            </div>

        </div>

        <!-- total section div -->
        <div class=" flex flex-col justify-center items-start w-2/4 pt-10 ml-auto">

            <div class="text-xl pb-1">CART TOTALS</div>

            <div class="flex flex-row w-full mb-4  border">
                <div class="  text-black font-medium text-sm w-2/5 py-2 pl-4 bg ">
                    TOTAL
                </div>

                <div class=" text-red-600 text-sm w-3/5 pl-3 py-2  ">$ 1,330.00</div>
            </div>

            <nuxt-link :to="`/checkout/`" class="w-full">
                <div class=" text-xl py-3  text-center text-white bg-red-600 hover:bg-opacity-90">
                    PROCEED TO CHECKOUT
                </div>
                <!-- <button v-if="$settings.sections.product.proceed_to_checkout.active"
                                v-show="!$store.state.apps.find(a => a.placement.indexOf('REPLACE_BUYNOW') >= 0)"
                                @click="buyNow"
                                class="flex justify-center w-full p-2 text-white ai-c bg-primary click-effect">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                    class="w-6 h-6 translate">
                                    <path fill="currentColor"
                                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">
                                    </path>
                                </svg>
                                <span>&ensp;</span>
                                <span class="w-full">{{ $settings.sections.product.proceed_to_checkout.text }}</span>
                            </button> -->

            </nuxt-link>
            <si-app-loader v-show="!outofstock" placement="REPLACE_BUYNOW" />
            <si-app-loader placement="AFTER_ADD_TO_CART" />
        </div>


    </div>
</template>

<script>

export default {
    data() {
        return {
            loading: { cart: true, upsells: true },
            items: [],
            total: 0,
            upsells: [],
            pickupDate: '',
            dropOffDate: '',
            // pickupLocation: '',
            dropOffLocation: '',
            selectedItems: [],
            selectedCar: null,
            couponCode: '',
        };
    },
    computed: {
        totalCost() {
            // Check if the selected car and dates are available
            if (this.selectedCar && this.pickupDate && this.dropOffDate) {
                // Calculate the number of days between pickup and drop-off dates
                const startDate = new Date(this.pickupDate);
                const endDate = new Date(this.dropOffDate);
                const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

                // Calculate the total cost of the car rental (price per day * number of days)
                const carRentalCost = this.selectedCar.price.salePrice * numberOfDays;

                // Calculate the total cost including items
                const itemsTotalPrice = selectedItems.reduce((total, item) => {
                    if (item.duration === 'Day') {
                        // Items with duration 'Day' have a price per day
                        return total + item.price * numberOfDays;
                    } else {
                        // Items with 'Total' duration have a fixed price
                        return total + item.price;
                    }
                }, 0);

                // Return the total cost
                return carRentalCost + itemsCost;
            }

            // Return 0 if necessary data is not available
            return 0;
        },
    },
    methods: {

        buyNow() {
            // Add to cart and redirect to checkout
            // if (this.$settings.checkout_required_fields.show_variante_reminder && this.item.type =='variable' && !this.showVarianteModal) {
            //  this.showVarianteModal = true
            //  return;
            // }
            this.addToCart();
            setTimeout(() => {
                window.location.href = '/checkout2';
            }, 500);
        },
        addToCart() {
            // Call add to cart event
            this.$tools.call('ADD_TO_CART', {
                _id: this.item._id,
                quantity: this.quantity.value,
                price: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null
            });
            if (this.$settings.sections.products.add_to_cart_to_checkout) {
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            }
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
        },
    },
    mounted() {

        const queryParams = this.$route.query;

        this.pickupDate = queryParams.pickupDate || '';
        this.dropOffDate = queryParams.dropOffDate || '';
        this.pickupLocation = queryParams.pickupLocation || '';
        this.dropOffLocation = queryParams.dropOffLocation || '';
        this.selectedItems = queryParams.selectedItems || [];
        // this.selectedCar = queryParams.selectedCar || null;

        if (queryParams.selectedCar) {
            this.selectedCar = queryParams.selectedCar;
        }

    },

};
</script>

<style>
.bg {
    background-color: #f7f7f7;
}

.border-r {
    border-right: solid 1.5px #e5e7eb;
}

.border {
    border: solid 1.5px #e5e7eb;
}

.border-b {
    border-bottom: solid 1.5px #e5e7eb;
}
</style>