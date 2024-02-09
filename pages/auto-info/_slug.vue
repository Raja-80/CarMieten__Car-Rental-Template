<template>
  <div class="container flex lg:flex-row flex-col justify-between lg:items-start items-center pb-32 pt-14"
    v-if="selectedCar">
    {{ this.upsellProducts[0] }}
    <div v-if="loading.upsells && loading.selectedCar" class="flex items-center justify-center my-8 w-full">
      <si-loader class="container"></si-loader>
    </div>

    <div v-if="selectedCar && !loading.upsells" class="flex flex-col w-full px-6">
      <div class="flex flex-col w-full">
        <div class="mx-5 mb-16 lg:pb-14 pb-8 lg:mx-0 lg:px-0 border-2 border-gray-100">
          <div>
            <!-- <si-carousel component="si-carimage" :list="selectedCar.images"></si-carousel> -->
            <nuxt-img class="h-full w-full" @click="$store.state.fullImage = image ? image.src : null" :src="selectedCar.images[0]
              ? selectedCar.images[0].src
              : $store.state.defaults.logo
              " alt="car" />
          </div>
        </div>
      </div>
      <div class="lg:w-full mx-4 pb-16 lg:pb-0 lg:mx-0">
        <div class="flex lg:flex-row flex-col justify-around bg lg:items-center items-start py-3 lg:py-0 pl-8 lg:pl-0">
          <button v-if="product.car_description.active" @click="changeTitle('VEHICLE DESCRIPTION')" :class="{
            'text-primary border-b-2 font-semibold border-primary':
              selectedTitle === 'VEHICLE DESCRIPTION',
          }" class="hover:text-primary py-5">
            {{ product.car_description.text }}
          </button>
          <button v-if="product.equipement.active" @click="changeTitle('EQUIPMENT')" :class="{
            'text-primary border-b-2 font-semibold border-primary':
              selectedTitle === 'EQUIPMENT',
          }" class="hover:text-primary py-5">
            {{ product.equipement.text }}
          </button>
          <button v-if="product.specifications.active" @click="changeTitle('SPECIFICATIONS')" :class="{
            'text-primary border-b-2 font-semibold border-primary':
              selectedTitle === 'SPECIFICATIONS',
          }" class="hover:text-primary py-5">
            {{ product.specifications.text }}
          </button>
          <button v-if="product.reviews.active" @click="changeTitle('REVIEWS')" :class="{
            'text-primary border-b-2 font-semibold border-primary':
              selectedTitle === 'REVIEWS',
          }" class="hover:text-primary py-5">
            {{ product.reviews.text }}
          </button>
        </div>
        <!-- Content Area -->
        <div class="w-full">
          <div v-if="selectedTitle === 'VEHICLE DESCRIPTION' &&
            product.car_description.active
            " class="font-light leading-loose pt-12">
            <div v-html="selectedCar.html" class="text-black" style="color: black !important"></div>
          </div>
          <div v-if="selectedTitle === 'EQUIPMENT'" class="pt-12">
            <div class="flex flex-wrap justify-around items-center">
              <div v-if="selectedCar.bookingProps.extraInfo.length > 0" v-for="item in selectedCar.bookingProps.extraInfo"
                :key="item" class="font-light py-3 w-1/4 mr-2">
                <span class="text-primary text-lg mr-2">+</span> {{ item.name }}
                <div class="border-b-2 border-gray-100 pt-3"></div>
              </div>
            </div>
          </div>

          <div v-else-if="selectedTitle === 'SPECIFICATIONS' &&
            product.specifications.active
            " class="border-2 border-gray-100 px-8 py-6 mt-14">
            <div class="flex flex-col justify-start items-start font-light py-3 w-full">
              <div v-if="selectedCar.brand" class="flex lg:flex-row flex-col lg:justify-center items-center w-full py-6">
                <div class="lg:w-2/4 lg:pl-3 text-sm font-semibold lg:pb-0 pb-3">
                  {{ product.auto_maker }}
                </div>
                <span class="lg:w-2/4 text-sm font-light">
                  {{ selectedCar.brand.name.toUpperCase() }}</span>
              </div>

              <div class="flex lg:flex-row flex-col lg:justify-center items-center w-full pb-6">
                <div class="lg:w-2/4 lg:pl-3 text-sm font-semibold lg:pb-0 pb-3">
                  engine_volume
                </div>
                <span class="lg:w-2/4 text-sm font-light">
                  {{ getEngine() }}
                </span>
              </div>

              <div class="flex lg:flex-row flex-col lg:justify-center items-center w-full pb-6">
                <div class="lg:w-2/4 lg:pl-3 text-sm font-semibold lg:pb-0 pb-3">
                  year
                </div>
                <span class="lg:w-2/4 text-sm font-light">
                  {{ getYearP() }}
                </span>
              </div>

              <div class="flex lg:flex-row flex-col lg:justify-center items-center w-full pb-6">
                <div class="lg:w-2/4 lg:pl-3 text-sm font-semibold lg:pb-0 pb-3">
                  fuel
                </div>
                <span class="lg:w-2/4 text-sm font-light">
                  {{ getFuel() }}
                </span>
              </div>

              <div class="flex lg:flex-row flex-col lg:justify-center items-center w-full pb-6">
                <div class="lg:w-2/4 lg:pl-3 text-sm font-semibold lg:pb-0 pb-3">
                  transmission
                </div>
                <span class="lg:w-2/4 text-sm font-light">
                  {{ getTransmission() }}
                </span>
              </div>

            </div>
          </div>
          <div v-else-if="selectedTitle === 'REVIEWS'" class="pt-14">
            <div v-if="filteredReviews.length > 0" v-for="(review, index) in filteredReviews" :key="index"
              class="flex flex-row justify-start items-start w-full pb-10">
              <div class="lg:w-1/6 w-3/6 lg:mx-8 mx-4 p-2">
                <nuxt-img class="rounded-full border-4 border-gray-200" :src="review.images[0]
                  ? review.images[0]
                  : $store.state.defaults.logo
                  " alt="profile" />
              </div>
              <div class="w-5/6 flex flex-col justify-center items-start py-2">
                <div class="text-black font-bold text-sm pb-1">
                  {{ review.customer.firstname }} {{ review.customer.lastname }}
                </div>
                <div class="text-primary font-light text-sm pb-1">
                  {{ formatReviewDate(review.createdAt) }}
                </div>
                <div class="flex pb-1">
                  <span v-for="(star, i) in 5" :class="star <= review.rating
                    ? 'text-yellow-500 '
                    : 'text-gray-400'
                    " :key="i">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 h-5 translate">
                      <path fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        class=""></path>
                    </svg>
                  </span>
                </div>
                <div class="text-sm text-black leading-loose font-light pb-1">
                  {{ review.content }}
                </div>
              </div>
            </div>

            <div v-if="filteredReviews.length <= 0" class="w-full py-3 text-base text-center font-semibold text-red-500">
              {{ t("no_reviews_yet") }}
            </div>

            <si-app-loader placement="REPLACE_REVIEWS" class="pt-10" />
          </div>
        </div>
      </div>
    </div>

    <!-- Booking side -->
    <div v-if="selectedCar && !loading.upsells" class="flex flex-col justify-center lg:items-start items-center lg:w-2/6">
      <p class="w-full text-white bg-black text-center text-xl font-medium py-4">
        {{ $store.state.currency.symbol }} {{ selectedCar.price.salePrice }}/
        {{ selectedCar.bookingProps.priceBy }}
      </p>

      <div class="bg w-full py-12 px-10">
        <div v-if="!datesAndLocationsSelected && showDatesLocationsMessage"
          class="text-white text-sm font-light w-full px-2 my-3 bg-red-500 rounded-md shadow-md">
          {{ t("locations_and_dates_required") }}
        </div>
        <div class="w-full">
          <div class="block mb-1 text-black text-sm font-normal" for="pickup">
            {{ product.pickup_location }}
          </div>
          <div class="w-full pb-12">
            <!-- v-model in arabic  -->

            <select v-model="pickup"
              class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 focus:border-blue-3 focus:shadow-outline outline-none">
              <option>{{ t("all_locations") }}</option>
              <option v-for="(city, index) in uniqueCities" :key="index" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
        </div>

        <div class="w-full pb-12">
          <div class="block mb-1 text-black text-sm font-normal" for="dropOff">
            {{ product.dropoff_loction }}
          </div>
          <!-- v-model in arabic  -->

          <select v-model="dropOff"
            class="w-full cursor-pointer pl-4 py-2 text-gray-400 text-xs font-normal bg-white border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">
            <option>{{ t("all_locations") }}</option>
            <option v-for="(city, index) in uniqueCities" :key="index" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="w-full flex flex-col justify-start items-start pb-12">
          <div class="pb-8 w-full">
            <div v-if="product.pickup_date.active" class="block mb-1 text-black text-sm font-normal" for="pickupDate">
              {{ product.pickup_date.text }}
            </div>
            <!-- v-model in arabic  -->
            <datepicker id="pickupDate" v-model="pickupDate"
              class="focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
              placeholder="Pick-up date" :disabled-date="populateDisabledDates(
                this.selectedCar.bookingProps.reservedHistory
              )
                " :disabled-dates="disableDates">
            </datepicker>

          </div>
          <div class="w-full">
            <div v-if="product.dropoff_date.active" class="block mb-1 text-black text-sm font-normal" for="dropOffDate">
              {{ product.dropoff_date.text }}
            </div>
            <!-- v-model in arabic  -->
            <datepicker id="dropOffDate" v-model="dropOffDate"
              class="focus:border-blue-500 focus:shadow-outline outline-none" :style="{ width: '100%' }"
              placeholder="Drop-off date" :disabled-date="populateDisabledDates(
                this.selectedCar.bookingProps.reservedHistory
              )
                " :disabled-dates="disableDates">
            </datepicker>
          </div>
        </div>

        <div v-if="upsells.length > 0 && product.extra_resources.active" class="w-full pb-12">
          <label class="block mb-1 text-black text-sm font-normal pb-4">
            {{ product.extra_resources.text }}
          </label>
          <div class="pt-3">
            <ul>
              <li v-for="(item, index) in upsells" :key="index">
                <label :for="'toggle' + index"
                  class="flex flex-row justify-between items-center cursor-pointer w-full pb-4">
                  <div class="relative pb-3 flex flex-row justify-between items-center w-4/6">
                    <div class="w-4/12">
                      <input type="checkbox" :id="'toggle' + index" class="hidden" v-model="selectedUpsells[index]" />
                      <div class="toggle-wrapper w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                      <div class="toggle-button absolute w-5 h-4 bg-white rounded-full shadow-md inset-y-0 left-1 mt-2">
                      </div>
                    </div>

                    <div class="text-gray-700 font-light text-xs w-12 mr-7">
                      {{ item.product.name }}
                    </div>
                  </div>

                  <div class="w-2/6">
                    <div class="mb-3 text-gray-700 font-light text-xs ml-3">
                      <span class="w-full">
                        <div v-if="item.product._id"
                          class="flex items-center justify-center h-10 p-1 text-primary bg-primary-lighter rounded-br-lg w-full">
                          <b> {{ getSalePrice(item.product._id) }} </b>
                        </div>
                      </span>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div v-show="outofstock"
          class="flex flex-col justify-center items-center w-full bg-primary inline-flex px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">
          <b>{{ t("out_of_stock") }}</b>
          <nuxt-link :to="`/cars`" class="text-sm font-light hover:text-primary focus:underline focus:text-primary py-3">
            {{ t("back_to_explore_cars") }}
          </nuxt-link>

          <!-- <a href="/cars" class="bg-primary inline-flex  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">Back To Booking Cars</a> -->
        </div>
        <div v-if="!outofstock" class="w-full">
          <div class="flex flex-row justify-between items-center p-2 mb-8 w-full">
            <div class="text-sm font-normal text-black-700">{{ product.total_text }} :
            </div>
            <div class="text-sm font-normal text-black-700">{{ total() }} {{ $store.state.currency.symbol }}</div>
          </div>
          <button @click="buyNow" type="button" class="w-full py-3 text-sm text-white bg-primary">
            {{ product.booking_this_car.text }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      loading: { cart: true, upsells: true, selectedCar: true },
      pickupDate: "",
      dropOffDate: "",
      itemsSlected: "",
      form: this.$settings.sections.form,
      selectedCar: null,
      selectedTitle: "VEHICLE DESCRIPTION",
      disableDates: {},
      reservedHistory: null,
      outofstock: false,
      reviews: { paginate: { page: 0 }, results: [] },
      pickup: "All Locations",
      dropOff: "All Locations",
      items: [],
      upsells: [],
      selectedUpsells: [],
      upsellProducts: [],
      datesAndLocationsSelected: false,
      showDatesLocationsMessage: false,
      product: this.$settings.sections.product,
      totals: 0,
    };
  },

  async fetch() {
    try {
      const { slug } = this.$route.params;

      this.loading.selectedCar = true;

      const { data } = await this.$storeino.products.get({ slug });
      this.selectedCar = data;

      this.upsellProducts = await this.$storeino.products.search({ productType: 'PHYSICAL' });

      this.loading.selectedCar = false;

      this.reviews = await this.$storeino.reviews.search({});

      this.loading.upsells = true;

      const response = await this.$storeino.upsells.search({
        with: ["products"],
        limit: 1000,
      });

      this.upsells = response.data.results.filter((upsell) => {

        return upsell.products.some(
          (product) => product._id === this.selectedCar._id
        );
      });

      this.loading.upsells = false;

      if (this.selectedCar) {
        if (
          !this.selectedCar.outStock.disabled &&
          this.selectedCar.quantity.instock <= 0
        ) {
          this.outofstock = true;
        }
      }

      this.$store.state.seo.title =
        (this.selectedCar.seo.title || this.selectedCar.name) +
        " - " +
        this.$settings.store_name;
      this.$store.state.seo.description =
        this.selectedCar.seo.description ||
        this.selectedCar.description ||
        this.$settings.store_description;
      this.$store.state.seo.keywords =
        this.selectedCar.seo.keywords.length > 0
          ? this.selectedCar.seo.keywords || []
          : this.$settings.store_keywords || [];

      if (this.selectedCar.images.length > 0) {
        this.$store.state.seo.image = this.selectedCar.images[0].src;
      }

      if (!process.server) {
        this.$storeino.fbpx("ViewContent", {
          content_name: this.selectedCar.name ? this.selectedCar.name : "",
          content_ids: [this.selectedCar._id],
          content_type: "product",
          value: this.selectedCar.price.salePrice,
          currency: this.$store.state.currency.code,
        });

        this.$tools.call("PAGE_VIEW", this.selectedCar);
      }

    } catch (err) {
      console.error(err);
      this.$nuxt.error({ statusCode: 404, message: "product_not_found" });
    }
  },

  methods: {
    t(key) {
      const langs = {
        locations_and_dates_required: {
          EN: "Please select locations and pickup and drop-off dates to proceed",
          FR: "Veuillez sélectionner les emplacements ainsi que les dates de prise en charge et de restitution pour continuer",
          AR: "يرجى اختيار المواقع وتواريخ الاستلام والتسليم للمتابعة",
        },
        all_locations: {
          EN: "All Locations",
          FR: "Toutes les locations",
          AR: "جميع المواقع",
        },
        back_to_explore_cars: {
          EN: "Back To Explore Cars",
          FR: "Retour à la découverte des voitures",
          AR: "العودة لاستكشاف السيارات",
        },
        no_reviews_yet: {
          EN: "There is No Reviews Yet ....",
          FR: "Aucune Avis pour le moment...",
          AR: "لا توجد آراء بعد ...",
        },
        out_of_stock: {
          EN: "Out Of Stock",
          FR: "En Rupture De Stock",
          AR: "إنتهى من المخزون",
        },
      };
      return (langs[key] && langs[key][this.$store.state.language.code]) || "";
    },

    getYearP() {
      if (this.selectedCar) {
        for (let itm of this.selectedCar.collections) {
          if (itm.name && itm.name.includes("PRODUCTION YEAR")) {
            return itm.slug.replace(/-/g, "").toUpperCase();
          }
        }
      }
    },

    getEngine() {
      if (this.selectedCar) {
        for (let itm of this.selectedCar.collections) {
          if (itm.name && itm.name.includes("ENGINE VOLUME")) {
            return itm.slug.replace(/-/g, "").toUpperCase();
          }
        }
      }
    },

    getFuel() {
      if (this.selectedCar) {
        for (let itm of this.selectedCar.collections) {
          if (itm.name && itm.name.includes("FUEL TYPE")) {
            return itm.slug.replace(/-/g, "").toUpperCase();
          }
        }
      }
    },

    getTransmission() {
      if (this.selectedCar) {
        for (let itm of this.selectedCar.collections) {
          if (itm.name && itm.name.includes("TRANSMISSION")) {
            const firstWord = itm.slug
              .replace(/-/g, " ")
              .toUpperCase()
              .split(" ")[0];
            return firstWord;
          }
        }
      }
    },

    getSalePrice(id) {

      if (this.upsellProducts.data.results.length > 0) {
        const upsellProduct = this.upsellProducts.data.results.find(
          (upsellProduct) => upsellProduct._id === id
        );
        if (upsellProduct) {
          return upsellProduct.price.salePrice;
        }
      }

    },

    populateDisabledDates(reservedDates) {
      return (date, currentDateArray) => {
        const currentDate = new Date(date);

        const isReserved = reservedDates.some((reservation) => {
          const start = new Date(reservation.startTime);
          const end = new Date(reservation.endTime);
          return currentDate >= start && currentDate <= end;
        });

        const isPast = currentDate < new Date().setHours(0, 0, 0, 0);

        this.$set(this.disableDates, date, isReserved);

        return isReserved || isPast;
      };
    },

    changeTitle(title) {
      this.selectedTitle = title;
    },

    formatReviewDate(dateString) {
      const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formattedDate = new Date(dateString).toLocaleString(
        "en-US",
        options
      );
      return formattedDate;
    },

    addToCart() {
      this.$tools.call("ADD_TO_CART", {
        _id: this.selectedCar._id,
        quantity: this.selectedCar.quantity,
        price: this.selectedCar.price.salePrice,
        upsells: this.upsells,
        resevStart: this.selectedCar.bookingProps.reservedHistory.StartTime,
        resevEnd: this.selectedCar.bookingProps.reservedHistory.EndTime,
        total: this.total,
      });

      if (this.$settings.sections.alerts.proceed_to_checkout) {
        setTimeout(() => {
          window.location.href = "/checkout2";
        }, 500);
      }

      this.$tools.toast(this.$settings.sections.alerts.proceed_to_checkout);

      this.$storeino.fbpx("AddToCart", {
        content_name: this.selectedCar.name,
        content_ids: [this.selectedCar._id],
        content_type: "product",
        currency:
          this.$store.state.currency && this.$store.state.currency.code
            ? this.$store.state.currency.code
            : "USD",
        value: this.selectedCar.price.salePrice,
      });
    },

    buyNow() {
      if (this.pickupDate && this.dropOffDate && this.pickup !=="All Locations" && this.dropOff !=="All Locations") {
        this.datesAndLocationsSelected = true;

        this.addToCart();
        setTimeout(() => {
          window.location.href = "/checkout2";
        }, 500);
      } else {
        this.datesAndLocationsSelected = false;
        this.showDatesLocationsMessage = true;
      }
    },

    total() {

      let upsellTotal = 0;
      if (this.selectedUpsells.length > 0 && this.upsells.length > 0) {
        upsellTotal = this.selectedUpsells.reduce((acc, item, index) => {
          if (item) {
            const salePrice = this.getSalePrice(this.upsells[index].product._id);
            if (salePrice) {
              acc += salePrice;
            }
          }
          if (acc > 0) {
            this.totals = acc;
          }
          return acc;
        }, 0);
      }

      let numberOfDays = 0;
      if (this.isValidDate(this.pickupDate) && this.isValidDate(this.dropOffDate)) {
        numberOfDays = this.calculateNumberOfDays(this.pickupDate, this.dropOffDate);
      }

      const carPrice = this.selectedCar.price.salePrice;

      return upsellTotal + numberOfDays * carPrice;
    },

    isValidDate(dateString) {
      const date = new Date(dateString);
      return !isNaN(date.getTime());
    },

    calculateNumberOfDays(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end.getTime() - start.getTime();
      const daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
      return daysDifference;
    },

  },

  computed: {
    filteredReviews() {
      const selectedProductId = this.selectedCar._id;
      return this.reviews.data.results.filter(
        (review) => review.product._id === selectedProductId
      );
    },
    uniqueCities() {
      const citiesSet = new Set();

      if (
        this.selectedCar.bookingProps.firstAddresses &&
        this.selectedCar.bookingProps.firstAddresses.length > 0
      ) {
        this.selectedCar.bookingProps.firstAddresses.forEach((address) => {
          citiesSet.add(address.city.name);
        });
      }

      return Array.from(citiesSet);
    },

  },

  mounted() {
    if (this.selectedCar) this.$tools.call("PAGE_VIEW", this.selectedCar);
    window.addEventListener("APP_LOADER", () => {
      window.dispatchEvent(
        new CustomEvent("CURRENT_PRODUCT", {
          detail: {
            product_id: this.selectedCar._id,
            product_currency: this.$store.state.currency.code,
          },
        })
      );
    });
    if (this.selectedCar) {
      this.$storeino.fbpx("PageView");
      this.$storeino.fbpx("ViewContent", {
        content_name: this.selectedCar.name ? this.selectedCar.name : "",
        content_ids: [this.selectedCar._id],
        content_type: "product",
        value: this.selectedCar.price.salePrice,
        currency: this.$store.state.currency.code,
      });
    }
    if (this.selectedCar) {
      const iframes = document.querySelectorAll("iframe");
      for (const ifram of iframes) {
        const parent = ifram.parentNode;
        if (!parent.classList.contains("video-wrapper")) {
          const div = document.createElement("div");
          ifram.after(div);
          div.classList.add("video-wrapper");
          ifram.style.width = null;
          ifram.style.height = null;
          ifram.setAttribute("width", "");
          ifram.setAttribute("height", "");
          div.appendChild(ifram);
        }
      }
    }
  },
  watch: {

    pickupDate(newValue, oldValue) {
      console.log("New Pickup Date:", newValue);
      console.log("Old Pickup Date:", oldValue);
      if (newValue && this.dropOffDate) {
        this.total();
      }
    },
    dropOffDate(newValue, oldValue) {
      console.log("New Drop-off Date:", newValue);
      console.log("Old Drop-off Date:", oldValue);
      if (newValue && this.pickupDate) {
        this.total();
      }
    },
    selectedUpsells: {
      deep: true,
      handler() {
        console.log("Selected Upsells changed");
        this.total();
      }
    },

  },
};
</script>

<style>
.bg {
  background-color: #f7f7f7;
}

.toggle-wrapper {
  transition: background-color 0.3s;
}

.toggle-button {
  transition: transform 0.3s;
}

input:checked+.toggle-wrapper {
  background-color: #f13b2a;
}

input:checked+.toggle-wrapper+.toggle-button {
  transform: translateX(100%);
}
</style>
