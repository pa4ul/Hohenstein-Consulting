<script>
export default {
  data() {
    return {
      name: "Hello World!",
    };
  },
};
</script>

<template>
  <div class="mobileTopic">
    <div class="wrapper">
    <img src="@/assets/mobileBusiness.png" class="image" />
    <div class="mobileWhiteBox">
      <div class="mobileWhiteBoxContent">
        <p v-if="this.$store.state.language == 'ru'" class="header">Бизнес консалтинг</p>
        <p v-if="this.$store.state.language == 'ru'" class="slogan"> все, что нужно </p>
        <p v-if="this.$store.state.language == 'en'" class="header">Business Consulting</p>
        <p v-if="this.$store.state.language == 'en'" class="slogan">All it takes</p>
        <p v-if="this.$store.state.language == 'de'" class="header">Unternehmensberatung</p>
        <p v-if="this.$store.state.language == 'de'" class="slogan">Alles was Sie brauchen</p>
      </div>
      <img src="@/assets/arrow.png" class="mobileArrow" />
    </div>
    </div>
    
  </div>
</template>

<style scoped>
* {
  color: black;
  font-family: "Miller Display";
}
html {
  scroll-behavior: smooth;
}
.wrapper{
  padding:0px;
  top:300px;
  width: 100%;
  position: absolute;
}
.mobileTopic {
  display: flex;
  justify-content: center;
  
}
.image {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.mobileWhiteBox {
  position: absolute;
  height: 80px;
  width: 103%;
  left:-2%;
  background-color: white;
  bottom:0px;
}
.mobileWhiteBoxContent {
  position: absolute;
  right: 10px;
}
.header {
  font-size: 20px;
  margin-bottom: 0;
  margin-left: 5px;
  padding-right: 15px;
}
.slogan {
  margin-top: 0;
  padding-right: 15px;
  font-size: 11px;

  margin-left: 5px;
}
.mobileArrow {
  position: absolute;
  height: 15px;
  left: 0px;
  bottom: 34px;
  transform: rotate(90deg);
}
</style>