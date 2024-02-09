<template>
    <div v-if="copyright.show_section" class=" container lg:py-6 py-4 text-yellow-50  ">
        <div class="flex flex-row justify-center items-center">
            <div v-if="copyright.show_copyright" class="text-center text-sm font-light txt" v-html="copyright.info.replace(/__YEAR__/gi, year)">
            </div>

            <a style="color:#03a9f4" class="text-sm font-light w-56" href="//www.storeino.com/" target="_blank">
                    Storeino.com
            </a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            copyright: this.$settings.sections.copyright,
        }
    },
}
</script>

<style>

.txt{
    color: #edebe5;
}

</style>