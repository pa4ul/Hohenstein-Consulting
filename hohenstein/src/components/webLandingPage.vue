<script>
import webTopicRight from "@/components/webTopicRight.vue";
import webTopicLeft from "@/components/webTopicLeft.vue";

export default {
  data() {
    return {
      name: "Hello World!",
    };
  },

  components: {
    webTopicRight,
    webTopicLeft,
  },
};
</script>

<template>
  <div class="masterDiv">
    <div class="landingPage">
      <nav>
        <ul>
          <li ><a>Financial Advise</a></li>
          <li><a>Real Estate</a></li>
          <li><a>Classic Cars</a></li>
          <li><a>Business Consulting</a></li>
          <li><a>DE / EN / RU</a></li>
        </ul>
      </nav>
      <div>
        <img src="@/assets/imageLandingpage.jpg" class="landingPageImage" />
        <div class="whiteBox1">
          <img
            src="@/assets/HohensteinLogoText.png"
            class="hohenSteinLogoText"
          />
          <p class="whiteBox1Slogan">Making Your Ideas Come True</p>
          <div class="whiteBox1BlueLine"></div>
        </div>
      </div>
      <a href="#content">
        <img src="@/assets/arrow.png" class="landingPageArrow" />
      </a>
    </div>
    <div class="content" id="content">
      <webTopicRight
        :name="'Classic Cars'"
        :slogan="'What a Luxury Car Should Be.'"
        :img="require('@/assets/car1.png')"
        :type="true"
      />

      <webTopicLeft
        :name="'Business Consulting'"
        :slogan="'Consulting is the secret to unlocking your vision.'"
        :img="require('@/assets/businessImage.png')"
        :type="true"
      />

       <webTopicRight
        :name="'Real Estate'"
        :slogan="'A Local Expert.'"
        :img="require('@/assets/house1.png')"
        :type="false"
      /> 

<webTopicLeft
        :name="'Financial Advise'"
        :slogan="'Live comfortably and better.'"
        :img="require('@/assets/financeImage.png')"
        :type="false"
      />
      
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
  font-size: 20px;
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
  background-color: white;
}
.landingPageImage {
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 0;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.whiteBox1 {
  position: absolute;
  height: 50%;
  width: 500px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  right: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.hohenSteinLogoText {
  height: 200px;
  top: 15%;
  left: 0%;
  position: absolute;
}
.whiteBox1BlueLine {
  position: absolute;
  top: 50%;
  right: -15%;
  height: 8px;
  width: 150px;
  background-color: #30375a;
}
.whiteBox1Slogan {
  transform: translate(-8%, 1050%);
  letter-spacing: 1px;
  opacity: 70%;
  font-size: 20px;
}
.landingPageArrow {
  position: absolute;
  height: 20px;
  left: 15%;
  bottom: 20px;
}
@media only screen and (max-width: 1500px) {
  .landingPageImage {
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right: 0;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.whiteBox1 {
  position: absolute;
  height: 40%;
  width: 450px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  right: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.hohenSteinLogoText {
  height: 160px;
  top: 15%;
  left: 0%;
  position: absolute;
}
.whiteBox1BlueLine {
  position: absolute;
  top: 50%;
  right: -15%;
  height: 6px;
  width: 150px;
  background-color: #30375a;
}
.whiteBox1Slogan {
  transform: translate(-12%, 1050%);
  letter-spacing: 1px;
  opacity: 70%;
  font-size: 15px;
}
}
.f::before,
.f::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}


.f::before{
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #30375a;
  border-right: 3px solid #30375a;
  transform: translate(-100%, 50%);
}

.f::after{
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #30375a;
  border-left: 3px solid #30375a;
  transform: translate(100%, -50%)
}

.f:hover:before,
.f:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
</style>