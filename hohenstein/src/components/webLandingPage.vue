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
<div class="masterDiv">
<div class="landingPage">
  <nav>
    <ul>
      <li><a>Financial Advise</a></li>
      <li><a>Real Estate</a></li>
      <li><a>Classic Cars</a></li>
      <li><a>Business Consulting</a></li>
      <li><a>DE/EN/RU</a></li>
    </ul>
  </nav>
  <div class=""> 
      <img src="@/assets/mansion2.jpg" class="landingPageImage">
  </div>
  </div>
  <div class="content">
        <p> hello</p>
  </div>
  
  </div>
</template>

<style>
*{
    font-family: Miller-Display;
}

.landingPage{
    position: absolute;
    top:0;
    width:90%;
    height: 100%;
    margin-left:5%;
    margin-right:5%;
    background-color:lightblue
}
nav{
    position: absolute;
    top: 0;
    text-align: center;
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    height: 80px;
    width: 100%;
}
ul{
    list-style-type: none;
    margin-top:30px;
    padding:0;
}
li{
    display:inline;
    margin:3%;
}
.content{
    background-color: lightcoral;
    height: 400px;
    position: absolute;
    top:100%;
}
.landingPageImage{
    position: absolute;
    top:20%;
    right:0;
    height: 500px;
}
</style>