<template>
    <div v-if="copyright.show_section" class=" container lg:py-6 py-4 text-yellow-50  ">
        <div>
            <p v-if="copyright.show_copyright" class="text-center text-sm font-light">
                {{ copyright.info }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copyright: this.$settings.sections.copyright,
        }
    },
}
</script>

<style>

p{
    color: #edebe5;
}

</style>