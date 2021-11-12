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
      this.$router.push({ path: '/contact' })
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
   <nav>
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
                <li><a>Business Consulting</a></li>
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
      <span style="font-family: 'Helvetica'"> / </span> Business Consulting
    </p>
    <p class="slog3an">
     ALL IT <br />
      TAKES
    </p>
    <img src="@/assets/businessImage.png" class="carimage" />
    <div class="contentDiv">
      <div class="firstText">
        <div class="blueStrike"></div>
        <p>
          <span style="font-size: 25px; color: #30375a"></span>
           <ul class="checkList">
  <li style="padding-bottom:10px;">Prozessoptimierung</li>
  <li style="padding-bottom:10px;">Rechtliche Beratung</li>
   <li style="padding-bottom:10px;">Beratung in Management und Mitarbeiterführung</li>
    <li style="padding-bottom:10px;">Firmengründung europaweit</li>
     <li style="padding-bottom:10px;">Steuerberatung  </li>
</ul>
          </p>
      </div>
    
      <div class="secondText">
        <p>
 <span style="font-size: 27px;">W</span>ir arbeiten mit Ihnen gemeinsam, um Ihr bestehendes oder neu gegründetes Unternehmen auf Spitzenleistung zu bringen. 
          Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt.
        </p>
        <div class="buttonDiv">
     <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Rufe uns an!</a>
       
        
        <a href="" class="btn btn3" @click="changePath()">Kontaktiere uns!</a>
        
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
      <img src="@/assets/businessImage.png" class="mobileImage" />
      <div class="mobileContent">
        <p class="mobileText">Business Consulting</p>
        <p class="mobileSlogan">All it takes</p>
        <div class="mobileText-container-helper">
        <div class="mobileText-container">
        <p class="item1">
          &#10003; Prozessoptimierung
          <br/>
          &#10003; Rechtliche Beratung
          <br/>
          &#10003; Beratung in Management und Mitarbeiterführung
          <br/>
          &#10003; Firmengründung europaweit
          <br/>
          &#10003; Steuerberatung
         </p>
         <p class="item2">
            <span style="font-size: 27px;">W</span>ir arbeiten mit Ihnen gemeinsam, um Ihr bestehendes oder neu gegründetes Unternehmen auf Spitzenleistung zu bringen.    </p>
          <p class="item3">
          Entdecken Sie durch uns neue Möglichkeiten und Chancen durch Optimierung Ihrer Prozesse sowie steuerrechtliche Belange. 

Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt.
</p>
         </div>
         </div>



        <input
          type="button"
          value="Contact us"
          @click="changePath()"
          class="inputButton3"
          style="-webkit-appearance: none;
       border-radius: 0;"
        />
        <a href="tel:+43 676 911 511 0" >
          <input type="button" value="Call us" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
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
  padding-top:5px;
  margin-top:5px;
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
nav {
  font-size: 15px;
  position: fixed;
  z-index: 999999999;
  background-color: white;
  top: 0;
  
  top: 0;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;
  left:100px;
  right:100px;
}
ul {
  list-style-type: none;
  margin-top: 40px;

  padding: 0;
}

li:hover {
  cursor: pointer;
}

nav li {
  display: inline;
  margin: 4%;
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
a{
  text-decoration: none;
  color:black;
  text-align: center;
}
.footerHelper
{
  position:absolute;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:90%;
}
.mobileContentDiv{
  position:absolute;
  height:1300px;
  width:100%;
  left:0;

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
  font-size: 25px;
  border-left: 5px solid #30375a;
  font-family: Montserrat;
  font-weight: bold;
}
.inputButton3 {
  position: absolute;
  left: 0;
  top: 700px;
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
  top: 760px;
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
  font-size: 15px;
  background-color:#30375a;
  font-family: "montserrat";
  text-decoration: none;
  z-index:10000000000000;
  border: 1px solid black;
  width: 200px;
  color:white;
  height: 40px;
  padding-top:15px;
  text-transform: uppercase;
  margin-right:1px;
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before {
  background: white;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}
.btn:hover {
  color: black;

}

.btn3::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(45deg);
}
.btn3:hover::before{
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
text-align:left;
  top: 40px;
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
  height: 8px;
  width: 100px;
  background-color: #30375a;
}
.buttonDiv{
    display: flex;
    justify-content: space-between;
}
.contentDiv {
  height: 86vh;
  display: flex;
  justify-content:space-evenly;
  align-items: flex-end;
}
.firstText {
  color: black;
  width: 30vw;
  height: 25vh;
  text-align:justify;
}
.firstText li{
  margin-left:12px;
  padding-left:3px;  
}
.secondText {
  color: black;
  width: 30vw;
  height: 25vh;
  text-align:justify;

}

@media only screen and (max-width: 1400px) and (max-height: 750px) {

  
  .btn {
    position: relative;
    display: block;
    color: white;
    font-size: 15px;
    font-family: "montserrat";
    text-decoration: none;
    border: 1px solid black;
    width: 170px;
    height: 40px;
    padding-top: 15px;
    text-transform: uppercase;
    margin-bottom: 50px;
    overflow: hidden;
    transition: 1s all ease;
  }
  nav{
    
  }
}
@media only screen and (max-width: 1050px){

  
  
  nav li{
    margin:2%;
    font-size:12px;
  }
  .ul {
  list-style-type: none;
  padding: 0;
  font-size:12px;
  text-align: center;
}
.li {
  display: inline;
  margin: 1%;
  color:black;
}
.hohenSteinLogoText{
    position: absolute;
  height: 50px;
  top:45%;
  left: 50%;
  transform: translate(-50%, -20%);
}
}

</style>