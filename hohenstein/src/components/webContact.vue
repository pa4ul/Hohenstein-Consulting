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
  <div>
 <router-link to="/">
      <div class="sidebar">
        <img
          class="arrowBack"
          src="@/assets/arrow.png"
          style="transform: rotate(90deg)"
        />
      </div>
      <p class="category" style="z-index:100;">
      <span style="font-family: 'Helvetica'"> / </span> Contact
    </p>
    </router-link>
    <div class="div">
    <div class="textBox">
      <p class="Headline">Contact Us</p>
      <p class="text">How can we help?</p>
      <form>
        <input type="text" placeholder="Full name" class="inputName" />
        <br />
        <input type="text" placeholder="Your Email" class="inputEmail" />
        <br />
        <input type="text" placeholder="Message" class="inputText" />
        <br />
        <input type="button" value="Submit" class="inputButton" />
      </form>
    </div>
    
  </div>
  <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0531195811523!2d16.37277211569394!3d48.20559275440027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e6c60ca6f%3A0xa3afc3a3cb04134d!2sWeihburggasse%2022%2C%201010%20Wien!5e0!3m2!1sde!2sat!4v1635066761214!5m2!1sde!2sat"
        width="700"
        height="450"
        style="border: 0; z-index: 10"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
input{
    border:0.5px solid black;
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
.div {
  position: absolute;
  left: 150px;
  top:50%;
  transform: translateY(-50%);
  z-index:1;
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
  width: 413px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
}
.maps {
  position: absolute;
top:50%;
  transform: translateY(-50%);
  right:150px;
}
</style>