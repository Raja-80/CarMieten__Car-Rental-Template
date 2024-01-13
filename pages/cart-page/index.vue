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
                        <!-- <p class="text-sm font-medium text-black py-1">Start Location: {{ pickupLocation }}</p> -->
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
            </nuxt-link>

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
    mounted() {

        const queryParams = this.$route.query;

        this.pickupDate = queryParams.pickupDate || '';
        this.dropOffDate = queryParams.dropOffDate || '';
        // this.pickupLocation = queryParams.pickupLocation || '';
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