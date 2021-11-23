<script>
export default {
  data() {
    return {
      na9me: "Hello World!",
    };
  },
  props: {
    name: String,
    slogan: String,
    img: String,
    type: Boolean
  },
};
</script>

<template>
  <div :class="type ? 'webTopic':'webTopic2'">
    <div class="imageDiv"></div>
    <div class="whiteBox">
      <p class="nameClass">{{ this.name }}</p>
      <p class="sloganClass">{{ this.slogan }}</p>
      <img class="arrow" src="@/assets/arrow.png">
    </div>
    <img class="image" :src="this.img" />
  </div>
</template>

<style scoped>
*{
  color:black;
  font-family: "Miller Display";
}
html {
  scroll-behavior: smooth;
}
.webTopic {
  position: absolute;
  height: 400px;
  width: 100%;
  transform: translateX(50%);
  right: 50%;
  top: 80px;
}
.webTopic2 {
  position: absolute;
  height: 400px;
  width: 100%;
  transform: translateX(50%);
  right: 50%;
  top: 825px;
  
}
.whiteBox {
  position: absolute;
  height: 250px;
  width: 650px;
  background-color: white;
  transform: translateY(50%);
  bottom: 50%;
  left: 0;
  z-index: 10;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;}
.image {
  height: 325px;
  position: absolute;
  right: 0;
  transform: translateY(50%);
  bottom: 50%;
}
.nameClass{
  font-size: 35px;
  position: absolute;
  transform: translateY(50%);
  bottom: 50%;
  left:30px;
}
.sloganClass{
  position: absolute;
  transform: translateY(50%);
   bottom: 40%;
  color:#808080;
   left:30px;
}
.arrow{
  position: absolute;
  height:20px;
  transform:rotate(270deg);
  bottom: 50%;
  right:15px;
}
.whiteBox::before,
.whiteBox::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}


.whiteBox::before{
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #30375a;
  border-right: 3px solid #30375a;
  transform: translate(-100%, 50%);
}

.whiteBox::after{
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #30375a;
  border-left: 3px solid #30375a;
  transform: translate(100%, -50%)
}

.whiteBox:hover:before,
.whiteBox:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

</style>