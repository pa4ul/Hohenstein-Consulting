<script>
import {Slide} from "vue3-burger-menu";
import mobileFooter from "@/components/mobileFooter.vue";

export default {
  data() {
    return {
      isMobile: false,
      greeting: "Hello World!",
    };
  },
  methods: {
    changePath: function () {
      this.$router.push({path: "/contact"});
    },
    changePathtoFinance: function () {
      this.$router.push({path: "/finance"});
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
    languageDE() {
      this.$store.dispatch("changeLanguage", "de");
    },
    languageEN() {
      this.$store.dispatch("changeLanguage", "en");
    },
    languageRU() {
      this.$store.dispatch("changeLanguage", "ru");
    },
  },
  components: {
    Slide,
    mobileFooter,
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
      <router-link to="/">
        <div class="sidebar">
          <img
              class="arrowBack"
              src="@/assets/arrow.png"
              style="transform: rotate(90deg)"
          />
        </div>
        <p class="category" style="z-index: 100">
          <span style="font-family: 'Helvetica'"> / </span> Contact
        </p>
      </router-link>
      <div class="wrapper1">
        <div class="webContact">
          <p class="header" v-if="this.$store.state.language == 'en'">Contact us</p>
          <p class="text" v-if="this.$store.state.language == 'en'">How can we help?</p>
          <p class="header" v-if="this.$store.state.language == 'de'">Kontaktiere uns!</p>
          <p class="text" v-if="this.$store.state.language == 'de'">Wie können wir ihnen helfen?</p>
          <p class="header" v-if="this.$store.state.language == 'ru'">Свяжитесь с нами</p>
          <p class="text" v-if="this.$store.state.language == 'ru'">Как мы можем помочь?</p>
          <form action="https://formsubmit.co/paulherbich1@gmail.com" method="POST">
            <input
                name="Name"
                type="text"
                placeholder="Name"
                class="inputNameMobile"
            />
            <br/>
            <input
                name="E-Mail"
                type="text"
                placeholder="E-Mail"
                class="inputEmailMobile"
            />
            <br/>
            <input v-if="this.$store.state.language == 'en'" type="text" placeholder="Message" name="Nachricht" class="inputTextMobile"/>
            <br/>
            <input v-if="this.$store.state.language == 'en'" type="submit" value="Submit" class="inputButtonMobile" style="-webkit-appearance: none;
            border-radius: 0;"/>
            <input v-if="this.$store.state.language == 'de'" type="text" placeholder="Nachricht" name="Nachricht" class="inputTextMobile"/>
            <br/>
            <input v-if="this.$store.state.language == 'de'" type="submit" value="Absenden" class="inputButtonMobile" style="-webkit-appearance: none;
            border-radius: 0;"/>
            <input v-if="this.$store.state.language == 'ru'" type="text" placeholder="Сообщение" name="Nachricht" class="inputTextMobile"/>
            <br/>
            <input v-if="this.$store.state.language == 'ru'" type="submit" value="Отправить" class="inputButtonMobile" style="-webkit-appearance: none;
            border-radius: 0;"/>

          </form>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10636.210315711996!2d16.36620604147663!3d48.205603168378175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e6c60ca6f%3A0xa3afc3a3cb04134d!2sWeihburggasse%2022%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1635526907467!5m2!1sde!2sat"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="iframe"
          ></iframe>
        </div>
        <footer class="footer1">
          <ul>
            <li style="float: left;"><a>office@hohenstein-consulting.at</a></li>
            <li style="float: left;"><a>+43 650 123 4567</a></li>
            <img
                src="@/assets/HohensteinWhite.png"
                class="hohenSteinLogoText"
            />

            <router-link to="/team"> <li style="float:right"><a>Team</a></li></router-link>
            <router-link v-if="this.$store.state.language == 'en'" to="/impressum"><li style="float:right;"><a>Imprint</a></li></router-link>
            <router-link v-if="this.$store.state.language == 'de'" to="/impressum"><li style="float:right;"><a>Impressum</a></li></router-link>
            <router-link v-if="this.$store.state.language == 'ru'" to="/impressum"><li style="float:right;"><a>Импрессум</a></li></router-link>
            <li style="float:right;"><a>Weihburggasse 22/5 1010 Wien </a></li>
          </ul>
        </footer>
      </div>
    </div>
    <div v-if="!this.isMobile">
      <div class="navbar">
        <router-link to="/">
          <img src="@/assets/arrow.png" class="backButton"/>
        </router-link>
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
        <Slide right width="250" class="Slide" v-if="this.$store.state.language == 'en'">
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
          <a id="home" href="#" @click="changePathtoTeam()">
            <span>Team</span>
          </a>
          <a id="home" href="#" @click="changePathtoImprint()">
            <span>Imprint</span>
          </a>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
        <Slide right width="250" class="Slide" v-if="this.$store.state.language == 'ru'">
          <a id="home" href="#">
            <span class="firstHeader">Сервис</span>
          </a>
          <a id="home" href="#" @click="changePathtoFinance()">
            <span>Финансовый совет</span>
          </a>

          <a id="" href="#" @click="changePathtoRealEstate()">
            <span>Недвижимость</span>
          </a>
          <a id="home" href="#" @click="changePathtoCars()">
            <span>Винтажные автомобили</span>
          </a>
          <a id="home" href="#" @click="changePathtoBusiness()">
            <span>Бизнес консалтинг</span>
          </a>
          <a id="home" href="#">
            <span class="secondHeader">Страницы</span>

          </a>
          <a id="home" href="#" @click="changePathtoTeam()">
            <span>Команда</span>
          </a>
          <a id="home" href="#" @click="changePathtoImprint()">
            <span>Импрессум</span>
          </a>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
        <Slide right width="250" class="Slide" v-if="this.$store.state.language == 'de'">
          <a id="home" href="#">
            <span class="firstHeader">Service</span>
          </a>
          <a id="home" href="#" @click="changePathtoFinance()">
            <span>Finanzberatung</span>
          </a>

          <a id="" href="#" @click="changePathtoRealEstate()">
            <span>Immobilien</span>
          </a>
          <a id="home" href="#" @click="changePathtoCars()">
            <span>Oldtimer</span>
          </a>
          <a id="home" href="#" @click="changePathtoBusiness()">
            <span>Unternehmensberatung</span>
          </a>
          <a id="home" href="#">
            <span class="secondHeader">Seiten</span>
          </a>
          <a id="home" href="#" @click="changePathtoTeam()">
            <span>Team</span>
          </a>
          <a id="home" href="#" @click="changePathtoImprint()">
            <span>Impressum</span>
          </a>
          <img src="@/assets/HohensteinWhite.png" class="sliderImage">
        </Slide>
      </div>
      <div class="mobileContent">
        <div class="contact">
          <p class="header" v-if="this.$store.state.language == 'en'">Contact us!</p>
          <p class="text" v-if="this.$store.state.language == 'en'">How can we help?</p>
          <p class="header" v-if="this.$store.state.language == 'de'">Kontaktiere uns!</p>
          <p class="text" v-if="this.$store.state.language == 'de'">Wie können wir helfen?</p>
          <p class="header" v-if="this.$store.state.language == 'ru'">Свяжитесь с нами!</p>
          <p class="text" v-if="this.$store.state.language == 'ru'">Как мы можем помочь?</p>
          <form action="https://formsubmit.co/paulherbich1@gmail.com" method="POST">
            <input
                name="Name"
                type="text"
                placeholder="Name"
                class="inputNameMobile"
            />
            <br/>
            <input
                name="E-Mail"
                type="text"
                placeholder="E-Mail"
                class="inputEmailMobile"
            />
            <br/>
            <input v-if="this.$store.state.language == 'en'" type="text" placeholder="Message" name="Nachricht" class="inputTextMobile"/>
            <input v-if="this.$store.state.language == 'de'" type="text" placeholder="Nachricht" name="Nachricht" class="inputTextMobile"/>
            <input v-if="this.$store.state.language == 'ru'" type="text" placeholder="Сообщение" name="Nachricht" class="inputTextMobile"/>
            <br/>
            <input v-if="this.$store.state.language == 'en'" type="submit" value="Submit" class="inputButtonMobile" style="-webkit-appearance: none;
       border-radius: 0;"/>
            <input v-if="this.$store.state.language == 'ru'" type="submit" value="Отправить" class="inputButtonMobile" style="-webkit-appearance: none;
       border-radius: 0;"/>

            <input v-if="this.$store.state.language == 'de'" type="submit" value="Absenden" class="inputButtonMobile" style="-webkit-appearance: none;
       border-radius: 0;"/>
          </form>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10636.210315711996!2d16.36620604147663!3d48.205603168378175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e6c60ca6f%3A0xa3afc3a3cb04134d!2sWeihburggasse%2022%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1635526907467!5m2!1sde!2sat"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="iframe"
          ></iframe>
        </div>
        <mobileFooter/>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Miller Display";
}
.webContact{
  display: flex;
}
.wrapper1 {
  position: absolute;
  width: calc(100% - 160px);
  left:120px;
}
.footer1{
  font-size: 16px;
  position: absolute;
  bottom:-1050px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 100%;
  padding-top:10px;
  padding-bottom:15px;
  background-color:#30375a;

}
.hohenSteinLogoText{
  position: absolute;
  height: 100px;
  left: 50%;
  transform: translate(-50%, -20%);
}
ul {
  list-style-type: none;
  padding: 0;

  text-align: center;
}
li {
  display: inline;
  margin: 2%;
  color:white;
}

.iframe {
  position: absolute;
  top: 550px;

}

.header {
  position: absolute;
  font-size: 25px;
  border-bottom: 3px solid #30375a;
}

.mobileContent {
  position: absolute;
  width: 90%;
  left: 50%;
  top: 70px;

  height: 1425px;
  transform: translateX(-50%);
}

.text {
  position: absolute;
  top: 50px;
  font-size: 15px;
  opacity: 70%;
}

.contact {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: white;
  top: 0px;
}

.inputNameMobile {
  position: absolute;
  left: 0;
  top: 120px;
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}

.inputEmailMobile {
  position: absolute;
  left: 0;
  top: 180px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}

.inputTextMobile {
  position: absolute;
  left: 0;
  top: 240px;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  font-size: 15px;
  padding-left: 10px;
}

.inputButtonMobile {
  position: absolute;
  left: 0;
  top: 460px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}

.languageSelection {
  position: absolute;
  font-size: 20px;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
}

.backButton {
  position: absolute;
  height: 12px;
  top: 35px;
  left: 15px;
  transform: rotate(90deg);
}

input {
  border: 0.5px solid black;
}

.sidebar {
  position: fixed;
  height: 100%;
  left: 0px;
  top: 0px;
  width: 80px;
  padding: 0;
  margin: 0;
  background-color: #e3e5e6;
  z-index: 2;
}

.arrowBack {
  height: 13px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 25px;
}

.Headline {
  position: absolute;
  top: 10px;
  left: 140px;
  font-family: "Miller Display";
  font-size: 25px;
  border-bottom: 3px solid #30375a;
}

.text {
  position: absolute;
  top: 60px;

  font-size: 15px;
  opacity: 70%;
}

.inputName {
  position: absolute;
  left: 140px;
  top: 120px;
  width: 400px;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}

.inputEmail {
  position: absolute;
  left: 140px;
  top: 180px;
  width: 400px;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}

.inputText {
  position: absolute;
  left: 140px;
  top: 240px;
  width: 400px;
  height: 200px;
  font-size: 15px;
  padding-left: 10px;
}

.inputButton {
  position: absolute;
  left: 140px;
  top: 460px;
  width: 413px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}

.maps {

}

.maps iframe {
  width: 450px;
  position: absolute;
  top: 500px;
}

@media only screen and (max-width: 1100px), screen and (max-height: 600px) {

.hohenSteinLogoText{
  display: none;
}
}
</style>