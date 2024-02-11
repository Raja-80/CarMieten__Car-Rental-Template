<template>
    <div class="bg-gray-50 transition-all delay-300" :class="$store.state.showHeaderMenu ? 'to-right' : ''">
        <component :is="'style'">
            :root{ --primary-rgb: {{ this.rgb_first.r }}, {{ this.rgb_first.g }},
            {{ this.rgb_first.b }}; --primary-color: rgb(var(--primary-rgb));
            --secondary-rgb: {{ this.rgb_second.r }}, {{ this.rgb_second.g }},
            {{ this.rgb_second.b }}; --secondary-color: rgb(var(--secondary-rgb)); }
            .bg-primary{ background-color: var(--primary-color); }
            .bg-secondary{ background-color: var(--secondary-color); }
            .bg-primary:hover{ background-color: rgb(var(--primary-rgb),0.8); }
            .bg-secondary:hover{ background-color: rgb(var(--secondary-rgb),0.8); }
            .bg-primary-lighter{ background-color: rgb(var(--primary-rgb),0.3); }
            .text-primary{ color: var(--primary-color); }
            .text-secondary{ color: var(--secondary-color); }
            .text-prm:hover{color: var(--primary-color);}
            .text-prm{color: #ffffff;}
            .border-primary { border-color: var(--primary-color); }
        </component>

        <div class="relative bg-cover "
            :style="'background: url(' + bannerBg + ') no-repeat scroll center bottom; background-size: cover;'">
            <!-- <nuxt-img v-if="service_1.show_icon" class="relative bg-cover"
        :src="background_img ? background_img.src : $store.state.defaults.logo" alt="company logo" /> -->
            <sections-header></sections-header>
            <sections-banner></sections-banner>

            <svg v-if="isHomePage" class="absolute bottom-0 w-full lg:h-20 h-8 " xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
        </div>

        <Nuxt />

        <div class="footer">
            <sections-footer></sections-footer>
        </div>
        <div dir="ltr" class="footer">
            <sections-copyright></sections-copyright>
        </div>

    </div>
</template>
<script>
export default {
    head() {
        return {
            title: this.$store.state.seo.title,
            meta: [
                { hid: 'description', name: 'description', content: this.$store.state.seo.description },
                { hid: 'keywords', name: 'keywords', content: this.$store.state.seo.keywords.join(',') },
                { hid: 'og:title', property: 'og:title', content: this.$store.state.seo.title },
                // { hid: 'og:site_name', property: 'og:site_name', content: this.$settings.store_name },
                { hid: 'og:description', property: 'og:description', content: this.$store.state.seo.description },
                { hid: 'og:image', property: 'og:image', content: this.$store.state.seo.image },
                { hid: 'og:url', property: 'og:url', content: this.$store.state.seo.url },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.seo.title },
                { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.seo.description },
                { hid: 'twitter:image', name: 'twitter:image', content: this.$store.state.seo.logo },
                { hid: 'twitter:url', name: 'twitter:url', content: this.$store.state.seo.url },
                // { hid: "theme-color", property: "theme-color", content: this.$settings.style.primary_color },
                { hid: "currency", name: "currency", content: this.$store.state.currency.code },
                { hid: "product:price:currency", property: "product:price:currency", content: this.$store.state.currency.code },
                { hid: "priceCurrency", itemprop: "priceCurrency", content: this.$store.state.currency.code },
                ...this.$store.state.seo.metaTags
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: this.$settings.store_favicon ? this.$settings.store_favicon.src : this.$store.state.defaults.icon },
                { rel: "dns-prefetch", href: 'https://storeno.b-cdn.net/stores/' },
                ...this.otherLinks
            ],
            htmlAttrs: {
                lang: this.$store.state.language.code,
                dir: this.$store.state.language.code == 'AR' ? 'rtl' : 'ltr'
            }
        }
    },
    data() {
        return {
            rgb_first: { r: 0, g: 0, b: 0 },
            rgb_second: { r: 0, g: 0, b: 0 },
            bannerBg: this.$settings.sections.banner.background_img ? this.$settings.sections.banner.background_img.src : 'https://storeno.b-cdn.net/stores/1-2024/1705581973215.jpeg',
            otherLinks: [
            ]
        }
    },
    async fetch() {
        this.$store.state.seo.title = this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.store_description;
        this.$store.state.seo.keywords = this.$settings.store_keywords || [];
        if (this.$settings.store_og_image) { this.$store.state.seo.image = this.$settings.store_og_image.src; }
        if (this.$settings.favicon) { this.$store.state.seo.favicon = this.$settings.favicon.src; }
        this.rgb_first = this.$tools.hexToRgb(this.$settings.style.primary_color);
        this.rgb_second = this.$tools.hexToRgb(this.$settings.style.second_color);
        if (this.$store.state.language.code == 'AR') {
            this.otherLinks = [
                { rel: "preconnect", href: 'https://fonts.googleapis.com' },
                { rel: "preconnect", href: 'https://fonts.gstatic.com', crossorigin: true },
                { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap' }
            ]
        }
    },
    methods: {
    }
}
</script>
<style>
.footer {
    background-color: rgba(26, 26, 26, 255);
}

[dir='ltr'] .to-right {
    transform: translateX(20rem);
}

[dir='rtl'] .to-right {
    transform: translateX(-20rem) !important;
}
</style>
