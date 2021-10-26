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
    },
  },
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
      <span style="font-family: 'Helvetica'"> / </span> Financial Advise
    </p>
    <p class="slog3an">
      ALL IT <br />
      TAKES
    </p>
    <img src="@/assets/financeImage.png" class="carimage" />
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
        <a href="tel:+43 676 911 511 0" class="btn btn3">Call Us</a>
       
        
        <a href="" class="btn btn3" @click="changePath()">Contact Us</a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
a{
  text-decoration: none;
  text-align: center;
}
.btn{
  position: relative;
  display: block;
  color: black;
  font-size: 15px;
  font-family: "montserrat";
  text-decoration: none;
  border: 1px solid black;
  width: 200px;
  height: 40px;
  padding-top:15px;
  text-transform: uppercase;
  
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before{
  background: #30375a;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
}
.btn:hover{
  color:white;
}

.btn3::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(45deg);
}
.btn3:hover::before{
  height: 450%;
}
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
.slog3an {
  position: absolute;
  font-size: 50px;
  font-family: Montserrat;
  font-weight: bold;
  left: 12vw;
  top: 8vh;
  text-align: center;
  z-index: 2;
}
.carimage {
  position: absolute;
  max-width: 90%;
  height: 40%;
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

@media only screen and (max-width: 1400px) and (max-height: 750px) {

.btn{
  position: relative;
  display: block;
  color: black;
  font-size: 15px;
  font-family: "montserrat";
  text-decoration: none;
  border: 1px solid black;
  width: 130px;
  height: 40px;
  padding-top:15px;
  text-transform: uppercase;
  margin-bottom:50px;
  overflow: hidden;
  transition: 1s all ease;
}
}
</style>