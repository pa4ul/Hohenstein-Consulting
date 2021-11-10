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
    languageDE() {
      this.$store.dispatch("changeLanguage", "de");
    },
    languageEN() {
      this.$store.dispatch("changeLanguage", "en");
    },
    languageRU() {
      this.$store.dispatch("changeLanguage", "ru");
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  components: {
    Slide,
    mobileFooter
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
      <a @click="goBack()">
        <div class="sidebar">
          <img
            class="arrowBack"
            src="@/assets/arrow.png"
            style="transform: rotate(90deg)"
          />
        </div>
      </a>
      <p class="category">
        <span style="font-family: 'Helvetica'"> / </span> Financial Advise
      </p>
      <p class="slog3an">
        Conquer <br /> the market
        
      </p>
      <img src="@/assets/financeImage.png" class="carimage" />
      <div class="contentDiv">
        <div class="firstText">
          <div class="blueStrike"></div>
          <p>
            <span style="font-size: 25px; color: #30375a"></span>
           <ul class="checkList">
  <li style="padding-bottom:10px;">Finanzpläne</li>
  <li style="padding-bottom:10px;">Kreditvermittlung</li>
  <li>Mezzaninkapital</li>
</ul>
            Sie benötigen für Ihr Projekt einen Mix aus Eigen- und Fremdkapital? Wir beraten Sie gerne und finden mit Ihnen die rentabelste Variante für Ihre Finanzierung. 
          </p>
        </div>

        <div class="secondText">
          <p>
            Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt. Wir setzen Sie in Verbindung mit Eigenkapitalgeber und Bankberater, welche Ihnen Kredite bzw. Darlehen mit attraktiv niedrigen Zinsen und Laufzeit finanzieren. 
          </p>
          <div class="buttonDiv">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Call Us</a>

            <a href="" class="btn btn3" @click="changePath()">Contact Us</a>
          </div>
        </div>
        <footer class="footer">
        <ul class="ul">
          <li  class="li" style="float: left;"><a>office@hohenstein-consulting.at</a></li>
          <li class="li" style="float: left;"><a>+43 676 911 511 0</a></li>
          <img
            src="@/assets/HohensteinLogoText.png"
            class="hohenSteinLogoText"
          />
          <li class="li" style="float:right;"><a>Weihburggasse 22/5 1010 Wien </a></li> 
         <router-link to="/team">   <li class="li" style="float:right"><a>Team</a></li></router-link>
          <li class="li" style="float:right;"><a>Imprint</a></li>
        </ul>
    </footer>
      </div>
    </div>
    <div v-if="!this.isMobile" class="mobileContentDiv">
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
              <img src="@/assets/financeImage.png" class="mobileImage" />

     <div class="mobileContent">
        <p class="mobileText">Financial Advise</p>
        <p class="mobileSlogan">Conquer the market</p>
        <div class="mobileText-container-helper">
        <div class="mobileText-container">
        <p class="item1">
          &#10003; Finanzpläne
          <br/>
          &#10003; Kreditvermittlung
          <br/>
          &#10003; Mezzaninkapital
         </p>
         <p class="item2">
            <span style="font-size: 27px;">S</span>ie benötigen für Ihr Projekt einen Mix aus Eigen- und Fremdkapital? Wir beraten Sie gerne und finden mit Ihnen die rentabelste Variante für Ihre Finanzierung. Wir setzen Sie in Verbindung mit Eigenkapitalgeber und Bankberater, welche Ihnen Kredite bzw. Darlehen mit attraktiv niedrigen Zinsen und Laufzeit finanzieren. 
           </p>
          <p class="item3">
          Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt.</p>
         </div>
         </div>
     
      
      
        <input  
          type="button"
          value="Contact us"
          @click="changePath()"
          class="inputButton3"
        />
        <a href="tel:+43 676 911 511 0" >
          <input type="button" value="Call us" class="inputButton2"
        /></a>
      </div>
      <div class="footerHelper">
      <mobileFooter/>

      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Miller Display";
}
.checkList{
  padding-top:20px;
  padding-bottom:5px;
  list-style-type: '\2713';
}
.mobileText-container-helper{
  position:absolute;
  top:275px;
}
.mobileText-container{
  display:flex;
  flex-wrap:wrap;
  top:500px;
}
.item1{
  width:100%;
}
.item2{
  width:100%;
  text-align: justify;
}
.item3{
  width:100%;
  text-align: justify;
}
.footer{
  font-size: 15px;
  position: absolute;
  bottom:-240px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 80%;
  height: 90px;
  left:50%;
  transform:translateX(-50%);
  padding-top:10px;
  padding-bottom:15px;
  
}
.hohenSteinLogoText{
    position: absolute;
  height: 70px;
  top:35%;
  left: 50%;
  transform: translate(-50%, -20%);
}
.ul {
  list-style-type: none;
  padding: 0;
  
  text-align: center;
}
.li {
  display: inline;
  margin: 2%;
  color:black;
}
a {
  text-decoration: none;
  text-align: center;
}
.mobileContentDiv{
  position:absolute;
  height:1300px;
  width:100%;
  left:0;

}
.footerHelper
{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:90%;
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
  font-size: 26px;
  border-left: 5px solid #30375a;

  font-family: Montserrat;
  font-weight: bold;
}
* {
  font-family: "Miller Display";
}
.inputButton3 {
  position: absolute;
  left: 0;
  top: 670px;
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
  top: 730px;
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
  left:15px;
  transform: rotate(90deg);
}
.mobileText {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.mobileImage {
  position: absolute;
  top: 120px;
  left:0px;
  width: 100%;
}
.btn{
  position: relative;
  display: block;
  color: black;
  font-size: 15px;
  font-family: "montserrat";
  text-decoration: none;
  border: 1px solid black;
  width: 185px;
  height: 40px;
  padding-top:15px;
  text-transform: uppercase;
  margin-right:5px;
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
  top: 20px;
  font-size: 20px;
  opacity: 70%;
}
.slog3an {
  position: absolute;
  font-size: 50px;
  font-family: Montserrat;
  font-weight: bold;
    left: 150px;
  top: 40px;
  text-align: left;
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

@media only screen and (max-width: 1400px) and (max-height: 750px) {
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