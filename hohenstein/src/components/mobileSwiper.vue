<template>
  <div class="containerdiv">
    <swiper :pagination="true">
      <swiper-slide class="swiper1"
        ><div class="innerDiv">
          <p class="nameTestimonials">Dr. Herbert Maier</p>
          <p class="jobTestimonials">Marketing Expert</p>
          <p class="messageTestimonials">
            "Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr
            aichae e al selr aichae e alsbe ich ess ainan."
          </p>
        </div></swiper-slide
      ><swiper-slide class="swiper2"
        ><div class="innerDiv">
          <p class="nameTestimonials">Mag. Ruth Koper</p>
          <p class="jobTestimonials">CEO</p>
          <p class="messageTestimonials">
            "Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr
            aichae e al selr aichae e alsbe ich ess ainan."
          </p>
        </div></swiper-slide
      ><swiper-slide class="swiper3"
        ><div class="innerDiv">
          <p class="nameTestimonials">Dipl-Ing. Karl Wodnar</p>
          <p class="jobTestimonials">Quantum Computing</p>
          <p class="messageTestimonials">
            "Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr
            aichae e al selr aichae e alsbe ich ess ainan."
          </p>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
// Import Swiper styles
import "swiper/swiper-bundle.css";

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
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style scoped>
*{
  z-index:999999999999;
}
.containerDiv{
  position: absolute;
  top:900px;
}
.swiper1 {
  height: 160px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.innerDiv {
}
.swiper2 {
  height: 160px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.swiper3 {
  height: 160px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.innerDiv {
  padding: 20px;
  text-align: center;
}
.nameTestimonials {
  font-family: Helvetica;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0px;
}
.jobTestimonials {
  font-family: "Miller Display";
  margin: 3px;
  font-size: 13px;
  opacity: 80%;
}
.messageTestimonials {
  font-family: "Miller Display";
  font-size: 17px;
}
</style>