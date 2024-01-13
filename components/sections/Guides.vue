<template>
    <div v-if="guide.show" class="container pb-32 pt-20 ">

        <div v-if="guide.show_title" class="flex flex-col justify-center items-center lg:pb-28 pb-10">
            <h1 class="text-white font-semibold text-3xl text-center lg:px-96 px-6">
                {{ guide.title }}
            </h1>
        </div>

        <div class="flex flex-col lg:flex-row justify-around items-center">

            <div class="flex flex-row justify-center items-center lg:mx-4 my-4">

                <nuxt-img v-if="step_1.show_icon" class="h-30 mb-6 pl-4"
                    :src="step_1.icon ? step_1.icon.src : $store.state.defaults.logo" alt="company logo" />

                <p v-if="step_1.show_info" class=" text-xl text-gray-400 pr-14 pl-8">
                    {{ step_1.info }}
                </p>

            </div>

            <div class="flex flex-row justify-center items-center lg:mx-4 my-4">

                <nuxt-img v-if="step_2.show_icon" class="h-30 mb-6 pl-4"
                    :src="step_2.icon ? step_2.icon.src : $store.state.defaults.logo" alt="company logo" />

                <p v-if="step_2.show_info" class=" text-xl text-gray-400 pr-14 pl-8">
                    {{ step_2.info }}
                </p>

            </div>

            <div class="flex flex-row justify-center items-center lg:mx-4 my-4">

                <nuxt-img v-if="step_3.show_icon" class="h-30 mb-6 pl-4"
                    :src="step_3.icon ? step_3.icon.src : $store.state.defaults.logo" alt="company logo" />

                <p v-if="step_3.show_info" class=" text-xl text-gray-400 pr-14 pl-8">
                    {{ step_3.info }}
                </p>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            guide: this.$settings.sections.guide,
            step_1: this.$settings.sections.step_1,
            step_2: this.$settings.sections.step_2,
            step_3: this.$settings.sections.step_3,
        };
    },
}
</script>
  
<style></style>
  