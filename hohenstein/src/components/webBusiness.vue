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
      this.$router.push({path: '/contact'})
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
  },
  components: {
    Slide,
    mobileFooter
  },
  /*
  created() {
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
      <div class="contentDiv">
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
        </nav>




        <img src="@/assets/businessImage.png" class="carimage"/>
        <div class="blueStrike"></div>
        <div class="firstText">

          <p v-if="this.$store.state.language == 'de'">
            <span style="font-size: 25px; color: #30375a"></span>
            <ul class="checkList">
            <li style="padding-bottom:10px;">Prozessoptimierung</li>
            <li style="padding-bottom:10px;">Rechtliche Beratung</li>
            <li style="padding-bottom:10px;">Beratung in Management und Mitarbeiterführung</li>
            <li style="padding-bottom:10px;">Firmengründung europaweit</li>
            <li style="padding-bottom:10px;">Steuerberatung</li>
            </ul>
          </p>
          <p v-if="this.$store.state.language == 'en'">
            <span style="font-size: 25px; color: #30375a"></span>
          <ul class="checkList">
            <li style="padding-bottom:10px;">Process optimisation</li>
            <li style="padding-bottom:10px;">Legal advice</li>
            <li style="padding-bottom:10px;">Advice on management and leadership</li>
            <li style="padding-bottom:10px;">Company formations throughout Europe</li>
            <li style="padding-bottom:10px;">Tax advice</li>
          </ul>
          </p>
        </div>

        <div class="secondText" v-if="this.$store.state.language == 'de'">

          <p>
            <span style="font-size: 27px;">W</span>ir arbeiten mit Ihnen gemeinsam, um Ihr bestehendes oder neu
            gegründetes Unternehmen auf Spitzenleistung zu bringen.
            Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr
            Projekt.
          </p>
          <div class="buttonDiv">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Rufe uns an!</a>


            <a href="" class="btn btn3" @click="changePath()">Kontaktieren uns!</a>

          </div>

        </div>
        <div class="secondText" v-if="this.$store.state.language == 'en'">

          <p>
            <span style="font-size: 27px;">W</span>e work with you to bring your existing or newly established company to peak performance. Let us help you discover new possibilities and opportunities by optimising your processes and tax issues.
            Contact us and arrange a meeting with our experts. We look forward to your project.
          </p>
          <div class="buttonDiv">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Call us!</a>


            <a href="" class="btn btn3" @click="changePath()">Contact us!</a>

          </div>

        </div>
        <footer class="footer">
          <ul class="ul">
            <li class="li" style="float: left;"><a>office@hohenstein-consulting.at</a></li>
            <li class="li" style="float: left;"><a>+43 676 911 511 0</a></li>
            <img
                src="@/assets/HohensteinWhite.png"
                class="hohenSteinLogoText"
            />
            <li class="li" style="float:right;"><a>Weihburggasse 22/5 1010 Wien </a></li>
            <router-link to="/team">
              <li class="li" style="float:right"><a>Team</a></li>
            </router-link>
            <li class="li" style="float:right;" v-if="this.$store.state.language == 'de'"><a>Impressum</a></li>
            <li class="li" style="float:right;" v-if="this.$store.state.language == 'en'"><a>Imprint</a></li>
          </ul>
        </footer>
      </div>
    </div>
    <div v-if="!this.isMobile" class="mobileContentDiv">
      <div class="navbar">
        <router-link to="/">
          <img src="@/assets/arrow.png" class="backButton"/>
        </router-link>
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
          >EN</span
          >
          <span v-else @click="languageEN()">EN</span>
          /
          <span v-if="this.$store.state.language == 'ru'" @click="languageRU()" style="font-weight: bold;font-size:24px">RU</span>
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
      <img src="@/assets/businessImage.png" class="mobileImage"/>
      <div class="mobileContent">
        <p class="mobileText">Business Consulting</p>
        <p class="mobileSlogan">All it takes</p>
        <div class="mobileText-container-helper">
          <div class="mobileText-container">
            <ul class="item1" v-if="this.$store.state.language == 'de'">
              <li>  Prozessoptimierung </li>
              <li>  Rechtliche Beratung</li>
              <li> Beratung in Management</li>
              <li> Beratung in Mitarbeiterführung</li>
              <li> Firmengründung europaweit</li>
              <li> Steuerberatung</li>
            </ul>
            <ul class="item1" v-if="this.$store.state.language == 'en'">
              <li>  Process optimisation </li>
              <li>  Legal advice</li>
              <li> Advice on management and leadership</li>
              <li> Company formations throughout Europe</li>
              <li> Tax advice</li>
            </ul>
            <p class="item2" v-if="this.$store.state.language == 'en'">
              <span style="font-size: 27px;">W</span>e work with you to bring your existing or newly established company to peak performance. Let us help you discover new possibilities and opportunities by optimising your processes and tax issues. </p>
            <p class="item3" v-if="this.$store.state.language == 'en'">
              Contact us and arrange a meeting with our experts. We look forward to your project. </p>
            <p class="item2" v-if="this.$store.state.language == 'de'">
              <span style="font-size: 27px;">W</span>ir arbeiten mit Ihnen gemeinsam, um Ihr bestehendes oder neu
              gegründetes Unternehmen auf Spitzenleistung zu bringen. </p>
            <p class="item3" v-if="this.$store.state.language == 'de'">
              Entdecken Sie durch uns neue Möglichkeiten und Chancen durch Optimierung Ihrer Prozesse sowie
              steuerrechtliche Belange.

              Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr
              Projekt.
            </p>
          </div>
        </div>


        <input
            v-if="this.$store.state.language == 'de'"
            type="button"
            value="Konaktiere uns!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
        />
        <a href="tel:+43 676 911 511 0" v-if="this.$store.state.language == 'de'">
          <input type="button" value="Ruf uns an!" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
        <input
            v-if="this.$store.state.language == 'en'"
            type="button"
            value="Contact us!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
        />
        <a href="tel:+43 676 911 511 0" v-if="this.$store.state.language == 'en'">
          <input type="button" value="Call us!" class="inputButton2" style="-webkit-appearance: none;
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

.checkList {
  padding-top: 5px;
  margin-top: 5px;
  padding-bottom: 5px;
  list-style-type: square;
}

.mobileText-container-helper {
  position: absolute;
  top: 275px;
}

.mobileText-container {
  display: flex;
  flex-wrap: wrap;
  margin-top:-20px;
}

.item1 {
  width: 100%;
  list-style-type:none;
  font-size:18px;
}

.item1 li::before {
  content: "■";
  color: #30375a;
  padding:5px;
}

.item2 {
  width: 100%;
  text-align: justify;
  font-size:18px;

}

.item3 {
  width: 100%;
  text-align: justify;
  font-size:18px;

}



.footer {
  display: flex;
  flex-direction: column;

  font-size: 15px;
  position: static;
  bottom:0px;
  margin-top:150px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 80%;
  background-color: #30375a;
  height: 90px;
  left: 50%;
  padding-top: 10px;
  padding-bottom: 15px;

}

.hohenSteinLogoText {

  height: 70px;
  transform: translateY(-20px);
}

nav {
  font-size: 18px;
  position: fixed;
  z-index: 999999999;
  background-color: white;
  top: 0;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;
  width: 75%;
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

  margin: 3%;
}


footer ul li a {
  color: white;
}

.ul {
  list-style-type: none;
  padding: 0;

  text-align: center;
}

.li {
  display: inline;
  margin: 2%;
  margin-top: 0;
  color: black;
}

a {
  text-decoration: none;
  color: black;
  text-align: center;
}

.footerHelper {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}

.mobileContentDiv {
  position: absolute;
  height: 1450px;
  width: 100%;
  left: 0;

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
  top: 800px;
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
  top: 880px;
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
  top: 28px;
  left: 50%;
  font-family: "Miller Display";
  transform: translateX(-50%);
}

.backButton {
  position: absolute;
  height: 12px;
  top: 35px;
  left: 15px;
  transform: rotate(90deg);
}

.mobileText {
  position: absolute;
  font-weight: 500;
  width: 100%;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
}

.mobileImage {
  position: absolute;
  top: 120px;
  left: 0px;
  width: 100%;
}

.btn {
  position: relative;
  display: block;
  font-size: 15px;
  background-color: #30375a;
  font-family: "montserrat";
  text-decoration: none;
  z-index: 10000000000000;
  border: 1px solid black;
  width: 200px;
  color: white;
  height: 40px;
  padding-top: 17px;
  text-transform: uppercase;
  margin-right: 1px;

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


.carimage {
  flex-basis: 80%;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  max-height: 35vh;
  object-fit: cover;
  margin-top: 120px;
}

.blueStrike {
  height: 1px;
  background-color: #30375a;
  width: 80%;
  margin-top:3vh;
}

.buttonDiv {
  display: flex;
  justify-content: space-between;
}

.contentDiv {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap:10px;
  margin-left:80px;
}

.firstText {
  color: black;
  flex-basis: 35%;

  height: 25vh;
  text-align: justify;
}

.firstText li {
  margin-left: 12px;
  padding-left: 3px;
}

.secondText {
  color: black;
  flex-basis: 35%;
  height: 25vh;
  text-align: justify;

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

}

@media only screen and (max-width: 1250px) {


  nav li {
    margin: 2%;
    font-size: 16px;
  }

  .ul {
    list-style-type: none;
    padding: 0;
    font-size: 13px;
    text-align: center;
  }

  .li {
    display: inline;
    margin: 1%;
    color: black;
  }

  .hohenSteinLogoText {
    height: 60px;

  }
}

</style>