<template>
    <div>
        <div class="flex flex-col justify-between items-start ">
            <div class="flex justify-center items-start pt-10">

                <nuxt-img :to="`/posts/${item.slug}`" class="h-full "
                    :src="item.image.url ? item.image.url : $store.state.defaults.logo" alt="customer profile" />

            </div>


            <div class="my-6 flex flex-row justify-start items-start">
                <img class="h-3 pr-3" src="~/assets/images/calendar.png" alt="company logo" />
                <div class=" text-xs">
                    {{ formatDate(item.createdAt) }}
                </div>
            </div>
            <div class="pb-6 font-semibold text-lg">
                <nuxt-link :to="`/posts/${item.slug}`" class=" text-black hover:underline">
                    {{ item.title }}
                </nuxt-link>
                <div class="border-b-4 border-red-600 w-8 mt-3">
                </div>
            </div>
            <div class="font-light pb-4 leading-loose">
                {{ item.excerpt }}
                <!-- <div v-html="item.content" class="text-black"></div> -->
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        formatDate(dateString) {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options).toUpperCase();
        },
    },
}
</script>

<style></style>