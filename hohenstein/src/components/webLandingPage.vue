<script>
import webTopicRight from "@/components/webTopicRight.vue";
import webTopicLeft from "@/components/webTopicLeft.vue";
import webFooter from "@/components/webFooter.vue";
import webTestimonials from "@/components/webTestimonials.vue";
import mobileTopicCar from "@/components/mobileTopicCar.vue";
import mobileTopicBusiness from "@/components/mobileTopicBusiness.vue";
import mobileRealEstate from "@/components/mobileTopicRealEstate.vue";
import mobileTopicFinance from "@/components/mobileTopicFinance.vue";
import mobileFooter from "@/components/mobileFooter.vue";
import mobileContact from "@/components/mobileContact.vue";
import { Slide } from "vue3-burger-menu";


export default {
  data() {
    return {
      
      isMobile: true,
    };
  },
  methods: {
    languageDE() {
      this.$store.dispatch("changeLanguage", "de");
    },
    languageEN() {
      this.$store.dispatch("changeLanguage", "en");
    },
    languageRU() {
      this.$store.dispatch("changeLanguage", "ru");
    },
    changePathtoFinance: function () {
      this.$router.push({ path: "/finance" });
    },
    changePathtoRealEstate: function () {
      this.$router.push({ path: "/real-estate" });
    },
    changePathtoCars: function () {
      this.$router.push({ path: "/cars" });
    },
    changePathtoBusiness: function () {
      this.$router.push({ path: "/business-consulting" });
    },
  },
  components: {
    webTopicRight,
    webTopicLeft,
    webFooter,
    webTestimonials,
    Slide,
    mobileTopicCar,
    mobileTopicBusiness,
    mobileRealEstate,
    mobileTopicFinance,
    mobileContact,
    mobileFooter,

    
  },
  /*created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.isMobile = true;
    } else {
      // false for not mobile device
      this.isMobile = false;
    } 
  },*/
};
</script>

