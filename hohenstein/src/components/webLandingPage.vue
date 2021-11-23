<script>
import webTopicRight from "@/components/webTopicRight.vue";
import webTopicLeft from "@/components/webTopicLeft.vue";
import webFooter from "@/components/webFooter.vue";
import mobileTopicCar from "@/components/mobileTopicCar.vue";
import mobileTopicBusiness from "@/components/mobileTopicBusiness.vue";
import mobileRealEstate from "@/components/mobileTopicRealEstate.vue";
import mobileTopicFinance from "@/components/mobileTopicFinance.vue";
import mobileFooter from "@/components/mobileFooter.vue";
import mobileContact from "@/components/mobileContact.vue";
import {Slide} from "vue3-burger-menu";

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
      this.$router.push({path: "/finance"});
      console.log("message1");
    },
    changePathtoRealEstate: function () {
      this.$router.push({path: "/real-estate"});
    },
    changePathtoCars: function () {
      this.$router.push({path: "/cars"});
    },
    changePathtoBusiness: function () {
      this.$router.push({path: "/business-consulting"});
    },
    changePathtoTeam: function () {
      this.$router.push({path: "/team"});
    },
    changePathtoImprint: function () {
      this.$router.push({path: "/impressum"});
    },
  },
  components: {
    webTopicRight,
    webTopicLeft,
    webFooter,

    Slide,
    mobileTopicCar,
    mobileTopicBusiness,
    mobileRealEstate,
    mobileTopicFinance,
    mobileContact,

    mobileFooter,


  },
  mounted () {
    window.scrollTo(0, 0);
  },
  created() {
      if( screen.width <= 760 ) {
        this.isMobile=false;
      }
      else {
        this.isMobile=true;
      }
  },
};
</script>

