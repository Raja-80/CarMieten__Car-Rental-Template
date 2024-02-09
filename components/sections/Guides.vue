<template>
    <div v-if="guide.show" class="container pb-32 pt-20 ">

        <div v-if="guide.show_title" class="flex flex-col justify-center items-center lg:pb-28 pb-10">
            <h1 class="text-white font-semibold text-3xl text-center lg:px-96 px-6">
                {{ guide.title }}
            </h1>
        </div>

        <div v-if="guide.items" class="flex flex-wrap justify-center ">

            <div v-for="(key,i) in Object.keys(guide.items)" :key="i" class="flex items-center gap-3 lg:gap-5 w-full md:w-1/2 lg:w-1/4 lg:mx-4 my-4">

                <nuxt-img v-if="guide.items[key].show_icon" class="h-20 mb-6 pl-4"
                    :src="guide.items[key].icon ? guide.items[key].icon.src : $store.state.defaults.logo" alt="company logo" />

                <p v-if="guide.items[key].show_info" class=" text-xl text-gray-400 pr-14">
                    {{ guide.items[key].info }}
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
            
        };
    },
}
</script>
  
<style></style>
  