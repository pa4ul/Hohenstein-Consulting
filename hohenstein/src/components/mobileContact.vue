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
      <p class="header"> Contact Us </p>
      <p class="text"> How can we help?</p>
      <form action="https://formsubmit.co/paulherbich1@gmail.com" method="post">
        <input name="Name" type="text" placeholder="Full name" class="inputName" />
        <br />
        <input name="E-Mail" type="text" placeholder="Your Email" class="inputEmail" />
        <br />
        <input name="Nachricht" type="text" placeholder="Message" class="inputText" />
        <br />
        <input type="submit" value="Submit" class="inputButton" />
      </form>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10636.210315711996!2d16.36620604147663!3d48.205603168378175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e6c60ca6f%3A0xa3afc3a3cb04134d!2sWeihburggasse%2022%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1635526907467!5m2!1sde!2sat" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" class="iframe"></iframe>
  </div>
</template>

<style scoped>
*{
  font-family: "Miller Display";
}
.iframe{
    position: absolute;
    top: 550px;
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
  top: 1600px;
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
  border-radius: 5px;
}
</style>