<template>
  <div>
    <div v-if="this.isMobile">
      <div class="masterDiv">
        <div class="landingPage">
          <nav>
            <ul v-if="this.$store.state.language == 'en'">
              <router-link to="/finance"
                ><li><a>Financial Advise</a></li>
              </router-link>
              <router-link to="/real-estate">
                <li><a>Real Estate</a></li>
              </router-link>
              <router-link to="/cars">
                <li><a>Classic Cars</a></li>
              </router-link>
              <router-link to="/business-consulting">
                <li><a>Business Consulting</a></li>
              </router-link>
              <li>
                <a
                  ><span @click="languageDE()">DE</span> /
                  <span @click="languageEN()">EN</span> /
                  <span @click="languageRU()">RU</span></a
                >
              </li>
            </ul>
            <ul v-if="this.$store.state.language == 'de'">
              <router-link to="/finance"
                ><li><a>Finanz Beratung</a></li>
              </router-link>
              <router-link to="/real-estate">
                <li><a>Immobilien</a></li>
              </router-link>
              <router-link to="/cars">
                <li><a>Oldtimer</a></li>
              </router-link>
              <router-link to="/business-consulting">
                <li><a>Unternehmensberatung</a></li>
              </router-link>
              <li>
                <a
                  ><span @click="languageDE()">DE</span> /
                  <span @click="languageEN()">EN</span> /
                  <span @click="languageRU()">RU</span></a
                >
              </li>
            </ul>
          </nav>
          <div>
            <img src="@/assets/imageLandingpage.jpg" class="landingPageImage" />
            <div class="whiteBox1">
              <img
                src="@/assets/HohensteinLogoText.png"
                class="hohenSteinLogoText"
              />
              <p
                v-if="this.$store.state.language == 'en'"
                class="whiteBox1Slogan"
              >
                Making Your Ideas Come True
              </p>
              <p
                v-if="this.$store.state.language == 'de'"
                class="whiteBox1Slogan"
              >
                Wir verwirklichen ihre Ideen
              </p>
              <p
                v-if="this.$store.state.language == 'ru'"
                class="whiteBox1Slogan"
              >
                Воплощение ваших идей в жизнь
              </p>

              <div class="whiteBox1BlueLine"></div>
            </div>
          </div>
          <a href="#content">
            <img src="@/assets/arrow.png" class="landingPageArrow" />
          </a>
        </div>
        <div class="content" id="content">
          <router-link to="/cars">
            <webTopicRight
              :name="'Classic Cars'"
              :slogan="'What a Luxury Car Should Be.'"
              :img="require('@/assets/car1.png')"
              :type="true"
            />
          </router-link>
          <router-link to="/business-consulting">
            <webTopicLeft
              :name="'Business Consulting'"
              :slogan="'Consulting is the secret to unlocking your vision.'"
              :img="require('@/assets/businessImage.png')"
              :type="true"
            />
          </router-link>
          <router-link to="real-estate">
            <webTopicRight
              :name="'Real Estate'"
              :slogan="'A Local Expert.'"
              :img="require('@/assets/house1.png')"
              :type="false"
            />
          </router-link>
          <router-link to="/finance">
            <webTopicLeft
              :name="'Financial Advise'"
              :slogan="'Live comfortably and better.'"
              :img="require('@/assets/financeImage.png')"
              :type="false"
            />
          </router-link>
          <webTestimonials />
          <webFooter />
        </div>
      </div>
    </div>
    <div v-if="!this.isMobile">
      <div>
        <a class="languageSelection">
          <span
            v-if="this.$store.state.language == 'de'"
            @click="languageDE()"
            style="font-weight: bold"
            >DE</span
          >
          <span v-else @click="languageDE()">DE</span>
          /
          <span
            v-if="this.$store.state.language == 'en'"
            @click="languageEN()"
            style="font-weight: bold"
            >EN</span
          >
          <span v-else @click="languageEN()">EN</span>
          /
          <span v-if="this.$store.state.language == 'ru'" @click="languageRU()" style="font-weight:bold">RU</span>
          <span v-else @click="languageRU()">RU</span> 
        </a>
        <Slide right width="250" class="Slide">
          <a id="home" href="#">
           
            <span class="firstHeader">Services</span>
          
          </a>
          <a id="home" href="#" @click="changePathtoFinance()">
            <span>Financial Advise</span>
          </a>

          <a id="" href="#" @click="changePathtoRealEstate()">
            <span>Real Estate</span>
          </a>
          <a id="home" href="#" @click="changePathtoCars()">
            <span>Classic Cars</span>
          </a>
          <a id="home" href="#" @click="changePathtoBusiness()">
            <span>Business Consulting</span>
          </a>
          <a id="home" href="#">
            <span class="secondHeader">Pages</span>
            
          </a>
          <a id="home" href="#">
            <span>Teams</span>
          </a>
          <a id="home" href="#">
            <span>Imprint</span>
          </a>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
      </div>
      <div style="display: flex; justify-content: center">
        <div class="mobileWhiteBox">
          <img src="@/assets/HohensteinLogoText.png" class="mobileLogo" />
        </div>
        <img src="@/assets/imageLandingpage.jpg" class="mobileLandingImage" />
      </div>
      <div class="mobileContent">
        <router-link to="/cars">
          <mobileTopicCar />
        </router-link>
        <router-link to="/business-consulting">
          <mobileTopicBusiness />
        </router-link>
        <router-link to="/real-estate">
          <mobileRealEstate />
        </router-link>
        <router-link to="/finance">
          <mobileTopicFinance />
        </router-link>
        <mobileContact />
        <mobileFooter />
       
      </div>
    </div>
  </div>
</template>

<style>

.firstHeader{
  font-size:28px;
  border-bottom:1px solid white;
}
.secondHeader{
  font-size:28px;
  border-bottom:1px solid white;
  padding-top:30px;
}

