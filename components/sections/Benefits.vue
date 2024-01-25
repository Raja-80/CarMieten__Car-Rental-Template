<template>
    <div v-if="benefits.show_section" class="container pb-24 pt-20">

        <div  class="flex flex-col justify-center items-center pb-28">
            <h1 v-if="benefits.show_title" class="text-black font-semibold text-3xl">
                {{ benefits.title }}
            </h1>
            <p v-if="benefits.show_description" class="text-gray-400 font-normal italic font-serif text-lg">
                {{ benefits.description }}
            </p>
        </div>

        <div class="flex flex-col lg:flex-row justify-around items-center">

            <div v-if="benefit_1.show" class="flex flex-col justify-center items-center lg:mx-4 my-4">

                <nuxt-img class="h-30 mb-6" :src="benefit_1.icon ? benefit_1.icon.src : $store.state.defaults.logo"
                    alt="company logo" />

                <h2 class="text-black text-center mb-6 text-lg font-semibold px-16">
                    {{ benefit_1.title }}
                </h2>

                <p class="text-black text-center text-sm font-light leading-loose">
                    {{ benefit_1.description }}
                </p>

            </div>

            <div v-if="benefit_2.show" class="flex flex-col justify-center items-center lg:mx-4 my-4">

                <nuxt-img class="h-30 mb-6" :src="benefit_2.icon ? benefit_2.icon.src : $store.state.defaults.logo"
                    alt="company logo" />

                <h2 class="text-black text-center mb-6 text-lg font-semibold px-16">
                    {{ benefit_2.title }}
                </h2>

                <p class="text-black text-center text-sm font-light leading-loose">
                    {{ benefit_2.description }}
                </p>

            </div>

            <div v-if="benefit_3.show" class="flex flex-col justify-center items-center lg:mx-4 my-4">

                <nuxt-img class="h-30 mb-6" :src="benefit_3.icon ? benefit_3.icon.src : $store.state.defaults.logo"
                    alt="company logo" />

                <h2 class="text-black text-center mb-6 text-lg font-semibold px-16">
                    {{ benefit_3.title }}
                </h2>

                <p class="text-black text-center text-sm font-light leading-loose">
                    {{ benefit_3.description }}
                </p>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            logo: this.$settings.sections.navbar.logo,
            benefits: this.$settings.sections.benefits,
            benefit_1: this.$settings.sections.benefit_1,
            benefit_2: this.$settings.sections.benefit_2,
            benefit_3: this.$settings.sections.benefit_3,
        };
    },
};
</script>
  
<style ></style>
  