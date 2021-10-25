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
  <div class="bigDiv">
    <router-link to="/"> 
    <div class="sidebar">

      <img class="arrowBack" src="@/assets/arrow.png" style="transform: rotate(90deg);">
    </div>
    </router-link>
    <div class="content">
      <p class="category">
        <span style="font-family: 'Helvetica'"> / </span> Team
      </p>
      <p class="header">The Team</p>
      <div class="teamBox">
        <div class="person1">
          <p class="person1text">
            Dr. Max Mustermann <br /><br />
            Finanzierungsberatung
          </p>
        </div>
        <div class="person2">
          <p class="person2text">
            Danas Baum, MSc <br /><br />
            Consulting
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Miller Display";
}

.sidebar {
  position: absolute;
  height: 100vh;
  left: 0px;
  top: 0px;
  width: 80px;
  padding: 0;
  margin: 0;
  background-color: #e3e5e6;
}
.category {
  position: absolute;
  left: 150px;
  top: 50px;
  font-size: 20px;
  opacity: 70%;
}
.header {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
  font-size: 40px;
  border-bottom: 5px solid #30375a;
}
.teamBox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 500px;
  background-color: #e3e5e6;
}
.person1 {
  position: absolute;
  height: 100px;
  width: 250px;
  background-color: #30375a;
  left: 30px;
  bottom: 30px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.person2 {
  position: absolute;
  height: 100px;
  width: 250px;
  background-color: #30375a;
  left: 320px;
  bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.person1text{
  color:white;
  text-align: center;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.person2text{
  color:white;
  text-align: center;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  
}
.arrowBack{
  height: 13px;
  position: absolute;
  top:50%;
  transform: translate(-50%);
  left:25px;
  
  
}
@media only screen and (max-width: 1550px),screen and (max-height: 850px)  {
.teamBox {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 400px;
  max-height: 50%;
  background-color: #e3e5e6;
}
.header {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
  font-size: 40px;
  border-bottom: 5px solid #30375a;
}
}
</style>