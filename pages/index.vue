<template>
  <div>

    <sections-benefits></sections-benefits>

    <div class="relative bg-cover" :style="{ backgroundImage: 'url(' + require('~/assets/images/giudes_2.jpg') + ')' }">

      <sections-guides></sections-guides>

      <svg class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon fill="white" points="0,100 0,0 100,100" />
      </svg>
    </div>

    <div class="relative bg-cover ">

      <sections-fleets></sections-fleets>
      <!-- <sections-collections></sections-collections> -->

      <svg class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon fill="rgb(243 244 246)" points="0,100 100,0 100,100" />
      </svg>

    </div>

    <div class=" bg-cover bg-gray-100">

      <sections-services></sections-services>

    </div>

    <div class="">
      <sections-book></sections-book>
    </div>

    <div class="relative bg-cover ">

      <sections-reviews></sections-reviews>

      <svg class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon fill="rgb(243 244 246)" points="0,100 100,0 100,100" />
      </svg>

    </div>

    <div class="  bg-gray-100">

      <sections-news></sections-news>

    </div>

    <div class="relative app ">

      <sections-application></sections-application>

      <svg class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <polygon fill="rgba(26,26,26,255)" points="0,100 0,0 100,100" />
      </svg>

    </div>

  </div>
</template>
<script>
export default {
  // async fetch() {
  //   this.$store.state.seo.title = this.$settings.store_name;
  //   this.$store.state.seo.description = this.$settings.store_description;
  // },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>

<style></style>









<!-- <sections-menus v-if="$settings.sections.test.menus_active"></sections-menus>
    <sections-banner v-if="$settings.sections.banner.active"></sections-banner>
    <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <template v-for="i in 5">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <sections-posts v-if="$settings.sections.posts.active"></sections-posts>
    <sections-services v-if="$settings.sections.services.active"></sections-services>
    <div class="container">
      <si-app-loader  placement="BEFORE_HOME_FOOTER"/>
    </div> -->