<script>
import { Slide } from "vue3-burger-menu";
import mobileFooter from "@/components/mobileFooter.vue";

export default {
  data() {
    return {
      isMobile: false,
      greeting: "Hello World!",
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
    <div class="bigDiv" v-if="this.isMobile">
      <router-link to="/">
        <div class="sidebar">
          <img
            class="arrowBack"
            src="@/assets/arrow.png"
            style="transform: rotate(90deg)"
          />
        </div>
      </router-link>
      <div class="content">
        <p class="category">
          <span style="font-family: 'Helvetica'"> / </span> Team
        </p>
        <p class="header">The Team</p>
        <div class="teamBox">
          <div class="person1">
            <img src="@/assets/steiningerCut.png" class="imageTeam" style="width:130px;" />
            <p class="person1text">Gerald Steininger, MBA</p>
            <p class="person1text">+436769115110</p>
            <p class="person1text">Immobilienberatung, Unternehmensberatung</p>
          </div>
          <div class="person2">
            <img src="@/assets/chalupaCut.png" class="imageTeam" />

            <p class="person1text">Boris Chalupa</p>
            <p class="person1text">+436608106408</p>
            <p class="person1text">Finanzberatung</p>
          </div>
        </div>
        <p class="descriptionTeam">em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor </p>
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
          <span
            v-if="this.$store.state.language == 'ru'"
            @click="languageRU()"
            style="font-weight: bold"
            >RU</span
          >
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
          <img src="@/assets/HohensteinWhite.png" class="sliderImage" />
        </Slide>
      </div>
      <p class="slogan">team</p>
      <p class="text"> od tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ta</p>
      <div class="mobileContent">
        
        <div class="person1mobile">
          <img src="@/assets/Steininger2.jpg" class="mobileImageTeam" />
          <p class="person1text">Gerald Steininger, MBA</p>
          <p class="person1text">+436769115110</p>
          <p class="person1text">Immobilienberatung, Unternehmensberatung</p>
        </div>
        <div class="person2mobile">
          <img src="@/assets/Chalupa2.jpg" class="mobileImageTeam" />
          <p class="person1text">Boris Chalupa</p>
          <p class="person1text">+436608106408</p>
          <p class="person1text">Finanzberatung</p>
        
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
.slogan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70px;
  font-size: 20px;
  opacity: 70%;
}
.descriptionTeam{
  position: absolute;
  left:55%;
  transform: translateX(-50%);
  bottom:55px;
  opacity: 70%;
  text-align: center;
}
.mobileContent {
  position: absolute;
  background-color: white;
  width: 90%;
  height: 1250px;
  left: 50%;
  top: 245px;
  transform: translateX(-50%);
}

.sidebar {
  position: absolute;
  height: 100vh;
  left: 0px;
  top: 0px;
  width: 80px;
  padding: 0;
  margin: 0;
  background-color: #e3e5e6;
}

.languageSelection {
  position: absolute;
  font-size: 20px;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
}
.text{
  
  opacity: 70%;
  text-align:center;
  position:absolute;
  padding-left:40px;
  padding-right:40px;
  top:120px;
}
.backButton {
  position: absolute;
  height: 12px;
  top: 35px;
  transform: rotate(90deg);
}
.category {
  position: absolute;
  left: 150px;
  top: 50px;
  font-size: 20px;
  opacity: 70%;
}
.header {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
  font-size: 40px;
  border-bottom: 5px solid #30375a;
}
.teamBox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 400px;
  background-color: #e3e5e6;
}
.person1mobile {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 50%;
  transform: translateX(-50%);
  top: 250px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person2mobile {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 50%;
  transform: translateX(-50%);
  top: 650px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.person1 {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 10%;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person2 {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  right:10%;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person1text {
  color: white;
  text-align: center;
  margin: 4px;
}
.person2text {
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.arrowBack {
  height: 13px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 25px;
}
.imageTeam {
  width: 230px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 125px;
}
.mobileImageTeam {
  width: 290px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 125px;
}
.person1:hover {
  transform: translateX(0px) scale(1.05);
}
.person2:hover {
  transform: translateX(0px) scale(1.05);
}
@media only screen and (max-width: 1550px), screen and (max-height: 850px) {
  .teamBox {
    position: absolute;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    min-width: 700px;
    height: 300px;
    
    max-height: 50%;
    background-color: #e3e5e6;
  }
  .header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    font-size: 40px;
    border-bottom: 5px solid #30375a;
  }
  .imageTeam {
    width: 160px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 125px;
  }
}
</style>