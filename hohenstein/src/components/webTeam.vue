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
      <div class="wrapper1">
        <nav class="nav">
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
        <div class="content">
          <div class="item1">
            <p> Jahrzehnte lange Praxiserfahrung bündelt sich zu einem Netzwerk, welches sensationelle Lösungen für
              jegliche Anwendungen schafft. Unser Team berät Sie gerne und geht auf Ihren Fall ernsthaft ein. Etliche
              zufriedene Kunden bestätigen den Erfolg unseres Teams.</p>
          </div>
          <div class="item2">
            <div class="person1">
              <img src="@/assets/steiningerCut_compressed.png" class="imageTeam"/>
              <div class="person1Banner">
                <p class="person1text">Gerald Steininger, MBA</p>
                <p class="person1text"><a href="tel:+436769115110" style="text-decoration:none;color:white;">+43 676 911
                  511 0 </a></p>
                <p class="person1text"><a style="color:white" href="mailto:gerald.steininger@hohenstein-consulting.at">gerald.steininger@hohenstein-consulting.at </a>
                </p>
              </div>
            </div>
            <div class="person2">
              <img src="@/assets/chalupaCut_compressed.png" class="imageTeam"/>
              <div class="person1Banner">

                <p class="person1text">Boris Chalupa</p>
                <p class="person1text"><a href="tel:+436608106408" style="text-decoration:none;color:white;">+43 660 810
                  6408</a></p>
                <p class="person1text"><a style="color:white" href="mailto:boris.chalupa@hohenstein-consulting.at">
                  boris.chalupa@hohenstein-consulting.at</a></p>
              </div>
            </div>
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
            <li class="li" style="float:right;"><a>Imprint</a></li>
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
          <img src="@/assets/HohensteinWhite.png" class="sliderImage"/>
        </Slide>
      </div>
      <p class="slogan">team</p>
      <p class="text">Jahrzehnte lange Praxiserfahrung bündelt sich zu einem Netzwerk, welches sensationelle Lösungen
        für jegliche Anwendungen schafft. <br/><br/> Unser Team berät Sie gerne und geht auf Ihren Fall ernsthaft ein.
        Etliche zufriedene Kunden bestätigen den Erfolg unseres Teams.</p>
      <div class="mobileContent">

        <div class="person1mobile">
          <img src="@/assets/Steininger2_compressed.jpg" class="mobileImageTeam"/>
          <p class="person1text">Gerald Steininger, MBA</p>
          <a href="tel:+436769115110" style="text-decoration:none;"><p class="person1text">+43 676 911 511 0</p></a>
          <a style="color:white" href="mailto:gerald.steininger@hohenstein-consulting.at"><p class="person1text">
            gerald.steininger@hohenstein-consulting.at</p></a>
        </div>
        <div class="person2mobile">
          <img src="@/assets/Chalupa2_compressed.jpg" class="mobileImageTeam"/>
          <p class="person1text">Boris Chalupa</p>
          <a href="tel:+436608106408" style="text-decoration:none;"><p class="person1text">+43 660 8106 408</p></a>
          <a style="color:white" href="mailto:boris.chalupa@hohenstein-consulting.at"><p class="person1text">
            boris.chalupa@hohenstein-consulting.at</p></a>

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
.imageTeam{
  height: 150px;
  margin:-5px;
}
.person1{
  margin:10px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person2{
  margin:10px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person1:hover {
  transform: translateX(0px) scale(1.05);
}

.person2:hover {
  transform: translateX(0px) scale(1.05);
}
.person1Banner {
  background-color: #30375a;
  height: 80px;
  padding:10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.content {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  margin-left: 80px;
  height:120vh;
  gap:20px;
}

.item1 {
  margin-top:40px;
  width: 60%;
  padding:10px;
  background-color: #e3e5e6;

}

.item2 {
  width: 70%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.nav {
  position: fixed;
  left: calc(50% + 40px);
  transform: translateX(-50%);
  z-index: 999999999;
  background-color: white;
  top: 0;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;
  width: calc(75% - 13px);
}

ul {
  list-style-type: none;
  margin-top: 40px;
  padding: 0;

}

li:hover {
  cursor: pointer;
}

.nav li {
  display: inline;
  margin: 3%;
}

.footer {
  font-size: 15px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  background-color: #30375a;
  height: 90px;

  padding-top: 10px;
  padding-bottom: 15px;
  margin-left:80px;
}


footer ul li a {
  color: white;
}

.ul {
  list-style-type: none;
  padding: 0;

  text-align: center;
}

.hohenSteinLogoText {
  height: 100px;
  margin:-40px;

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

.slogan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70px;
  font-size: 20px;
  opacity: 70%;
}

.mobileContent {
  position: absolute;
  background-color: white;
  width: 90%;

  height: 1250px;
  left: 50%;
  top: 340px;
  transform: translateX(-50%);
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

.languageSelection {
  position: absolute;
  font-size: 20px;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
}

.text {

  text-align: center;
  position: absolute;
  padding-left: 40px;
  padding-right: 40px;
  top: 140px;
  font-weight: bold;
  text-align: justify;
}

.backButton {
  position: absolute;
  left: 15px;
  height: 12px;
  top: 35px;
  transform: rotate(90deg);
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


.person1text {
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 4px;
}


.arrowBack {
  height: 13px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 25px;
}


.mobileImageTeam {
  width: 290px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 125px;
}


@media only screen and (max-width: 1250px) {

  .nav li {
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
}

@media only screen and (max-width: 1100px), screen and (max-height: 600px) {
  .person1text {
    color: white;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    font-size: 12px;
  }


  .nav a {
    font-size: 13px;
    margin: 0;
  }

  footer a {
    font-size: 12px;
  }
}
</style>