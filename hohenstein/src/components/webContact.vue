<script>
import { Slide } from "vue3-burger-menu";
import mobileFooter from "@/components/mobileFooter.vue";

export default {
  data() {
    return {
      isMobile: true,
      greeting: "Hello World!",
    };
  },
  methods: {
    changePath: function () {
      this.$router.push({ path: "/contact" });
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
    alertFunction: function(){
      alert("funk");
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
      <div class="div">
        <div class="textBox">
          <p class="Headline">Contact Us</p>
          <p class="text">How can we help?</p>
          <form action="https://formsubmit.co/paulherbich1@gmail.com" method="POST">
            <input type="text" name="Name" placeholder="Full name" class="inputName" />
            <br />
            <input type="text" name="E-Mail" placeholder="Your Email" class="inputEmail" />
            <br />
            <input type="text" name="Nachricht" placeholder="Message" class="inputText" />
            <br />
            <input type="submit" value="Submit" class="inputButton" />
          </form>
        </div>
      </div>
      <div class="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0531195811523!2d16.37277211569394!3d48.20559275440027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e6c60ca6f%3A0xa3afc3a3cb04134d!2sWeihburggasse%2022%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1635066761214!5m2!1sde!2sat"
          width="700"
          height="450"
          style="border: 0; z-index: 10"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div v-if="!this.isMobile">
      <div class="navbar">
        <router-link to="/">
          <img src="@/assets/arrow.png" class="backButton" />
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
      <div class="mobileContent">
        <div class="contact">
          <p class="header">Contact us</p>
          <p class="text">How can we help?</p>
          <form action="https://formsubmit.co/paulherbich1@gmail.com" method="POST">
            <input
              name="Name"
              type="text"
              placeholder="Full name"
              class="inputNameMobile"
            />
            <br />
            <input
              name="E-Mail"
              type="text"
              placeholder="Your Email"
              class="inputEmailMobile"
            />
            <br />
            <input type="text" placeholder="Message" name="Nachricht" class="inputTextMobile" />
            <br />
            <input type="submit" value="Submit" class="inputButtonMobile" />
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
        <mobileFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Miller Display";
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
  transform: rotate(90deg);
}
.greeting {
  color: red;
  font-weight: bold;
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
.div {
  position: absolute;
  left: 150px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  height: 550px;
  width: 400px;
  background-color: white;
}
.Headline {
  position: absolute;
  top: 10px;
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
  left: 0;
  top: 120px;
  width: 400px;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}
.inputEmail {
  position: absolute;
  left: 0;
  top: 180px;
  width: 400px;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}
.inputText {
  position: absolute;
  left: 0;
  top: 240px;
  width: 400px;
  height: 200px;
  font-size: 15px;
  padding-left: 10px;
}
.inputButton {
  position: absolute;
  left: 0;
  top: 460px;
  width: 413px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
.maps {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 150px;
}
</style>