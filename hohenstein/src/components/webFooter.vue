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
  <footer class="footer">
        <ul>
          <li style="float: left;"><a>office@hohenstein-consulting.at</a></li>
          <li style="float: left;"><a>+43 650 123 4567</a></li>
          <img
            src="@/assets/HohensteinWhite.png"
            class="hohenSteinLogoText"
          />
          
          <router-link to="/team"> <li style="float:right"><a>Team</a></li></router-link>
          <li style="float:right;"><a>Imprint</a></li>
          <li style="float:right;"><a>Weihburggasse 22/5 1010 Wien </a></li> 
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