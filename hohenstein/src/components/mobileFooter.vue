<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <div class="footer"> 
      <p> Office@hohenstein-consulting.at </p>
      <p> +43 123 456 7890 </p>
      <p> Weihburggasse 22/5 1010 Wien</p>
      <p> <span style="padding:10px;"> Team  </span> <span style="padding:10px;"> Imprint </span> </p>
        <img src="@/assets/HohensteinLogoText.png" class="logo"/>
  </div>
</template>

<style scoped>
.footer {
    border-top: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  position: absolute;
  width: 100%;
  bottom: 10px;
}
.logo{
    width: 70%;
}
</style>