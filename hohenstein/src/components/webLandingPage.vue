<script>
import webTopicRight from '@/components/webTopicRight.vue'
export default {
  data() {
    return {
      name: 'Hello World!'
    }
  },
  
  components: {
    webTopicRight
  },
};
</script>

<template>
  <div class="masterDiv">
    <div class="landingPage">
      <nav>
        <ul>
          <li><a>Financial Advise</a></li>
          <li><a>Real Estate</a></li>
          <li><a>Classic Cars</a></li>
          <li><a>Business Consulting</a></li>
          <li><a>DE / EN / RU</a></li>
        </ul>
      </nav>
      <div class="">
        <img src="@/assets/mansion2.jpg" class="landingPageImage" />
        <div class="whiteBox1">
          <img
            src="@/assets/HohensteinLogoText.png"
            class="hohenSteinLogoText"
          />
          <p class="whiteBox1Slogan">Making Your Ideas Come True</p>
          <div class="whiteBox1BlueLine"></div>
        </div>
      </div>
   <a href="#content"> <img src="@/assets/arrow.png" class="landingPageArrow"> </a>
    </div>
    <div class="content" id="content">
      <webTopicRight :name="'Classic Cars'" :slogan="'What a Luxury Car Should Be'"/>
      
    </div>
  </div>
</template>

<style>
@import url(//db.onlinewebfonts.com/c/1fdf9a4d690c4e7271e535c39f40045f?family=Miller+Display);
* {
  font-family: "Miller Display";
}
html {
  scroll-behavior: smooth;
 }

.landingPage {
  position: absolute;
  top: 0;
  width: 90%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
 
}
nav {
  font-size:20px;
  position: absolute;
  top: 0;
  text-align: center;
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  height: 90px;
  width: 100%;
}
ul {
  list-style-type: none;
  margin-top: 40px;
  padding: 0;
}
li {
  display: inline;
  margin: 4%;
}
.content {
  height: 1400px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  position: absolute;
  top: 100%;
  background-color: gray;
}
.landingPageImage {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 950px;
}
.whiteBox1 {
  position: absolute;
  height: 450px;
  width: 500px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  right: 700px;
}
.hohenSteinLogoText {
  height: 200px;
  transform: translate(-60%, 35%);
  
  position: absolute;
}
.whiteBox1BlueLine {
  position: absolute;
  top: 50%;
  right: -75px;
  height: 8px;
  width: 150px;
  background-color: #30375a;
}
.whiteBox1Slogan {
  transform: translate(-8%,260px);
  letter-spacing: 1px;
  opacity: 70%;
  font-size: 20px;
}
.landingPageArrow{
  position: absolute;
  height: 20px;
  left: 15%;
  bottom: 20px;

}
</style>