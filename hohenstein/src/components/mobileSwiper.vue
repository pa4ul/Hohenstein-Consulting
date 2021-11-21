<template>
    <swiper
        :slides-per-view="1"
        pagination
        navigation
        @swiper="onSwiper"
    >
        <swiper-slide v-for="(data, index) in swiperContent" :key="index">
            <div class="swiper_content">
                <p class="nameTestimonials">{{ data.nameTestimonials }}</p>
                <p class="jobTestimonials">{{ data.jobTestimonials }}</p>
                <p class="messageTestimonials">"{{ data.messageTestimonials }}"</p>
            </div>
        </swiper-slide>
    </swiper>

</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperContent: [
                {
                    nameTestimonials: 'Dr. Herbert Maier',
                    jobTestimonials: 'Marketing Expert',
                    messageTestimonials: 'Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr aichae e al selr aichae e alsbe ich ess ainan.'
                },
                {
                    nameTestimonials: 'Dr. Herbert Maier',
                    jobTestimonials: 'Marketing Expert',
                    messageTestimonials: 'Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr aichae e al selr aichae e alsbe ich ess ainan.'
                },
                {
                    nameTestimonials: 'Dr. Herbert Maier',
                    jobTestimonials: 'Marketing Expert',
                    messageTestimonials: 'Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr aichae e al selr aichae e alsbe ich ess ainan.'
                },
                {
                    nameTestimonials: 'Dr. Herbert Maier',
                    jobTestimonials: 'Marketing Expert',
                    messageTestimonials: 'Lorem ispum dolar selr aichae e alim ispum dolarm ispum dolar selr aichae e al selr aichae e alsbe ich ess ainan.'
                }
            ]
        }
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
    },
};
</script>

<style>
.swiper_content {
    width: calc(100% - 150px);
    margin: auto;
    z-index:100000000000000000000000000;
    display: block;
    padding: 20px;
   background-color: white;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;}
.nameTestimonials{
  text-align:center;
  font-family:"Montserrat";
  font-weight:500;
}
.jobTestimonials{
  font-family:"Miller Display";
  text-align:center;
  font-size:14px;
  opacity:80%;
}
.messageTestimonials{
  text-align:center;
  opacity:80%;
}
:root {
    --swiper-theme-color: #30375a;
}

.swiper-button-prev:after, .swiper-button-next:after {
    font-size: 2rem;
}

</style>