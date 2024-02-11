<template>
    <div>
        <div v-if="item" class="flex flex-col justify-center items-start w-full">
            <div  class="flex justify-center items-start pt-10 w-full">

                <nuxt-img :to="`/blog/${item.slug}`" class="h-full w-full "
                    :src="item.image.url ? item.image.url : $store.state.defaults.logo" alt="customer profile" />

            </div>

            <div class="my-6 flex flex-row justify-start items-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="pr-3" viewBox="0 0 448 512">
                    <path fill="#dc2626"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <div class=" text-xs">
                    {{ formatDate(item.createdAt) }}
                </div>
            </div>
            <div class="pb-6 font-semibold text-lg w-full">
                <nuxt-link :to="`/blog/${item.slug}`" class=" text-black hover:underline">
                    {{ item.title }}
                </nuxt-link>
                <div class="border-b-4 border-primary w-8 mt-3">
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