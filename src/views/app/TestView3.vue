<template>
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
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>