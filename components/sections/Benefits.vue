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

        <div v-if="benefits.items" class="flex  flex-wrap justify-center items-center ">

            <div v-for="(key,i) in Object.keys(benefits.items)" :key="i" class="flex flex-col items-center gap-3 lg:gap-5 w-full md:w-1/2 lg:w-1/4 lg:mx-4 my-4">

                <nuxt-img v-if="benefits.items[key].show_icon" class="h-20 mb-6" :src="benefits.items[key].icon ? benefits.items[key].icon.src : $store.state.defaults.logo"
                    :alt="benefits.items[key].title" />

                <h2 class="text-black text-center mb-6 text-lg font-semibold px-16">
                    {{ benefits.items[key].title }}
                </h2>

                <p v-if="benefits.items[key].show_description" class="text-black text-center text-sm font-light leading-loose">
                    {{ benefits.items[key].description }}
                </p>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            benefits: this.$settings.sections.benefits,
        };
    },
};
</script>
  
<style ></style>
  