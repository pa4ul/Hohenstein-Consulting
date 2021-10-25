<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
  methods: {
    changePath: function () {
      this.$router.push({ path: '/contact' })
    }
  }
};
</script>

<template>
  <div>
    <router-link to="/">
      <div class="sidebar">
        <img
          class="arrowBack"
          src="@/assets/arrow.png"
          style="transform: rotate(90deg)"
        />
      </div>
    </router-link>
    <p class="category">
      <span style="font-family: 'Helvetica'"> / </span> Classic Cars
    </p>
    <p class="slogan">
      NOT JUST <br />
      A CAR
    </p>
    <img src="@/assets/car2.png" class="carimage" />
    <div class="contentDiv">
      <div class="firstText">
        <div class="blueStrike"></div>
        <p>
          <span style="font-size: 25px; color: #30375a">L</span> orem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </p>
      </div>
    
      <div class="secondText">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clitres et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div class="buttonDiv">
        <a href="tel:+43 676 911 511 0">
<input type="button" value="Call Us" class="inputButton" /></a>
       
        <input @click="changePath()" type="button" value="Contact Us" class="inputButton" />
        
        </div>
      </div>
      
    </div>
  </div>
</template>

<style >
.sidebar {
  position: fixed;
  height: 100%;
  left: 0px;
  top: 0px;
  width: 80px;
  padding: 0;
  margin: 0;
  background-color: #e3e5e6;
  z-index: 2;
}
.arrowBack {
  height: 13px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 25px;
}
.category {
  position: absolute;
  left: 150px;
  top: 50px;
  font-size: 20px;
  opacity: 70%;
}
.slogan {
  position: absolute;
  font-size: 50px;
  font-family: Montserrat;
  font-weight: bold;
  left: 10vw;
  top: 8vh;
  text-align: center;
  z-index: 2;
}
.carimage {
  position: absolute;
  width: 90%;
  top: 20vh;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
}
.blueStrike {
  position: absolute;
  height: 8px;
  width: 100px;
  background-color: #30375a;
}
.buttonDiv{
    display: flex;
    justify-content: space-between;
}
.contentDiv {
  height: 95vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}
.firstText {
  color: #30375a;
  width: 30vw;
  height: 25vh;
}
.secondText {
  color: #30375a;
  width: 30vw;
  height: 25vh;
}
.inputButton {
  width: 200px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0; 
}
@media only screen and (max-width: 1400px)  {

.carimage {
  position: absolute;
  width: 90%;
  max-height: 250px;
  top: 20vh;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
}
.inputButton {
  
  width: 130px;
  height: 40px;
  font-size: 15px;
  background-color: #30375a;
  color: white;
  border: 0;
  margin-bottom:50px;
}
}
</style>