<template>
  <div>
    <div v-if="this.isMobile">
      <div>
        <div class="imageWrapper">
          <img src="@/assets/imageLandingpage_compressed.jpg" class="landingPageImage"/>
        </div>
        <div class="whiteBox1">
          <img
              src="@/assets/HohensteinLogoText.png"
              class="hohenSteinLogoText"
          />
        </div>
      </div>
      <div class="masterDiv">
        <div class="landingPage">
          <nav class="nav">
            <ul v-if="this.$store.state.language == 'en'">
              <router-link to="/finance"
              >
                <li><a>Financial Advise</a></li>
              </router-link>
              <router-link to="/real-estate">
                <li><a>Real Estate</a></li>
              </router-link>
              <router-link to="/cars">
                <li><a>Classic Cars</a></li>
              </router-link>
              <router-link to="/business-consulting">
                <li><a>Business Consultancy</a></li>
              </router-link>
              <li>
                <a
                ><span v-if="this.$store.state.language == 'de'" style="font-weight:bold"
                       @click="languageDE()">DE</span>
                  <span v-else @click="languageDE()">DE</span> /
                  <span v-if="this.$store.state.language == 'en'" style="font-weight:bold"
                        @click="languageEN()">EN</span>
                  <span v-else @click="languageEN()">EN</span> /
                  <span v-if="this.$store.state.language == 'ru'" style="font-weight:bold"
                        @click="languageRU()">RU</span>
                  <span v-else @click="languageRU()">RU</span>
                </a
                >
              </li>
            </ul>
            <ul v-if="this.$store.state.language == 'de'">
              <router-link to="/finance"
              >

                <li><a>Finanz Beratung</a></li>
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

              <router-link to="/team">
                <li><a>Team</a></li>
              </router-link>

              <li>
                <a
                ><span v-if="this.$store.state.language == 'de'" style="font-weight:bold"
                       @click="languageDE()">DE</span>
                  <span v-else @click="languageDE()">DE</span> /
                  <span v-if="this.$store.state.language == 'en'" style="font-weight:bold"
                        @click="languageEN()">EN</span>
                  <span v-else @click="languageEN()">EN</span> /
                  <span v-if="this.$store.state.language == 'ru'" style="font-weight:bold"
                        @click="languageRU()">RU</span>
                  <span v-else @click="languageRU()">RU</span>
                </a
                >
              </li>
            </ul>
            <ul v-if="this.$store.state.language == 'ru'">
              <router-link to="/finance"
              >
                <li><a>Финансовое консультирование</a></li>
              </router-link>
              <router-link to="/real-estate">
                <li><a>Недвижимость</a></li>
              </router-link>
              <router-link to="/cars">
                <li><a>Винтажные автомобили</a></li>
              </router-link>
              <router-link to="/business-consulting">
                <li><a>Бизнес консалтинг</a></li>
              </router-link>
              <li>
                <a
                ><span v-if="this.$store.state.language == 'de'" style="font-weight:bold"
                       @click="languageDE()">DE</span>
                  <span v-else @click="languageDE()">DE</span> /
                  <span v-if="this.$store.state.language == 'en'" style="font-weight:bold"
                        @click="languageEN()">EN</span>
                  <span v-else @click="languageEN()">EN</span> /
                  <span v-if="this.$store.state.language == 'ru'" style="font-weight:bold"
                        @click="languageRU()">RU</span>
                  <span v-else @click="languageRU()">RU</span>
                </a
                >
              </li>
            </ul>
          </nav>

          <a href="#content">
            <img src="@/assets/arrow.png" class="landingPageArrow"/>
          </a>
        </div>

        <div class="content" id="content">

          <router-link to="/cars">
            <webTopicRight
              v-if="this.$store.state.language == 'de'"
              :name="'Oldtimer'"
              :slogan="'Nicht nur ein Auto.'"
              :img="require('@/assets/car1.png')"
              :type="true"
           />
            <webTopicRight
                v-if="this.$store.state.language == 'ru'"
                :name="'Винтажные автомобили.'"
                :slogan="'это не просто машина.'"
                :img="require('@/assets/car1.png')"
                :type="true"
            />
            <webTopicRight
                v-if="this.$store.state.language == 'en'"
                :name="'Classic Cars'"
                :slogan="'What a Luxury Car Should Be.'"
                :img="require('@/assets/car1.png')"
                :type="true"
            />
          </router-link>
          <router-link to="/business-consulting">
            <webTopicLeft
                v-if="this.$store.state.language == 'en'"
                :name="'Business Consultancy.'"
                :slogan="'Consulting is the secret to unlocking your vision.'"
                :img="require('@/assets/businessImage.png')"
                :type="true"
            />
            <webTopicLeft
                v-if="this.$store.state.language == 'ru'"
                :name="'Бизнес консалтинг.'"
                :slogan="'все, что нужно.'"
                :img="require('@/assets/businessImage.png')"
                :type="true"
            />
            <webTopicLeft
                v-if="this.$store.state.language == 'de'"
                :name="'Unternehmensberatung.'"
                :slogan="'Beratung ist das Geheimnis, um Ihre Vision zu verwirklichen.'"
                :img="require('@/assets/businessImage.png')"
                :type="true"
            />
          </router-link>
          <router-link to="real-estate">
            <webTopicRight
                v-if="this.$store.state.language == 'en'"
                :name="'Real Estate'"
                :slogan="'A Local Expert.'"
                :img="require('@/assets/house1.png')"
                :type="false"
            />
            <webTopicRight
                v-if="this.$store.state.language == 'de'"
                :name="'Immobilien'"
                :slogan="'Ein lokaler Experte'"
                :img="require('@/assets/house1.png')"
                :type="false"
            />
            <webTopicRight
                v-if="this.$store.state.language == 'ru'"
                :name="'Недвижимость.'"
                :slogan="'инвестиции и капитальные вложения.'"
                :img="require('@/assets/house1.png')"
                :type="false"
            />
          </router-link>
          <router-link to="/finance">
            <webTopicLeft
                v-if="this.$store.state.language == 'en'"
                :name="'Financial Advise'"
                :slogan="'Live comfortably and better.'"
                :img="require('@/assets/financeImage.png')"
                :type="false"
            />
            <webTopicLeft
                v-if="this.$store.state.language == 'de'"
                :name="'Finanzberatung'"
                :slogan="'Bequemer und besser leben.'"
                :img="require('@/assets/financeImage.png')"
                :type="false"
            />
            <webTopicLeft
                v-if="this.$store.state.language == 'ru'"
                :name="'Финансовая консультация.'"
                :slogan="'экспансия на рынке.'"
                :img="require('@/assets/financeImage.png')"
                :type="false"
            />
          </router-link>

          <webFooter/>
        </div>
      </div>
    </div>
    <div v-if="!this.isMobile">
      <div>
        <a class="languageSelection">
          <span
              v-if="this.$store.state.language == 'de'"
              @click="languageDE()"
              style="font-weight: bold;font-size:24px"
          >DE</span
          >
          <span v-else @click="languageDE()">DE</span>
          /
          <span
              v-if="this.$store.state.language == 'en'"
              @click="languageEN()"
              style="font-weight: bold;font-size:24px"
          >EN</span>
          <span v-else @click="languageEN()">EN</span>
          /
          <span v-if="this.$store.state.language == 'ru'" @click="languageRU()"
                style="font-weight: bold;font-size:24px">RU</span>
          <span v-else @click="languageRU()">RU</span>
        </a>
        <Slide right width="300" class="Slide" v-if="this.$store.state.language == 'en'">
          <a id="home" href="#">
            <span class="firstHeader">Services</span>
          </a>
          <router-link to="/finance">
            <span>Financial Advise</span>
          </router-link>

          <router-link to="/real-estate">
            <span>Real Estate</span>
          </router-link>
          <router-link to="/cars">
            <span>Classic Cars</span>
          </router-link>
          <router-link to="/business-consulting">
            <span>Business Consulting</span>
          </router-link>
          <a id="home" href="#">
            <span class="secondHeader">Pages</span>

          </a>
          <router-link to="/team">
            <span>Team</span>
          </router-link>
          <router-link to="/impressum">
            <span>Imprint</span>
          </router-link>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
        <Slide right width="300" class="Slide" v-if="this.$store.state.language == 'de'">
          <a id="home" href="#">
            <span class="firstHeader">Service</span>
          </a>
          <router-link to="/finance">
            <span>Finanzberatung</span>
          </router-link>
          <router-link to="/real-estate">
            <span>Immobilien</span>
          </router-link>
          <router-link to="/cars">
            <span>Oldtimer</span>
          </router-link>
          <router-link to="/business-consulting">
            <span>Unternehmensberatung</span>
          </router-link>
          <a id="home" href="#">
            <span class="secondHeader">Seiten</span>

          </a>
          <router-link to="/team">
            <span>Team</span>
          </router-link>
          <router-link to="/impressum">
            <span>Impressum</span>
          </router-link>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
        <Slide right width="300" class="Slide" v-if="this.$store.state.language == 'ru'">
          <a id="home" href="#">
            <span class="firstHeader">Сервис</span>
          </a>
          <router-link to="/finance">
            <span>Финансовый совет</span>
          </router-link>

          <router-link to="/real-estate">
            <span>Недвижимость</span>
          </router-link>
          <router-link to="/cars">
            <span>Винтажные автомобили</span>
          </router-link>
          <router-link to="/business-consulting">
            <span>Бизнес консалтинг</span>
          </router-link>
          <a id="home" href="#">
            <span class="secondHeader">Страницы</span>

          </a>
          <router-link to="/team">
            <span>Команда</span>
          </router-link>
          <router-link to="/impressum">
            <span>Импрессум</span>
          </router-link>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
      </div>
      <div style="display: flex; justify-content: center">
        <div class="mobileWhiteBox">
          <img src="@/assets/HohensteinLogoText.png" class="mobileLogo"/>
        </div>
        <img src="@/assets/imageLandingpage.jpg" class="mobileLandingImage"/>
      </div>

      <div class="mobileContent">
        <p class="servicesText" v-if="this.$store.state.language == 'ru'">Наши услуги</p>
        <p class="servicesText" v-if="this.$store.state.language == 'de'">Unser Service</p>
        <p class="servicesText" v-if="this.$store.state.language == 'en'">Our Services </p>
        <router-link to="/cars">
          <mobileTopicCar/>
        </router-link>
        <router-link to="/business-consulting">
          <mobileTopicBusiness/>
        </router-link>
        <router-link to="/real-estate">
          <mobileRealEstate/>
        </router-link>
        <router-link to="/finance">
          <mobileTopicFinance/>
        </router-link>
        <mobileContact/>
        <mobileFooter/>

      </div>
    </div>
  </div>
