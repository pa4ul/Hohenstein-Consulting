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
    <img src="@/assets/mobileBusiness.png" class="image" />
    <div class="mobileWhiteBox">
      <div class="mobileWhiteBoxContent">
        <p class="header">Business Consulting</p>
        <p class="slogan">Consulting is the secret to unlucking your vision.</p>
      </div>
           <img src="@/assets/arrow.png" class="mobileArrow">

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
.mobileTopic {
  display: flex;
  justify-content: center;
  position: absolute;
  top:300px;
}
.image {
  width: 100%;
  
}
.mobileWhiteBox {
  position: absolute;
  height: 150px;
  width: 300px;
  background-color: white;
  top: 41px;
  right: 0;
}
.mobileWhiteBoxContent {
   position: absolute;
   right:10px;
}
.header {
  font-size: 27px;
  margin-bottom: 0;
  margin-right: 5px;
  padding-right:5px;
  margin-top:45px;
  border-right: 3px solid #30375a;
}
.slogan {
  margin-top: 0;
    padding-right:5px;
font-size:11px;
  border-right: 3px solid #30375a;
  margin-right: 5px;
}
.mobileArrow{
    position: absolute;
    height:15px;
    left:0px;
    bottom:71px;
    transform: rotate(90deg);
}
</style>