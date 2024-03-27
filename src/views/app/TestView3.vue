<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<template>
  <div class="col-12 col-lg-6">
    <div class="row g-3 mb-3">
      <div class="col-12 col-md-10 col-lg-12 col-xl-10">
        <div class="d-flex align-items-center border border-translucent rounded-3 text-center h-100">
          <swiper
            :slides-per-view="1"
            :space-between="50"
            :modules="[Thumbs]"
            :thumbs="{ swiper: thumbsSwiper }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide>
              <img class="w-100" src="@/assets/img/products/R44-demo.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img class="w-100" src="@/assets/img/products/R44-demo-inside.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <div class="product-thumb-container p-2 p-sm-3 p-xl-2" style="height: 400px"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-12">
          <swiper
            :slides-per-view="5"
            :space-between="10"
            :modules="[Thumbs]"
            watch-slides-progress
            @swiper="setThumbsSwiper">
            <swiper-slide>
              <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-inside.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="product-thumb-container p-2 p-sm-3 p-xl-2"
                :style="{ backgroundImage: 'url(' + require('@/assets/img/products/R44-demo-cockpit.jpg')+ ')', backgroundPosition: 'center', backgroundSize: 'cover'}">
              </div>
            </swiper-slide>
          </swiper>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  </div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
      <swiper-slide>
          <img class="w-100" src="@/assets/img/products/details/blue_front.png" alt="">
      </swiper-slide>
      <swiper-slide>
          <img class="w-100" src="@/assets/img/products/details/blue_back.png" alt="">
      </swiper-slide>
      <swiper-slide>
          <img class="w-100" src="@/assets/img/products/details/blue_side.png" alt="">
      </swiper-slide>
  </swiper>
</template>

<style>
.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
