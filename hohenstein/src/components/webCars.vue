<script>
import {Slide} from "vue3-burger-menu";
import mobileFooter from "@/components/mobileFooter.vue";

export default {
  data() {
    return {
      isMobile: true
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
        <img src="@/assets/car1.png" class="carimage"/>
        <div class="blueStrike"></div>
        <div class="firstText">

          <p>
            <ul class="checkList" v-if="this.$store.state.language == 'de'">
            <li style="padding-bottom:10px;">Oldtimervermittlung</li>
            <li style="padding-bottom:10px;">Oldtimerfinanzierung</li>
            <li style="padding-bottom:10px;">Oldtimervermietung</li>
            </ul>
            <ul class="checkList" v-if="this.$store.state.language == 'en'">
            <li style="padding-bottom:10px;">Classic car brokerage</li>
            <li style="padding-bottom:10px;">Classic car financing</li>
            <li style="padding-bottom:10px;">Classic car rental</li>
          </ul>
          <ul class="checkList" v-if="this.$store.state.language == 'ru'">
            <li style="padding-bottom:10px;">Брокеридж классических автомобилей</li>
            <li style="padding-bottom:10px;">Финансирование классических автомобилей</li>
            <li style="padding-bottom:10px;">Прокат классических автомобилей</li>
          </ul>
          </p>
          <p v-if="this.$store.state.language == 'de'"> <span style="font-size: 27px;">F</span>ahren Sie jetzt Ihren Traumwagen. Heben Sie sich durch den klassisch eleganten Stil der Oldtimer von der Masse ab. </p>
          <p v-if="this.$store.state.language == 'en'"> <span style="font-size: 27px;">D</span>rive your dream car now. Stand out from the crowd with the elegant style of classic cars. We help you to find, finance or simply rent the car of your dreams.</p>
          <p v-if="this.$store.state.language == 'ru'"> <span style="font-size: 27px;">C</span>адитесь за руль автомобиля своей мечты прямо сейчас. Выделитесь из толпы с помощью классически элегантного стиля ретроавтомобилей. Мы поможем вам найти, профинансировать или арендовать автомобиль вашей мечты.
          </p>
        </div>

        <div class="secondText">
          <p v-if="this.$store.state.language == 'de'">
             Wir unterstützen Sie bei der Suche, Finanzierung oder der simplen Miete Ihres Wunschautos. Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt.
          </p>
          <p v-if="this.$store.state.language == 'ru'">
            Вы можете связаться с нами и договориться о записи на первый разговор с нашими экспертами. Будем рады сотрудничеству с Вами в Вашем проекте.
          </p>
          <p v-if="this.$store.state.language == 'en'">
            Contact us and arrange a meeting with our experts. We look forward to your project.          </p>
          <div class="buttonDiv" v-if="this.$store.state.language == 'de'">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Rufe uns an!</a>
            <a href="" class="btn btn3" @click="changePath()">Kontaktieren uns!</a>
          </div>
          <div class="buttonDiv" v-if="this.$store.state.language == 'en'">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Call us!</a>
            <a href="" class="btn btn3" @click="changePath()">Contact Us!</a>
          </div>
          <div class="buttonDiv" v-if="this.$store.state.language == 'ru'">
            <a href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Позвоните нам!</a>
            <a href="" class="btn btn3" @click="changePath()">Свяжитесь с нами!</a>
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
            <li v-if="this.$store.state.language == 'de'" class="li" style="float:right;"><a>Impressum</a></li>
            <li v-if="this.$store.state.language == 'en'" class="li" style="float:right;"><a>Imprint</a></li>
            <li v-if="this.$store.state.language == 'ru'" class="li" style="float:right;"><a>Оттиск</a></li>
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
      <img src="@/assets/car1.png" class="mobileImage"/>
      <div class="mobileContent">
        <p v-if="this.$store.state.language == 'en'" class="mobileText">Classic Cars</p>
        <p v-if="this.$store.state.language == 'en'" class="mobileSlogan">Not just a car</p>
        <p v-if="this.$store.state.language == 'de'" class="mobileText">Oldtimer</p>
        <p v-if="this.$store.state.language == 'de'" class="mobileSlogan">Nicht nur ein Auto.</p>
        <p v-if="this.$store.state.language == 'ru'" class="mobileText">Винтажные автомобили</p>
        <p v-if="this.$store.state.language == 'ru'" class="mobileSlogan">это не просто машина</p>
        <div class="mobileText-container-helper">
          <div class="mobileText-container">
            <ul class="item1" v-if="this.$store.state.language == 'de'">
              <li>  Oldtimervermittlung </li>
              <li>  Oldtimerfinanzierung</li>
              <li> Oldtimervermietung</li>
            </ul>
            <ul class="item1" v-if="this.$store.state.language == 'en'">
              <li>  Classic car brokerage </li>
              <li>  Classic car financing</li>
              <li> Classic car rental</li>
            </ul>
            <ul class="item1" v-if="this.$store.state.language == 'ru'">
              <li>   Брокеридж классических автомобилей </li>
              <li>  Брокеридж классических автомобилей</li>
              <li> Финансирование классических автомобилей</li>
            </ul>
            <p v-if="this.$store.state.language == 'de'" class="item2"> <span style="font-size: 27px;">F</span>ahren Sie jetzt Ihren Traumwagen. Heben Sie sich durch den klassisch eleganten Stil der Oldtimer von der Masse ab.</p>
            <p v-if="this.$store.state.language == 'ru'" class="item2"> <span style="font-size: 27px;">C</span>адитесь за руль автомобиля своей мечты прямо сейчас. Выделитесь из толпы с помощью классически элегантного стиля ретроавтомобилей. Мы поможем вам найти, профинансировать или арендовать автомобиль вашей мечты.</p>
            <p v-if="this.$store.state.language == 'en'" class="item2"> <span style="font-size: 27px;">D</span>rive your dream car now. Stand out from the crowd with the classic elegant style of classic cars.</p>

            <p class="item3" v-if="this.$store.state.language == 'de'">
             Wir unterstützen Sie bei der Suche, Finanzierung oder der simplen Miete Ihres Wunschautos. Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr Projekt.
          </p>
            <p class="item3" v-if="this.$store.state.language == 'ru'">
              Вы можете связаться с нами и договориться о записи на первый разговор с нашими экспертами. Будем рады сотрудничеству с Вами в Вашем проекте.
            </p>
            <p class="item3" v-if="this.$store.state.language == 'en'">
              We support you in finding, financing or simply renting the car of your dreams. Contact us and arrange an initial meeting with our experts. We are looking forward to your project.
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
        <input
            v-if="this.$store.state.language == 'ru'"
            type="button"
            value="Свяжитесь с нами!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
        />
        <input
            v-if="this.$store.state.language == 'en'"
            type="button"
            value="Contact us!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
        />
        <a href="tel:+43 676 911 511 0" v-if="this.$store.state.language == 'de'">
          <input type="button" value="Ruf uns an!" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
        <a href="tel:+43 676 911 511 0" v-if="this.$store.state.language == 'ru'">
          <input type="button" value="Позвоните нам!" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
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
  top: 830px;
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
  top: 910px;
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