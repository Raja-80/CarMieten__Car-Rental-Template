<template>
    <div v-if="fleets.active" class="container pb-40 pt-20 ">

        <div v-if="fleets.show_title" class="flex flex-col justify-center items-center lg:pb-28 lg:px-80 px-10">
            <h1 data-aos="fade-up" class="text-black font-semibold text-3xl text-center">
                {{ fleets.title }}
            </h1>

            <p data-aos="fade-up" v-if="fleets.show_under_title"
                class="text-gray-400 font-normal italic font-serif text-lg pb-8">
                {{ fleets.under_title }}
            </p>

            <p data-aos="fade-up" v-if="fleets.show_description"
                class="text-black text-center text-sm font-light leading-loose">
                {{ fleets.description }}
            </p>

        </div>


        <div  data-aos-anchor-placement="bottom-bottom" >
            <si-carousel component="si-car" :list="fleets.cars"></si-carousel>
        </div>

    </div>
</template>
  
<script>

export default {
    data() {
        return {
            fleets: this.$settings.sections.fleets,
        };
    },

}
</script>
  
<style>
.bg {
    background-color: #f7f7f7;
}
</style>
  