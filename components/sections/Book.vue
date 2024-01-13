<template>
    <div class="parallax-container lg:pb-0 pb-80">
        <div class="content flex lg:flex-row flex-col justify-center items-center text-3xl font-light ">
            {{ book.title }}
            <nuxt-img v-if="book.show_icon" class="h-10 mb-6 pl-8"
                :src="book.icon ? book.icon.src : $store.state.defaults.logo" alt="company logo" />

            <span class=" text-4xl font-semibold pl-2 pr-4">
                {{ book.number }}
            </span>

            {{ book.availability }}

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            book: this.$settings.sections.book,

        }
    },
}
</script>

<style >
.parallax-container {
    background-image: url("../../assets/images/book.jpg");
    height: 200px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

}

.content {
    color: white;
    text-align: center;
    padding: 50px;
}
</style>