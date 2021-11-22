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
    <img src="@/assets/mobileRealEstate.png" class="image" />
    <div class="mobileWhiteBox">
      <div class="mobileWhiteBoxContent">
        <p v-if="this.$store.state.language == 'ru'" class="header">Недвижимость</p>
        <p v-if="this.$store.state.language == 'ru'" class="slogan">инвестиции и капитальные вложения </p>
        <p v-if="this.$store.state.language == 'en'" class="header">Real Estate</p>
        <p v-if="this.$store.state.language == 'en'" class="slogan">A Local Expert</p>
        <p v-if="this.$store.state.language == 'de'" class="header">Immobilien</p>
        <p v-if="this.$store.state.language == 'de'" class="slogan">Ein lokaler Experte</p>
     <img src="@/assets/arrow.png" class="mobileArrow">
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
.wrapper{
  padding:0px;
  width: 100%;
  top:600px;
  position: absolute;
}
html {
  scroll-behavior: smooth;
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
  vertical-align: middle;
}
.header {
  font-size: 21px;
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