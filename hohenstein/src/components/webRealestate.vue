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
  },
  components: {
    Slide,
    mobileFooter
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
              <a>
              <span v-if="this.$store.state.language == 'de'" style="font-weight:bold"
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


        <img src="@/assets/house1.png" class="carimage"/>
        <div class="blueStrike"></div>
        <div class="firstText">
          <p v-if="this.$store.state.language == 'de'"><span style="font-size: 27px;">W</span>ir vermitteln Ihnen
            Immobilien mit Potenzial. Von dem Erwerb eines Gewerbegrunds bis hin zur privaten Investitionsanlage finden
            wir für Sie attraktive Immobilien. Sie möchten Ihr Immobilienprojekt finanzieren lassen? Dann erfahren sie
            hier (link), wie Sie in dem Aspekt bei uns beraten lassen können.
          </p>
          <p v-if="this.$store.state.language == 'ru'"><span style="font-size: 27px;">М</span>ы оказываем брокерские услуги в сфере недвижимости. От приобретения коммерческой недвижимости до частных инвестиций - мы найдем для вас привлекательные и выгодные предложения. Вы хотите профинансировать свой проект недвижимости? Тогда вы можете узнать здесь (ссылка), как вы можете получить от нас консультацию по этому вопросу.
          </p>
          <p v-if="this.$store.state.language == 'en'"><span style="font-size: 27px;">W</span>e work with you to bring
            your existing or newly established company to peak performance. Let us help you discover new possibilities
            and opportunities by optimising your processes and tax issues.
          </p>
          <p v-if="this.$store.state.language == 'de'">
            Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr
            Projekt.
          </p>
          <p v-if="this.$store.state.language == 'ru'">
            Вы можете связаться с нами и договориться о записи на первый разговор с нашими экспертами. Будем рады сотрудничеству с Вами в Вашем проекте.
          </p>
          <p v-if="this.$store.state.language == 'en'">
            Contact us and arrange a meeting with our experts. We look forward to your project.</p>
        </div>

        <div class="secondText">
          <p>
          <ul class="checkList" v-if="this.$store.state.language == 'de'">
            <li style="padding-bottom:10px;">Immobilienerwerb</li>
            <li style="padding-bottom:10px;">Immobilienverkauf</li>
            <li style="padding-bottom:10px;">Immobilenvermittlung</li>
            <li style="padding-bottom:10px;">Immobilienfinanzierung</li>
            <li style="padding-bottom:0px;">Soziale Aspekte</li>
          </ul>
          <ul class="checkList" v-if="this.$store.state.language == 'en'">
            <li style="padding-bottom:10px;">Real estate acquisition</li>
            <li style="padding-bottom:10px;">Real estate sale</li>
            <li style="padding-bottom:10px;">Real estate brokerage</li>
            <li style="padding-bottom:10px;">Real estate financing</li>
            <li style="padding-bottom:0px;">Social projects</li>
          </ul>
          <ul class="checkList" v-if="this.$store.state.language == 'ru'">
            <li style="padding-bottom:10px;">Приобретение недвижимости</li>
            <li style="padding-bottom:10px;">Продажа недвижимости</li>
            <li style="padding-bottom:10px;">Брокеридж недвижимости</li>
            <li style="padding-bottom:10px;">Финансирование недвижимости</li>
            <li style="padding-bottom:0px;">Социальные проекты</li>
          </ul>
          </p>

          <div class="buttonDiv">
            <a v-if="this.$store.state.language == 'de'" href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Rufen Sie uns an!</a>
            <router-link v-if="this.$store.state.language == 'de'"  to="/contact" class="btn btn3"> Kontaktieren Sie uns! </router-link>
            <a v-if="this.$store.state.language == 'en'" href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Call us!</a>
            <a  v-if="this.$store.state.language == 'en'" href="" class="btn btn3" @click="changePath()">Contact us!</a>
            <a v-if="this.$store.state.language == 'ru'" href="tel:+43 676 911 511 0" class="btn btn3" title="+43 676 911 511 0">Позвоните нам!</a>
            <a  v-if="this.$store.state.language == 'ru'" href="" class="btn btn3" @click="changePath()">Свяжитесь с нами!</a>
          </div>

        </div>
        <footer class="footer">
          <ul class="ul">
            <li class="li" style="float: left;"><a href="mailto:office@hohenstein-consulting.at">office@hohenstein-consulting.at</a></li>
            <li class="li" style="float: left;"><a href="tel:01 4230033">01 4230033</a></li>
            <img
                src="@/assets/HohensteinWhite.png"
                class="hohenSteinLogoText"
            />
            <li class="li" style="float:right;"><a>Rennweg 3, 1030 Wien </a></li>
            <router-link to="/team">
              <li class="li" style="float:right"><a>Team</a></li>
            </router-link>
            <router-link to="/impressum">
            <li v-if="this.$store.state.language == 'en'" class="li" style="float:right;"><a>Imprint</a></li>
            <li v-if="this.$store.state.language == 'de'" class="li" style="float:right;"><a>Impressum</a></li>
            <li v-if="this.$store.state.language == 'ru'" class="li" style="float:right;"><a>Импрессум</a></li>
            </router-link>
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
      <img src="@/assets/house1.png" class="mobileImage"/>
      <div class="mobileContent">
        <p class="mobileText" v-if="this.$store.state.language == 'en'">Real Estate</p>
        <p class="mobileSlogan" v-if="this.$store.state.language == 'en'">Invest in Real Estate</p>
        <p class="mobileText" v-if="this.$store.state.language == 'de'">Immobilien</p>
        <p class="mobileSlogan" v-if="this.$store.state.language == 'de'">Investiere in Immobilien</p>
        <p class="mobileText" v-if="this.$store.state.language == 'ru'">Иммобилиен</p>
        <p class="mobileSlogan" v-if="this.$store.state.language == 'ru'">Инвестировать в недвижимость</p>
        <div class="mobileText-container-helper">
          <div class="mobileText-container">
            <ul class="item1" v-if="this.$store.state.language == 'en'">
              <li> Real estate acquisition</li>
              <li> Real estate sale</li>
              <li> Real estate brokerage</li>
              <li> Real estate financing</li>
              <li> Social projects</li>
            </ul>
            <ul class="item1" v-if="this.$store.state.language == 'de'">
              <li> Immobilienerwerb</li>
              <li> Immobilienverkauf</li>
              <li> Immobilenvermittlung</li>
              <li> Immobilienfinanzierung</li>
              <li> Soziale Aspekte</li>
            </ul>
            <ul class="item1" v-if="this.$store.state.language == 'ru'">
              <li> Приобретение недвижимости</li>
              <li> Продажа недвижимости </li>
              <li> Маклерство в сфере недвижимости </li>
              <li> Финансовые операции с недвижимостью </li>
              <li> Социальные аспекты </li>
            </ul>
            <p class="item2" v-if="this.$store.state.language == 'de'"><span style="font-size: 27px;">W</span>ir vermitteln Ihnen Immobilien mit Potenzial. Von
              dem Erwerb eines Gewerbegrunds bis hin zur privaten Investitionsanlage finden wir für Sie attraktive
              Immobilien. Sie möchten Ihr Immobilienprojekt finanzieren lassen? Dann erfahren sie hier (link), wie Sie
              in dem Aspekt bei uns beraten lassen können.
            </p>
            <p class="item3" v-if="this.$store.state.language == 'de'">
              Kontaktieren Sie uns und vereinbaren Sie ein Erstgespräch mit unseren Experten. Wir freuen uns auf Ihr
              Projekt.
            </p>
            <p class="item2" v-if="this.$store.state.language == 'ru'"><span style="font-size: 27px;">М</span>ы оказываем брокерские услуги в сфере недвижимости. От приобретения коммерческой недвижимости до частных инвестиций - мы найдем для вас привлекательные и выгодные предложения. Вы хотите профинансировать свой проект недвижимости? Тогда вы можете узнать здесь (ссылка), как вы можете получить от нас консультацию по этому вопросу.

            </p>
            <p class="item3" v-if="this.$store.state.language == 'ru'">
              Вы можете связаться с нами и договориться о записи на первый разговор с нашими экспертами. Будем рады сотрудничеству с Вами в Вашем проекте.
            </p>
            <p class="item2" v-if="this.$store.state.language == 'en'"><span style="font-size: 27px;">W</span>e work with you to bring your existing or newly established company to peak performance. Let us help you discover new possibilities and opportunities by optimising your processes and tax issues.
            </p>
            <p class="item3" v-if="this.$store.state.language == 'en'">
              Contact us and arrange a meeting with our experts. We look forward to your project.
            </p>
          </div>
        </div>


        <input
            type="button"
            value="Kontaktieren Sie uns!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
            v-if="this.$store.state.language == 'de'"
        />
        <a href="tel:+43 676 911 511 0">
          <input v-if="this.$store.state.language == 'de'" type="button" value="Rufen Sie uns an!" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
        <input
            type="button"
            value="Свяжитесь с нами!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
            v-if="this.$store.state.language == 'ru'"
        />
        <a href="tel:+43 676 911 511 0">
          <input v-if="this.$store.state.language == 'ru'" type="button" value="Позвоните нам!" class="inputButton2" style="-webkit-appearance: none;
       border-radius: 0;">
        </a>
        <input
            type="button"
            value="Contact us!"
            @click="changePath()"
            class="inputButton3"
            style="-webkit-appearance: none;
       border-radius: 0;"
            v-if="this.$store.state.language == 'en'"
        />
        <a href="tel:+43 676 911 511 0">
          <input v-if="this.$store.state.language == 'en'" type="button" value="Call us!" class="inputButton2" style="-webkit-appearance: none;
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
  margin-left: 15px;
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
  margin-top: -20px;
}

.item1 {
  width: 100%;
  list-style-type: none;
  font-size: 18px;
}

.item1 li::before {
  content: "■";
  color: #30375a;
  padding: 5px;
}

.item2 {
  width: 100%;
  text-align: justify;
  font-size: 18px;

}

.item3 {
  width: 100%;
  text-align: justify;
  font-size: 18px;

}


.footer {
  display: flex;
  flex-direction: column;

  font-size: 15px;
  position: static;
  bottom: 0px;
  margin-top: 150px;
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
  height: 1550px;
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
  top: 920px;
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
  top: 1000px;
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
  margin-top: 3vh;
}

.buttonDiv {
  display: flex;
  justify-content: space-between;
}

.contentDiv {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 80px;
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