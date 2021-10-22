<script>
export default {
  data() {
    return {
      na9me: 'Hello World!'
    }
  },
  props: {
  name: String,
  slogan: String
}
}
</script>

<template>
  <div class="webTopic">
  <div class="imageDiv">
  </div>
  <div class="whiteBox">
      <p> {{ this.name }} </p>
      <p> {{ this.slogan }} </p>
  </div>
  </div>
</template>

<style>
.webTopic {
  position: absolute;
  height: 400px;
  width: 100%;
  transform: translateX(50%);
  right:50%;
  top: 80px;
  background-color:red;
}
.whiteBox{
    position: absolute;
    height: 250px;
    width: 750px;
    background-color: orange;
    transform: translateY(50%);
    bottom:50%;
}
</style>