<template>
    <div v-if="services.show_section" class="container lg:pb-44 pb-64 pt-32 flex lg:flex-row flex-col justify-around items-center">

        <div class="flex flex-col px-4">
            <div class="flex justify-start pb-20 ">

                <div class="flex flex-col">

                    <h1 v-if="services.show_title" class="text-black font-medium ext-3xl pb-6">
                        {{ services.title }}
                    </h1>

                    <p v-if="services.show_description" class="text-black text-sm font-light leading-loose w-4/4 ">
                        {{ services.description }}
                    </p>
                </div>

            </div>

            <!-- Services -->

            <div class=" pr-0">
                <div class="flex flex-row ">

                    <nuxt-img v-if="service_1.show_icon" class=" h-11 mb-6 pr-2"
                        :src="service_1.icon ? service_1.icon.src : $store.state.defaults.logo" alt="company logo" />

                    <div>
                        <h2 v-if="service_1.show_title" class="text-black font-normal text-lg ">
                            {{ service_1.title }}
                        </h2>
                        <p v-if="service_1.show_description" class=" text-base font-light text-gray-400">
                            {{ service_1.description }}
                        </p>
                    </div>


                </div>

                <div class="flex flex-row ">

                    <nuxt-img v-if="service_2.show_icon" class=" h-11  mb-6 pr-2"
                        :src="service_2.icon ? service_2.icon.src : $store.state.defaults.logo" alt="company logo" />

                    <div>
                        <h2 v-if="service_2.show_title" class="text-black font-normal text-lg ">
                            {{ service_2.title }}
                        </h2>
                        <p v-if="service_2.show_description" class="text-gray-400 font-light text-base  ">
                            {{ service_2.description }}
                        </p>
                    </div>


                </div>

                <div class="flex flex-row ">

                    <nuxt-img v-if="service_3.show_title" class=" h-11  mb-6 pr-2"
                        :src="service_3.icon ? service_3.icon.src : $store.state.defaults.logo" alt="company logo" />

                    <div>
                        <h2 v-if="service_3.show_title" class="text-black font-normal text-lg ">
                            {{ service_3.title }}
                        </h2>
                        <p v-if="service_3.show_description" class=" text-base font-light text-gray-400 ">
                            {{ service_3.description }}
                        </p>
                    </div>


                </div>

                <div class="flex flex-row ">

                    <nuxt-img v-if="service_4.show_icon" class=" h-11  mb-6 pr-2"
                        :src="service_4.icon ? service_4.icon.src : $store.state.defaults.logo" alt="company logo" />

                    <div>
                        <h2 v-if="service_4.show_title" class="text-black font-normal text-lg ">
                            {{ service_4.title }}
                        </h2>
                        <p v-if="service_4.show_description" class=" text-base font-light text-gray-400 ">
                            {{ service_4.description }}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    
        <!-- Right Side Images -->

        <div class="">

            <div v-if="services.show_image_1" class="relative lg:pl-0 w-96 pl-32 pt-10">
                <img class="rounded-full border-solid border-8 border-white shadow-xl lg:w-96 lg:h-96 w-52 h-52  "
                    :src="services.image_1 ? services.image_1.src : $store.state.defaults.logo" alt="image description">
            </div>

            <div v-if="services.show_image_2" class="relative pl-0 w-96">
                <img class="rounded-full border-solid border-8 border-white shadow-xl lg:w-64 lg:h-64 w-44 h-44  absolute lg-bottom-40 lg:-left-24 left-8 -bottom-24"
                    :src="services.image_2 ? services.image_2.src : $store.state.defaults.logo" alt="image description">
            </div>

            <div v-if="services.show_image_3" class="relative pl-0 w-96 pb">
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
            service_1: this.$settings.sections.service_1,
            service_2: this.$settings.sections.service_2,
            service_3: this.$settings.sections.service_3,
            service_4: this.$settings.sections.service_4,

        }
    },
}
</script>

<style></style>