</template>

<style>
.Slide {
  white-space: nowrap;
}

.firstHeader {
  font-size: 26px;
  border-bottom: 2px solid white;
}

.secondHeader {
  font-size: 26px;
  border-bottom: 2px solid white;
  padding-top: 15px;
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

.sliderImage {
  position: absolute;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 60px;
}

.bm-overlay {
  background: white;
}

.bm-item-list {
  color: #b8b7ad;
  margin: 0;
  font-size: 20px;
}

.bm-item-list > * {

}

html {
  scroll-behavior: smooth;
}
</style>
<style scoped>
/*box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; shadow für whiteBox */
@import url(//db.onlinewebfonts.com/c/92463c635ac9f1453c6a0cf83d469764?family=Miller);
@import url(//db.onlinewebfonts.com/c/1fdf9a4d690c4e7271e535c39f40045f?family=Miller+Display);

* {
  font-family: "Miller Display";
}

.mobileLandingImage {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 150px;
  left: 0;
  right: 0px;
  margin: 0px;
  padding: 0px;

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
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}

.mobileLogo {
  position: absolute;
  top: 30px;
  height: 110px;
}

.mobileContent {
  position: absolute;
  background-color: white;
  width: 90%;
  height: 2800px;
  left: 50%;
  top: 525px;
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
  top: 28px;
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
  color: black;
}

.nav {
  font-size: 20px;
  position: fixed;
  z-index: 999999999;
  background-color: white;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 100%;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;

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
  height: 2350px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  top: 100%;
  background-color: white;
}

.servicesText {
  font-size: 30px;

  position: absolute;
  top: -110px;
  letter-spacing: 1px;
  text-align: center;
  width: 97%;

  margin-bottom: 130px;
}

.servicesText:before {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background: #30375a;
  left: 0px;
  top: 50%;
  position: absolute;
}

.servicesText:after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background: #30375a;
  right: 0px;
  top: 50%;
  position: absolute;
}

.landingPageImage {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.imageWrapper {
  left: 0;
  position: absolute;
  height: 80%;
  top: 120px;
  width: 100%;
  overflow: hidden;
}

.whiteBox1 {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  height: 230px;
  width: 700px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.hohenSteinLogoText {
  height: 200px;
  left: 50%;
  top: 10%;

  transform: translateX(-50%);
  position: absolute;
}


.landingPageArrow {
  position: absolute;
  height: 20px;
  left: 15%;
  bottom: 20px;
  display: none;
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


@media only screen and (max-width: 1150px), screen and (max-height: 850px) {
  .nav {
    font-size: 19px;
    position: fixed;
    z-index: 999999999;
    background-color: white;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    height: 80px;
    width: 100%;
  }

  .nav a {
    font-size: 16px;
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
}
</style>