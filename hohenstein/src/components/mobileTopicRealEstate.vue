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
    <img src="@/assets/mobileRealEstate.png" class="image" />
    <div class="mobileWhiteBox">
      <div class="mobileWhiteBoxContent">
        <p class="header">Real Estate</p>
        <p class="slogan">A Local Expert.</p>
     <img src="@/assets/arrow.png" class="mobileArrow">
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
.mobileTopic {
  display: flex;
  justify-content: center;
  position: absolute;
  top:600px;
}
.image {
  width: 100%;
  
}
.mobileWhiteBox {
  position: absolute;
  height: 120px;
  width: 300px;
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
  left: -1px;
}
.mobileWhiteBoxContent {
  vertical-align: middle;
}
.header {
  font-size: 27px;
  margin-bottom: 0;
  margin-left: 5px;
  padding-left:5px;
  margin-top:35px;
  border-left: 3px solid #30375a;
}
.slogan {
  margin-top: 0;
    padding-left:5px;
font-size:11px;

  border-left: 3px solid #30375a;
  margin-left: 5px;
}
.mobileArrow{
    position: absolute;
    height:15px;
    right:3px;
    bottom:50px;
    transform: rotate(270deg);
}
</style>