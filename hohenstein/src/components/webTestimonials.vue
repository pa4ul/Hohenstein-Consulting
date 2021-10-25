<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
};
</script>

<template>
  <div class="testimonials">
    <p class="slogan2">Testimonials</p>
    <p class="text">What Our Clients Say</p>
    <div class="firstQuote">
      <p class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna. 
        <br /> 
        <br />
        <span style="font-family: 'Montserrat';">  Dr. Friedrich Gauß  </span>
      </p>
    </div>
    <div class="secondQuote">
      <p class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna. 
        <br /> 
        <br />
        <span style="font-family: 'Montserrat';">  MMag. Christine Spangel, MSc  </span>
      </p>
    </div>
    <div class="thirdQuote">
      <p class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna. 
        <br /> 
        <br />
        <span style="font-family: 'Montserrat';">  Ing. Richard Wagner, PhD   </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  position: absolute;
  top: 1700px;
  background-color: white;
  height: 700px;
  width: 100%;
}
.slogan2 {
  font-size: 17px;
  opacity: 70%;
text-align: center;
}
.text {
  font-size: 40px;
  letter-spacing: 1px;
    text-align: center;

}
.firstQuote {
  background-color: #e3e5e6;
  height: 200px;
  width: 60%;
  text-align: center;
  display: flex;
  align-items: center;

  flex-wrap: wrap;
}
.secondQuote {
 position: absolute;
 right:0;
margin-top: 50px;
  background-color: #e3e5e6;
  height: 200px;
  width: 60%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
.thirdQuote {
margin-top: 300px;
  background-color: #e3e5e6;
  height: 200px;
  width: 60%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
.content {
  margin-left: 30px;
  margin-right: 30px;
  opacity: 80%;
}
</style>