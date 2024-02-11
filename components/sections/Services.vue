<template>
    <div v-if="services.show_section" class="container lg:pb-44 pb-64 pt-32 flex lg:flex-row flex-col justify-around items-center">

        <div class="flex flex-col px-4">
            <div  class="flex justify-start pb-20 ">

                <div class="flex flex-col">

                    <h1 data-aos="fade-up" v-if="services.show_title" class="text-black font-medium ext-3xl pb-6">
                        {{ services.title }}
                    </h1>

                    <p data-aos="fade-up" v-if="services.show_description" class="text-black text-sm font-light leading-loose w-4/4 ">
                        {{ services.description }}
                    </p>
                </div>

            </div>

            <!-- Services -->

            <div v-if="services.items" class="flex flex-wrap flex-col justify-center w-full pr-0">

                <div data-aos="fade-up" v-for="(key,i) in Object.keys(services.items)" :key="i" class="flex flex-row items-center gap-3 lg:gap-5 w-full md:w-1/2 lg:w-4/5 py-6">

                    <nuxt-img v-if="services.items[key].show_icon" class=" h-11 mb-6 pr-2 "
                        :src="services.items[key].icon ? services.items[key].icon.src : $store.state.defaults.logo" alt="company logo" />

                    <div class="w-full">
                        <h2 v-if="services.items[key].show_title" class="text-black font-normal text-lg ">
                            {{ services.items[key].title }}
                        </h2>
                        <p v-if="services.items[key].show_description" class=" text-base font-light text-gray-400">
                            {{ services.items[key].description }}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    
        <!-- Right Side Images -->

        <div class="">

            <div data-aos="fade-up" v-if="services.show_image_1" class="relative lg:pl-0 w-96 pl-32 pt-10">
                <img class="rounded-full border-solid border-8 border-white shadow-xl lg:w-96 lg:h-96 w-52 h-52  "
                    :src="services.image_1 ? services.image_1.src : $store.state.defaults.logo" alt="image description">
            </div>

            <div data-aos="fade-right" v-if="services.show_image_2" class="relative pl-0 w-96">
                <img class="rounded-full border-solid border-8 border-white shadow-xl lg:w-64 lg:h-64 w-44 h-44  absolute lg-bottom-40 lg:-left-24 left-8 -bottom-24"
                    :src="services.image_2 ? services.image_2.src : $store.state.defaults.logo" alt="image description">
            </div>

            <div data-aos="fade-up" v-if="services.show_image_3" class="relative pl-0 w-96 pb">
                <img class="rounded-full border-solid border-8 border-white shadow-xl lg:w-52 lg:h-52 w-36 h-36  absolute lg:-bottom-52 lg:right-4 right-10 -bottom-36"
                    :src="services.image_3 ? services.image_3.src : $store.state.defaults.logo" alt="image description">
            </div>

        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            services: this.$settings.sections.services,

        }
    },
}
</script>

<style></style>