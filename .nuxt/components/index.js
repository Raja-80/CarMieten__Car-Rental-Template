export { default as SectionsApplication } from '../../components/sections/Application.vue'
export { default as SectionsBanner } from '../../components/sections/Banner.vue'
export { default as SectionsBenefits } from '../../components/sections/Benefits.vue'
export { default as SectionsBook } from '../../components/sections/Book.vue'
export { default as SectionsCollections } from '../../components/sections/Collections.vue'
export { default as SectionsFleets } from '../../components/sections/Fleets.vue'
export { default as SectionsFooter } from '../../components/sections/Footer.vue'
export { default as SectionsGuides } from '../../components/sections/Guides.vue'
export { default as SectionsHeader } from '../../components/sections/Header.vue'
export { default as SectionsNews } from '../../components/sections/News.vue'
export { default as SectionsProducts } from '../../components/sections/Products.vue'
export { default as SectionsReviews } from '../../components/sections/Reviews.vue'
export { default as SectionsServices } from '../../components/sections/Services.vue'
export { default as SectionsCopyright } from '../../components/sections/copyright.vue'
export { default as SectionsOthers } from '../../components/sections/others.vue'
export { default as SiAppLoader } from '../../components/si/AppLoader.vue'
export { default as SiAvatar } from '../../components/si/Avatar.vue'
export { default as SiBlog } from '../../components/si/Blog.vue'
export { default as SiCar } from '../../components/si/Car.vue'
export { default as SiCarImage } from '../../components/si/CarImage.vue'
export { default as SiCarousel } from '../../components/si/Carousel.vue'
export { default as SiCartItem } from '../../components/si/CartItem.vue'
export { default as SiCollection } from '../../components/si/Collection.vue'
export { default as SiFullImage } from '../../components/si/FullImage.vue'
export { default as SiImage } from '../../components/si/Image.vue'
export { default as SiLoader } from '../../components/si/Loader.vue'
export { default as SiLoaderGlobal } from '../../components/si/LoaderGlobal.vue'
export { default as SiPost } from '../../components/si/Post.vue'
export { default as SiPriceRange } from '../../components/si/PriceRange.vue'
export { default as SiProduct } from '../../components/si/Product.vue'
export { default as SiProductPrice } from '../../components/si/ProductPrice.vue'
export { default as SiProductQuantity } from '../../components/si/ProductQuantity.vue'
export { default as SiProductVariants } from '../../components/si/ProductVariants.vue'
export { default as SiReview } from '../../components/si/Review.vue'
export { default as SiSlidingone } from '../../components/si/Slidingone.vue'
export { default as SiSvg } from '../../components/si/Svg.vue'
export { default as SectionsPalestSectionsCollections } from '../../components/sections/palest_sections/Collections.vue'
export { default as SectionsPalestSectionsCopyright } from '../../components/sections/palest_sections/Copyright.vue'
export { default as SectionsPalestSectionsFooter } from '../../components/sections/palest_sections/Footer.vue'
export { default as SectionsPalestSectionsFooterMenu } from '../../components/sections/palest_sections/FooterMenu.vue'
export { default as SectionsPalestSectionsHeaderMenu } from '../../components/sections/palest_sections/HeaderMenu.vue'
export { default as SectionsPalestSectionsHeaderTop } from '../../components/sections/palest_sections/HeaderTop.vue'
export { default as SectionsPalestSectionsPosts } from '../../components/sections/palest_sections/Posts.vue'
export { default as SectionsPalestSectionsProducts } from '../../components/sections/palest_sections/Products.vue'
export { default as SectionsPalestSectionsRelatedPosts } from '../../components/sections/palest_sections/RelatedPosts.vue'
export { default as SectionsPalestSectionsRelatedProducts } from '../../components/sections/palest_sections/RelatedProducts.vue'
export { default as SectionsPalestSectionsReviews } from '../../components/sections/palest_sections/Reviews.vue'
export { default as SectionsPalestSectionsServices } from '../../components/sections/palest_sections/Services.vue'
export { default as SectionsPalestSectionsUpsell } from '../../components/sections/palest_sections/Upsell.vue'
export { default as SectionsPalestSectionsDefaultHeader } from '../../components/sections/palest_sections/defaultHeader.vue'
export { default as SectionsPalestSectionsMenus } from '../../components/sections/palest_sections/menus.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
