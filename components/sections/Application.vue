<template>
  <div
    v-if="app.show_section"
    class="app container pb-32 pt-24 flex lg:flex-row flex-col justify-around items-center"
  >
    <div class="lg:pl-40">
      <div class="lg:pl-20">
        <div>
          <nuxt-img
            v-if="app.show_image"
            data-aos="fade-up"
            :src="app.image ? app.image.src : $store.state.defaults.logo"
            alt="app"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:w-2/4 px-4 lg:px-0 pt-6">
      <div class="flex justify-start lg:pb-20 pb-12">
        <div class="flex flex-col">
          <p data-aos="fade-up" class="text-white text-base font-light pb-2">
            {{ app.top_title }}
          </p>

          <h1 data-aos="fade-up" class="text-white font-semibold text-4xl pb-6 w-3/4">
            {{ app.title }}
          </h1>

          <p data-aos="fade-up" class="text-white text-base font-light leading-loose w-4/4">
            {{ app.description }}
          </p>
        </div>
      </div>

      <div class="flex lg:flex-row flex-col">
        <div data-aos="fade-up" class="pr-16">
          <a
            v-if="app.show_play_store"
            :href="app.app_play_store_link"
            class="mb-6 pr-2 cursor-pointer"
          >
            <nuxt-img
              :src="
                app.store_icon ? app.store_icon.src : $store.state.defaults.logo
              "
              alt=""
            />
          </a>
        </div>

        <div data-aos="fade-up">
          <a
            v-if="app.show_apple_store"
            :href="app.app_apple_store_link"
            class="mb-6 pr-2 cursor-pointer"
          >
            <nuxt-img
              :src="
                app.apple_icon ? app.apple_icon.src : $store.state.defaults.logo
              "
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      app: this.$settings.sections.app,
    };
  },
};
</script>

<style>
.app {
  background-color: rgba(218, 28, 54, 255);
}
</style>
