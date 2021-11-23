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
  <div class="wrapper">
    <div class="footer">
      <p class="address">Rennweg 3, 1030 Wien</p>
      <p class="tel"><a href="tel:01 4230033">01 4230033</a></p>
      <p class="mail">office@hohenstein-consulting.at</p>
    </div>
    <div class="whiteLine"></div>
    <p class="center" style="margin-top: 30px">
      <router-link class="router-link" to="/team"> Team </router-link>
    </p>
    <router-link to="/impressum">
    <p class="center"> <router-link class="router-link" to="/impressum" v-if="this.$store.state.language == 'en'"> Imprint </router-link></p>
    <p class="center"> <router-link class="router-link" to="/impressum" v-if="this.$store.state.language == 'de'"> Impressum </router-link></p>
    <p class="center"> <router-link class="router-link" to="/impressum" v-if="this.$store.state.language == 'ru'"> Оттиск </router-link></p>
    <br />
    </router-link>
    <img src="@/assets/HohensteinWhite.png" class="logo center" />
  </div>
</template>

<style scoped>
* {
  color: white;
  font-weight:bold;
}
a{
  text-decoration: none;
}
.tel {
  margin-left: 50px;
  margin-right: 50px;
}
.whiteLine {
  position: absolute;
  height: 2px;
  margin-top: 10px;

  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  background-color: white;
}
.wrapper {
  height: 360px;
  background-color: #30375a;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  padding-bottom: 40px;
}
.footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:5px;
}
.logo {
  width: 70%;
  bottom: 10px;

  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
.router-link {
  color: white;
  text-decoration: none;
}
.center {
  text-align: center;
}
</style>