<template>
    <div class="container pb-20">
        <div class="flex lg:flex-row flex-col justify-between lg:pt-24">

            <nuxt-img class="lg:h-96 lg:w-96 h-12 w-12 border-2 border-black absolute top-44 left-80"
                :src="item.images[0] ? item.images[0] : $store.state.defaults.logo" alt="customer profile" />

            <div class="">

                <div
                    class="pt-10 lg:h-52 lg:w-5/12 lg:absolute lg:top-52 lg:right-96 lg:shadow-xl lg:pt-20 lg:px-20 lg:bg-white font-light text-gray-500 leading-loose text-sm">
                    {{ item.content }}
                </div>

                <div class="">
                    <img class="lg:h-16 lg:w-16 h-12 w-12 absolute lg:top-52 lg:right-96 bottom-72 right-12 "
                        src="~/assets/images/quotation.png" alt="company logo" />
                </div>

                <div class=" lg:mt-52 lg:ml-12">
                    <div class=" text-sm font-medium">
                        {{ `${item.customer.firstname} ${item.customer.lastname}` }}
                    </div>

                    <div class=" text-xs font-light text-black">
                        AUTOSTAR CUSTOMER
                    </div>
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
}
</script>

<style></style>