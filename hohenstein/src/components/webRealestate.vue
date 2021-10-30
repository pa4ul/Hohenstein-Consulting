<script>
import { Slide } from "vue3-burger-menu";

export default {
  data() {
    return {
      isMobile: false,
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
  },
  components: {
    Slide,
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
      </router-link>
      <p class="category">
        <span style="font-family: 'Helvetica'"> / </span> Real Estate
      </p>
      <p class="slogan">
        A VISION FOR
        <br />
        YOUR LIFE
      </p>
      <img src="@/assets/house1.png" class="carimage" />
      <div class="contentDiv">
        <div class="firstText">
          <div class="blueStrike"></div>
          <p>
            <span style="font-size: 25px; color: #30375a">L</span> orem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </p>
        </div>

        <div class="secondText">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clitres et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div class="buttonDiv">
            <a href="tel:+43 676 911 511 0" class="btn btn3">Call Us</a>

            <a href="" class="btn btn3" @click="changePath()">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!this.isMobile">
      <div class="navbar">
        <router-link to="/">
          <img src="@/assets/arrow.png" class="backButton" />
        </router-link>
        <a class="languageSelection">
          <span @click="languageDE()">DE</span> /
          <span @click="languageEN()">EN</span> /
          <span @click="languageRU()">RU</span></a
        >
        <Slide right width="250" class="Slide">
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
        </Slide>
      </div>
      <div class="mobileContent">
        <p class="mobileText">Real Estate</p>
        <img src="@/assets/house1.png" class="mobileImage" />
        <p class="mobileSlogan">A VISION FOR YOUR LIFE</p>
        <p class="mobileText1">
          <span style="font-size: 25px"> L</span> orem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p class="mobileText2">
          sum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <input
          type="button"
          value="Contact us"
          @click="changePath()"
          class="inputButton3"
        />
        <a href="tel:+43 676 911 511 0">
          <input type="button" value="Call us" class="inputButton2"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;

  text-align: center;
}
.mobileContent {
  position: absolute;
  width: 90%;
  left: 50%;
  top: 65px;
  transform: translateX(-50%);
}
.mobileSlogan {
  position: absolute;
  top: 200px;
  padding-left: 10px;
  font-size: 23px;
  border-left: 5px solid #30375a;

  font-family: Montserrat;
  font-weight: bold;
}
.inputButton3 {
  position: absolute;
  left: 0;
  top: 620px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
.inputButton2 {
  position: absolute;
  left: 0;
  top: 680px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
.mobileText1 {
  position: absolute;
  top: 280px;
}

.mobileText2 {
  position: absolute;
  top: 450px;
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
.mobileText {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.mobileImage {
  position: absolute;
  top: 60px;
  width: 100%;
}
.btn {
  position: relative;
  display: block;
  color: black;
  font-size: 15px;
  font-family: "montserrat";
  text-decoration: none;
  border: 1px solid black;
  width: 200px;
  height: 40px;
  padding-top: 15px;
  text-transform: uppercase;

  overflow: hidden;
  transition: 1s all ease;
}
.btn::before {
  background: #30375a;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}
.btn:hover {
  color: white;
}

.btn3::before {
  width: 100%;
  height: 0%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.btn3:hover::before {
  height: 450%;
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
.category {
  position: absolute;
  left: 150px;
  top: 50px;
  font-size: 20px;
  opacity: 70%;
}
.slogan {
  position: absolute;
  font-size: 50px;
  font-family: Montserrat;
  font-weight: bold;
  left: 10vw;
  top: 8vh;
  text-align: center;
  z-index: 2;
}
.carimage {
  position: absolute;
  max-width: 90%;
  height: 40%;
  top: 20vh;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  clip: rect(40px 1850px 400px 100px);
}
.blueStrike {
  position: absolute;
  height: 8px;
  width: 100px;
  background-color: #30375a;
}
.buttonDiv {
  display: flex;
  justify-content: space-between;
}
.contentDiv {
  height: 95vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}
.firstText {
  color: #30375a;
  width: 30vw;
  height: 25vh;
}
.secondText {
  color: #30375a;
  width: 30vw;
  height: 25vh;
}
.inputButton {
  width: 200px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
@media only screen and (max-width: 1400px) and (max-height: 750px) {
  .carimage {
    position: absolute;
    width: 90%;
    max-height: 250px;
    top: 20vh;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn {
    position: relative;
    display: block;
    color: black;
    font-size: 15px;
    font-family: "montserrat";
    text-decoration: none;
    border: 1px solid black;
    width: 130px;
    height: 40px;
    padding-top: 15px;
    text-transform: uppercase;
    margin-bottom: 50px;
    overflow: hidden;
    transition: 1s all ease;
  }
}
</style>