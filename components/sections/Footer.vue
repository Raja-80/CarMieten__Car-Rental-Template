<template>
    <div v-if="footer.show_footer_section" class=" container pt-20 pb-32">
        <div class="flex lg:flex-row flex-col justify-between  items-start pl-8 lg:pl-0">

            <div class="flex flex-col justify-between items-start pb-8 ">

                <div class="cursor-pointer flex items-center lg:pb-24 pb-6">
                    <nuxt-img v-if="footer.show_logo" class="h-10" :src="logo ? logo.src : $store.state.defaults.logo"
                        alt="company logo" />
                    <nuxt-link :to="`/`" class="cursor-pointer text-sm font-semibold text-white ml-3">
                        {{ footer.company_name }}
                    </nuxt-link>
                </div>

                <div>
                    <p v-if="footer.show_copyright" class=" text-sm font-light w-56">
                        {{ footer.copyright }}
                    </p>
                </div>

            </div>


            <div v-if="useful_links.show_section" class="flex flex-col justify-between items-start pb-8">

                <div v-if="useful_links.show_title" class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-white">{{ useful_links.title }}</div>

                </div>

                <div v-if="useful_links.show_links" class="flex items-center">

                    <div class="flex flex-col justify-between items-start">
                        <div v-for="(link, index) in useful_links.links.items" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light hover:text-red-600 focus:underline focus:text-red-600 transition duration-1000 ease-in-in  pb-2 ">{{
                                    link.text }}</nuxt-link>

                        </div>
                    </div>
                </div>

            </div>

            <div v-if="terms.show_terms" class="flex flex-col justify-between items-start pb-8">

                <div v-if="terms.show_title" class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-white">{{ terms.title }}</div>

                </div>

                <div v-if="terms.show_links" class="flex items-start">

                    <div class="flex flex-col justify-between items-start">
                        <div v-for="(link, index) in terms.links.items" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light hover:text-red-600 focus:underline focus:text-red-600 transition duration-1000 ease-in-in  pb-2 ">
                                {{ link.text }}
                            </nuxt-link>


                        </div>
                    </div>
                </div>

            </div>

            <div v-if="showroom.show_section" class="flex flex-col justify-between items-start pb-8">

                <div v-if="showroom.show_title" class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-white">{{ showroom.title }}</div>

                </div>

                <p v-if="showroom.show_adresse" class=" text-sm font-light pb-2 ">
                    {{ showroom.adresse }}
                </p>

                <p v-if="showroom.show_number" class=" text-sm font-light pb-2 ">
                    Phone : {{ showroom.number }}
                </p>

                <p v-if="showroom.show_email" class=" text-sm font-light pb-2 ">
                    Email : {{ showroom.email }}
                </p>
                <p v-if="showroom.show_notice" class=" text-sm font-light pb-2 ">
                    {{ showroom.copyright_notice }}
                </p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footer: this.$settings.sections.footer,
            logo: this.$settings.sections.footer.logo,
            useful_links: this.$settings.sections.footer.useful_links,
            terms: this.$settings.sections.footer.terms,
            showroom: this.$settings.sections.footer.showroom
        }
    },
}
</script>

<style>
a,
p {
    color: #edebe5;
}
</style>