.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  top: 28px;
  left: 85%;
  cursor: pointer;
}
.cross-style {
  position: absolute;
  top: 22px;
  right: 6px;
  cursor: pointer;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #30375a; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-item-list > * > span {
 margin: 0 auto;
  font-weight: 500;
  color: white;
  
}
.sliderImage{
  position: absolute;
  height: 100px;
  left:50%;
  transform: translateX(-50%);
  bottom:70px;
}
.bm-overlay {
  background: white;
}
.bm-item-list {
  color: #b8b7ad;
  margin:0;
  font-size: 20px;
}
.bm-item-list>*{
  padding:5px;
}
html {
  scroll-behavior: smooth;
}
</style>
<style scoped>
@import url(//db.onlinewebfonts.com/c/92463c635ac9f1453c6a0cf83d469764?family=Miller);
@import url(//db.onlinewebfonts.com/c/1fdf9a4d690c4e7271e535c39f40045f?family=Miller+Display);
* {
  font-family: "Miller Display";
}
.mobileLandingImage {
  position: absolute;
  width:100%;
  z-index: 1;
  top: 150px;
  left:0;
  right: 0px;
  margin:0px;
  padding:0px;
  
}

.mobileWhiteBox {
  position: absolute;
  top: 100px;
  background-color: white;
  width: 70%;
  height: 160px;
  display: flex;
  justify-content: center;
  z-index: 10;
  
  
}
.mobileLogo {
  position: absolute;
  top:30px;
  height: 110px;
}
.mobileContent {
  position: absolute;
  background-color: white;
  width: 90%;
  height: 3000px;
  left: 50%;
  top: 475px;
  transform: translateX(-50%);
}
.mobileSlogan {
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
}
.languageSelection {
  position: absolute;
  font-size: 20px;
  top: 36px;
  left: 36px;
}
.landingPage {
  position: absolute;
  top: 0;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
}
a {
  text-decoration: none;
  color:black;
}
nav {
  font-size: 20px;
  position: absolute;
  top: 0;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;
  width: 100%;
}
ul {
  list-style-type: none;
  margin-top: 40px;

  padding: 0;
}
li:hover {
  cursor: pointer;
}
li {
  display: inline;
  margin: 4%;
}
.content {
  height: 3400px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  top: 100%;
  background-color: white;
}
.landingPageImage {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 100%;
  max-width: 1000px;
  max-height: 80%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.whiteBox1 {
  position: absolute;
  height: 500px;
  width: 500px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  right: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.hohenSteinLogoText {
  height: 200px;
  top: 15%;
  left: 0%;
  position: absolute;
}
.whiteBox1BlueLine {
  position: absolute;
  top: 50%;
  right: -15%;
  height: 8px;
  width: 150px;
  background-color: #30375a;
}
.whiteBox1Slogan {
  transform: translate(12%, 1050%);
  letter-spacing: 1px;
  opacity: 70%;
  font-size: 20px;
}
.landingPageArrow {
  position: absolute;
  height: 20px;
  left: 15%;
  bottom: 20px;
}

.f::before,
.f::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

.f::before {
  content: "";
  right: 0;
  top: 0;
  border-top: 3px solid #30375a;
  border-right: 3px solid #30375a;
  transform: translate(-100%, 50%);
}

.f::after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #30375a;
  border-left: 3px solid #30375a;
  transform: translate(100%, -50%);
}

.f:hover:before,
.f:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
@media only screen and (max-width: 1500px) {
  .landingPageImage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .whiteBox1 {
    position: absolute;
    height: 40%;
    width: 450px;
    background-color: white;
    top: 50%;
    transform: translateY(-50%);
    right: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .hohenSteinLogoText {
    height: 160px;
    top: 15%;
    left: 0%;
    position: absolute;
  }
  .whiteBox1BlueLine {
    position: absolute;
    top: 50%;
    right: -15%;
    height: 6px;
    width: 150px;
    background-color: #30375a;
  }
  .whiteBox1Slogan {
    transform: translate(12%, 1150%);
    letter-spacing: 1px;
    opacity: 70%;
    font-size: 15px;
  }
}
@media only screen and (max-width: 1250px), screen and (max-height: 850px) {
  nav {
    font-size: 18px;
    position: absolute;
    top: 0;
    text-align: center;
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    height: 80px;
    width: 100%;
  }
  ul {
    list-style-type: none;
    margin-top: 30px;
    padding: 0;
  }
  li {
    display: inline;
    margin: 3%;
  }
  .landingPageImage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100px;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .whiteBox1 {
    position: absolute;
    height: 40%;
    width: 350px;
    background-color: white;
    top: 50%;
    transform: translateY(-50%);
    right: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .hohenSteinLogoText {
    height: 130px;
    top: 15%;
    left: 0%;
    position: absolute;
  }
  .whiteBox1BlueLine {
    position: absolute;
    top: 50%;
    right: -15%;
    height: 6px;
    width: 110px;
    background-color: #30375a;
  }
  .whiteBox1Slogan {
    transform: translate(12%, 1150%);
    letter-spacing: 1px;
    opacity: 70%;
    font-size: 13px;
  }
}
@media only screen and (min-width: 2150px) {
  .landingPageImage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 200px;
    width: 100%;
    max-width: 1000px;
    max-height: 80%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
</style>