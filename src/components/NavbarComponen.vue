<template>
  <div class="all">
    <ul>
      <li><router-link to="/">Motor</router-link></li>
      <li><router-link to="/about">Mobil</router-link></li>
      <li><router-link to="/detail">Kereta</router-link></li>
      <li><router-link to="/product">Kapal</router-link></li>
      <li><router-link to="/contact">Pesawat</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavComp",
};
</script>

<style scoped>

ul{
  width: 200px;
  list-style-type: none;
   border: 1px solid;
   margin: 0;
   padding: 0;
   text-align: center;
   position: fixed;
   padding-left: 10px;
  border:none;

}
li {
  /* line-height: 2; */
    padding: 12px 16px;
   
background-image: url(https://webneel.com/wallpaper/sites/default/files/images/08-2014/2-black-wallpaper-pattern.jpg);
    border: 1px solid;
    
}
li a{
 color: white;
  text-decoration: none;
}


</style>
