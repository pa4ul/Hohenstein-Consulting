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
  <div :class="type ? 'webTopicc':'webTopic2b'">
    <div class="imageDiv"></div>
    <div class="whiteBox2">
      <p class="nameClass2">{{ this.name }}</p>
      <p class="sloganClass2">{{ this.slogan }}</p>
      <img class="arrow2" src="@/assets/arrow.png">
    </div>
    <img class="image2" :src="this.img" />
  </div>
</template>

<style>
*{
  color:black;
}
.webTopicc {
  position: absolute;
  height: 400px;
  width: 100%;
  transform: translateX(50%);
  right: 50%;
  top: 450px;
  
}
.webTopic2b {
  position: absolute;
  height: 400px;
  width: 100%;
  transform: translateX(50%);
  right: 50%;
  top: 1200px;
  
}
.whiteBox2 {
  position: absolute;
  height: 250px;
  width: 450px;
  background-color: white;
  transform: translateY(50%);
  bottom: 50%;
  right: 20%;
  z-index: 10;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;}
.image2 {
  height: 325px;
  position: absolute;
  left: 0;
  transform: translateY(50%);
  bottom: 50%;

}
.nameClass2{
  font-size: 35px;
  position: absolute;
  transform: translateY(50%);
  bottom: 50%;
  right:30px;
}
.sloganClass2{
  position: absolute;
  transform: translateY(50%);
   bottom: 40%;
   opacity: 70%;
   right:30px;
}
.arrow2{
  position: absolute;
  height:20px;
  transform:rotate(90deg);
  bottom: 50%;
  left:15px;
}
.whiteBox2::before,
.whiteBox2::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}


.whiteBox2::before{
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #30375a;
  border-right: 3px solid #30375a;
  transform: translate(-100%, 50%);
}

.whiteBox2::after{
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #30375a;
  border-left: 3px solid #30375a;
  transform: translate(100%, -50%)
}

.whiteBox2:hover:before,
.whiteBox2:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
</style>