<template>
    <div class="container pb-20">
        <div class="flex lg:flex-row flex-col justify-between lg:pt-24 pt-6">

            <nuxt-img class="lg:h-96 lg:w-96 h-56 w-56 border border-gray-50 lg:absolute lg:top-44 lg:left-80"
                :src="item.images[0] ? item.images[0] : $store.state.defaults.logo" alt="customer profile" />

            <div class="">

                <div
                    class="pt-10 lg:h-52 lg:w-5/12 lg:absolute lg:top-52 lg:right-96 lg:shadow-xl lg:pt-20 lg:px-20 lg:bg-white font-light text-gray-500 leading-loose text-sm">
                    {{ item.content }}
                </div>

                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="lg:h-16 lg:w-16 h-12 w-12 absolute lg:top-52 lg:right-96 bottom-40 right-20 "
                        viewBox="0 0 448 512">
                        <path fill="#dc2626"
                            d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                    </svg>
                </div>

                <div class=" lg:mt-52 lg:ml-12">
                    <div class=" text-sm font-medium">
                        {{ `${item.customer.firstname} ${item.customer.lastname}` }}
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