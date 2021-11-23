<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
};
</script>

<template>
<div>
  <div class="div">
    <div class="textBox">
      <p class="Headline" v-if="this.$store.state.language == 'en'">Contact Us</p>
      <p class="text" v-if="this.$store.state.language == 'en'">How can we help?</p>
      <p class="Headline" v-if="this.$store.state.language == 'de'">Kontaktieren Sie uns</p>
      <p class="text" v-if="this.$store.state.language == 'de'">Wie können wir helfen?</p>
      <p class="Headline" v-if="this.$store.state.language == 'ru'">Свяжитесь с нами!</p>
      <p class="text" v-if="this.$store.state.language == 'ru'">Как мы можем помочь?</p>
      <form v-if="this.$store.state.language == 'en'" action="https://formsubmit.co/office@hohenstein-consulting.at" method="post">
        <input type="text" placeholder="Full name" class="inputName" />
        <br />
        <input type="text" placeholder="Your E-Mail" class="inputEmail" />
        <br />
        <input type="text" placeholder="Message" class="inputText" />
        <br />
        <input type="submit" value="Submit" class="inputButton" />
      </form>
      <form v-if="this.$store.state.language == 'ru'" action="https://formsubmit.co/office@hohenstein-consulting.at" method="post">
        <input type="text" placeholder="Полное имя" class="inputName" />
        <br />
        <input type="text" placeholder="Ваш e-mail" class="inputEmail" />
        <br />
        <input type="text" placeholder="Сообщение" class="inputText" />
        <br />
        <input type="submit" value="Отправить" class="inputButton" />
      </form>
      <form v-if="this.$store.state.language == 'de'" action="https://formsubmit.co/office@hohenstein-consulting.at" method="post">
        <input type="text" placeholder="Ganzer Name" class="inputName" />
        <br />
        <input type="text" placeholder="Deine E-Mail" class="inputEmail" />
        <br />
        <input type="text" placeholder="Nachricht" class="inputText" />
        <br />
        <input type="submit" value="Submit" class="inputButton" />
      </form>
    </div>
    
  </div>
  <div class="maps">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4457262017168!2d16.375373615651174!3d48.19802997922831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0779ed2e7fcf%3A0xf7a713c48a91a7ce!2sPalais%20Hoyos!5e0!3m2!1sde!2sat!4v1637581158376!5m2!1sde!2sat"
        width="700"
        height="450"
        style="border: 0; z-index: 10"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
  </div>
  <footer class="footer">
        <ul>
          <li style="float: left;"><a href="mailto:office@hohenstein-consulting.at">office@hohenstein-consulting.at</a></li>
          <li style="float: left;"><a href="tel:01 4230033">01 4230033</a></li>
          <img
            src="@/assets/HohensteinWhite.png"
            class="hohenSteinLogoText"
          />
          <router-link to="/team"> <li style="float:right"><a>Team</a></li></router-link>
          <router-link v-if="this.$store.state.language == 'en'" to="/impressum"><li style="float:right;"><a>Imprint</a></li></router-link>
          <router-link v-if="this.$store.state.language == 'ru'" to="/impressum"><li style="float:right;"><a>Оттиск</a></li></router-link>
          <router-link v-if="this.$store.state.language == 'de'" to="/impressum"><li style="float:right;"><a>Impressum</a></li></router-link>
          <li style="float:right;"><a>Rennweg 3, 1030 Wien </a></li>
        </ul>
    </footer>
</div>
</template>

<style scoped>
* {
  font-family: "Miller Display";
}
html {
  scroll-behavior: smooth;
}
a{
  color:white;
  text-decoration: none;
}
.div {
  position: absolute;
  top: 1700px;
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
  width: 416px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
.maps {
  position: absolute;
  top: 1750px;
  right:0px;
}
.footer{
  font-size: 16px;
  position: absolute;
  bottom:0px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 100%;
  padding-top:10px;
  padding-bottom:15px;
  background-color:#30375a;
  
}
.hohenSteinLogoText{
    position: absolute;
  height: 100px;
  left: 50%;
  transform: translate(-50%, -20%);
}
ul {
  list-style-type: none;
  padding: 0;
  
  text-align: center;
}
li {
  display: inline;
  margin: 2%;
  color:white;
}
@media only screen and (max-width: 1350px)  {

iframe{
  height: 450px;
  width: 550px;
}
.footer{
  font-size: 15px;
  position: absolute;
  bottom:0px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 100%;
  padding-top:10px;
  padding-bottom:15px;
  
}
.hohenSteinLogoText{
    position: absolute;
  height: 90px;
  left: 50%;
  transform: translate(-50%, -20%);
}
ul {
  list-style-type: none;
  padding: 0;
  
  text-align: center;
}
li {
  display: inline;
  margin: 2%;
}
}
@media only screen and (max-width: 1100px)  {

iframe{
  height: 450px;
  width: 350px;
}
.footer{
  font-size: 13px;
  position: absolute;
  bottom:0px;
  border: 1px solid black;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 100%;
  padding-top:10px;
  padding-bottom:15px;
  
}
.hohenSteinLogoText{
    position: absolute;
  height: 70px;
  left: 50%;
  transform: translate(-50%, -20%);
}
ul {
  list-style-type: none;
  padding: 0;
  
  text-align: center;
}
li {
  display: inline;
  margin: 2%;
}
}
</style>