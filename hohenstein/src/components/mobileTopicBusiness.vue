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
        <p class="header">Business Consulting</p>
        <p class="slogan">Consulting is the secret to unlucking your vision.</p>
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
  font-size: 21px;
  margin-bottom: 0;
  margin-left: 5px;
  padding-right: 15px;
  border-right: 3px solid #30375a;
}
.slogan {
  margin-top: 0;
  padding-right: 15px;
  font-size: 11px;

  border-right: 3px solid #30375a;
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