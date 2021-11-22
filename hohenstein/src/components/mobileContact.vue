<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <div class="contact">
      <p class="header" v-if="this.$store.state.language == 'de'"> Kontaktiere uns! </p>
      <p class="text" v-if="this.$store.state.language == 'de'"> Wie können wir helfen?</p>
    <p class="header" v-if="this.$store.state.language == 'en'"> Contact Us </p>
    <p class="text" v-if="this.$store.state.language == 'en'"> How can we help?</p>
    <p class="header" v-if="this.$store.state.language == 'ru'"> Связаться с нами! </p>
    <p class="text" v-if="this.$store.state.language == 'ru'"> Как мы можем помочь?</p>
      <form action="https://formsubmit.co/office@hohenstein-consulting.at" method="post">
        <input name="Name" type="text" placeholder="Name" class="inputName" />
        <br />
        <input name="E-Mail" type="text" placeholder="E-Mail" class="inputEmail" />
        <br />
        <input name="Nachricht" type="text" placeholder="Nachricht" class="inputText" v-if="this.$store.state.language == 'de'"/>
        <input name="Nachricht" type="text" placeholder="Message" class="inputText" v-if="this.$store.state.language == 'en'"/>
        <input name="Nachricht" type="text" placeholder="Сообщение" class="inputText" v-if="this.$store.state.language == 'ru'"/>
        <br />
        <input type="submit" value="Submit" class="inputButton" style="-webkit-appearance: none;
       border-radius: 0;"/>
      </form>
      <p class="partnerbuero" v-if="this.$store.state.language == 'en'"> our partner office</p>
    <p class="partnerbuero" v-if="this.$store.state.language == 'de'"> Unser Partnerbüro</p>
    <p class="partnerbuero" v-if="this.$store.state.language == 'ru'"> Наш партнерский офис</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4457262017168!2d16.375373615651174!3d48.19802997922831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0779ed2e7fcf%3A0xf7a713c48a91a7ce!2sPalais%20Hoyos!5e0!3m2!1sde!2sat!4v1637581158376!5m2!1sde!2sat" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" class="iframe"></iframe>
  </div>
</template>

<style scoped>
*{
  font-family: "Miller Display";
}
.iframe{
    position: absolute;
    top: 700px;
}
.partnerbuero{
  position: absolute;
  top:560px;
  text-align: center;
  width: 100%;
  font-size: 30px;
}
.header{
position: absolute;
  font-family: "Miller Display";
  font-size: 25px;
  border-bottom: 3px solid #30375a;
}
.text {
  position: absolute;
  top: 50px;
  font-size: 15px;
  opacity: 70%;
}
.contact {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: white;
  top: 1250px;
}
.inputName {
  border:1px solid #30375a;
  position: absolute;
  left: 0;
  top: 120px;
  box-sizing: border-box;
  width: 100%;
  margin:0px;
  padding:0;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}
.inputEmail {
  border:1px solid #30375a;
  position: absolute;
  left: 0;
  top: 180px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
}
.inputText {
  border:1px solid #30375a;
  position: absolute;
  left: 0;
  top: 240px;
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  font-size: 15px;
  padding-left: 10px;
}
.inputButton {
  position: absolute;
  left: 0;
  top: 460px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
 
}
</style>