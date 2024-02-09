<template>
  <div>

    <sections-benefits></sections-benefits>

    <div class="relative bg-cover "
      :style="'background: url(' + guidesBg + ') no-repeat scroll center bottom; background-size: cover;'">

      <sections-guides></sections-guides>

      <svg v-if="guides_section" class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 0,0 100,100" />
      </svg>

    </div>

    <div class="relative bg-cover ">

      <sections-fleets></sections-fleets>
      <!-- <sections-collections></sections-collections> -->

      <svg v-if="fleets.active" class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" preserveAspectRatio="none">
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

      <svg v-if="reviews_section.show_reviews_section" class="absolute bottom-0 w-full lg:h-20 h-8"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="rgb(243 244 246)" points="0,100 100,0 100,100" />
      </svg>

    </div>

    <div class="  bg-gray-100">

      <sections-news></sections-news>

    </div>

    <div class="relative app ">

      <sections-application></sections-application>

      <svg v-if="app.show_section" class="absolute bottom-0 w-full lg:h-20 h-8" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="rgba(26,26,26,255)" points="0,100 0,0 100,100" />
      </svg>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      guides_section: this.$settings.sections.guide.show,
      reviews_section: this.$settings.sections.reviews,
      fleets: this.$settings.sections.fleets,
      app: this.$settings.sections.app,
      guidesBg: this.$settings.sections.guide.background_image ? this.$settings.sections.guide.background_image.src : 'https://storeno.b-cdn.net/stores/2-2024/1707477265446.jpeg',

    }
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>

<style></style>