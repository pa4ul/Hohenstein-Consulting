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
            <img src="@/assets/aurel.png" class="imageTeam" />
            <p class="person1text">Gerald Steininger, MBA</p>
            <p class="person1text">+436769115110</p>
            <p class="person1text">Immobilienberatung, Unternehmensberatung</p>
          </div>
          <div class="person2">
            <p class="person1text">Boris Chalupa</p>
            <p class="person1text">+436608106408</p>
            <p class="person1text">Finanzberatung</p>
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
      <p class="slogan"> team </p>
      <div class="mobileContent">
        <div class="person1mobile">
            <img src="@/assets/aurel_uncut.jpg" class="mobileImageTeam" />
            <p class="person1text">Gerald Steininger, MBA</p>
            <p class="person1text">+436769115110</p>
            <p class="person1text">Immobilienberatung, Unternehmensberatung</p>
          </div>
          
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  font-family: "Miller Display";
}
.slogan{
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top:70px;
  font-size: 20px;
  opacity: 70%;
  
}
.mobileContent {
  position: absolute;
  background-color: #e3e5e6;
  width: 90%;
  height: 550px;
  left: 50%;
  top: 125px;
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
  height: 500px;
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

.person2 {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 380px;
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    min-width: 700px;
    height: 400px;
    min-height: 400px;
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
    width: 190px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 125px;
  }
}
</style>