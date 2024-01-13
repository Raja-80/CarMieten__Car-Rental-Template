<template>
    <div v-if="app.show_section" class="app container pb-32 pt-24 flex lg:flex-row flex-col justify-around items-center">

        <div class=" lg:pl-40 pb-96">

            <div class="lg:pl-20 absolute lg:-top-14 lg:left-96 -top-10 right-2">
                <div>
                    <nuxt-img v-if="app.show_image" class=" "
                        :src="app.image ? app.image.src : $store.state.defaults.logo" alt="company logo" />

                </div>

            </div>

        </div>

        <div class="flex flex-col lg:w-2/4 px-4 lg:px-0 pt-6">
            <div class="flex justify-start lg:pb-20 pb-12">

                <div class="flex flex-col">

                    <p class="text-white text-base font-light pb-2 ">
                        {{ app.top_title }}
                    </p>

                    <h1 class="text-white font-semibold text-4xl pb-6 w-3/4">
                        {{ app.title }}
                    </h1>

                    <p class="text-white text-base font-light leading-loose w-4/4 ">
                        {{ app.description }}
                    </p>
                </div>

            </div>

            <div class="flex lg:flex-row flex-col">

                <div class="pr-16">
                    <nuxt-img v-if="app.show_store" class=" mb-6 pr-2"
                        :src="app.store_icon ? app.store_icon.src : $store.state.defaults.logo" alt="company logo" />

                </div>

                <div>
                    <nuxt-img v-if="app.show_apple" class=" mb-6 pr-2"
                        :src="app.apple_icon ? app.apple_icon.src : $store.state.defaults.logo" alt="company logo" />

                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            app: this.$settings.sections.app,
        }
    },
}
</script>

<style>
.app {
  background-color: rgba(218, 28, 54, 255);
}
</style>