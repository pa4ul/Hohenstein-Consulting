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
    <img src="@/assets/car1Cut.png" class="image" />
    <div class="mobileWhiteBox">
      <div class="mobileWhiteBoxContent">
        <p class="header" v-if="this.$store.state.language == 'en'">Classic Cars</p>
        <p class="slogan" v-if="this.$store.state.language == 'en'">What a Luxury Car Should Be.</p>
        <p class="header" v-if="this.$store.state.language == 'de'">Oldtimer</p>
        <p class="slogan" v-if="this.$store.state.language == 'de'">Was ein Luxusauto sein sollte.</p>
        <p class="header" v-if="this.$store.state.language == 'ru'">Винтажные автомобили</p>
        <p class="slogan" v-if="this.$store.state.language == 'ru'">это не просто машина</p>
        <img src="@/assets/arrow.png" class="mobileArrow" />
      </div>
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
  width: 100%;
  z-index: 1000000;
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

.header {
  font-size: 20px;
  margin-bottom: 0;
  margin-left: 5px;
  padding-left: 15px;
}
.slogan {
  margin-top: 0;
  padding-left: 15px;
  font-size: 11px;

  margin-left: 5px;
}
.mobileArrow {
  position: absolute;
  height: 15px;
  right: 3px;
  bottom: 34px;
  transform: rotate(270deg);
}
</style>