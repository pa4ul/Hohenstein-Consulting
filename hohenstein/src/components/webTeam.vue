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
        <img
          class="arrowBack"
          src="@/assets/arrow.png"
          style="transform: rotate(90deg)"
        />
      </div>
    </router-link>
    <div class="content">
      <p class="category">
        <span style="font-family: 'Helvetica'"> / </span> Team
      </p>
      <p class="header">The Team</p>
      <div class="teamBox">
        <div class="person1">
          <img src="@/assets/aurel.png" class="imageTeam" />
          <p class="person1text">Gerald Steininger, MBA</p>
          <p class="person1text">+436769115110</p>
          <p class="person1text">Immobilienberatung, Unternehmensberatung</p>
        </div>
        <div class="person2">
          <p class="person1text">Boris Chalupa</p>
          <p class="person1text">+436608106408</p>
          <p class="person1text">Finanzberatung</p>
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
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.person2 {
  position: absolute;
  height: 125px;
  width: 300px;
  background-color: #30375a;
  left: 380px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
     transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.person1text {
  color: white;
  text-align: center;
  margin:4px;
}
.person2text {
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.arrowBack {
  height: 13px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 25px;
}
.imageTeam {
  width: 230px;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  bottom: 125px;
  
}
.person1:hover{
  transform: translateX(0px) scale(1.05);
}
.person2:hover{
  transform: translateX(0px) scale(1.05);
}
@media only screen and (max-width: 1550px), screen and (max-height: 850px) {
  .teamBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    min-width: 700px;
    height: 400px;
    min-height: 400px;
    max-height: 50%;
    background-color: #e3e5e6;
  }
  .header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    font-size: 40px;
    border-bottom: 5px solid #30375a;
  }
  .imageTeam {
  width: 190px;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  bottom: 125px;
}
}
</style>