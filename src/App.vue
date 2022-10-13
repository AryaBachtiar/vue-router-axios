<template>

<div class="nav3">
   <h1>Trasnportasi</h1>
   <p>Kendaraan yang masih sering digunakan</p>
<div class="nav4">
 <img class="satu" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/global-information-logo-design-template-24aa8177ef06a0f0f5236f850a4cc01c_screen.jpg?ts=1585148420" alt="">

  </div>

<div class="nav1">
  <NavComp/>
<router-view/>
</div>
</div>
</template>

<script>
import NavComp from './components/NavbarComponen.vue';

export default {
  components: {
    NavComp
  }
}
</script>

<style scoped>
.nav1{
  display: flex;
 
}

.nav1{
  display: flex;
background-image: url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg);
  color: white;
}

.nav3{
 
text-align: center;
padding-top: 25px;
 border-bottom: 3px solid;
font-size: 25px;
color: white;
font-family: 'comic sans ms';

background-image: url(https://image.winudf.com/v2/image/Y29tLnBhc3RvcmUuYmxhY2suYmFja2dyb3VuZC53YWxscGFwZXJfc2NyZWVuc2hvdHNfMF9mZDM3Mzdi/screen-0.jpg?fakeurl=1&type=.webp);

}

.satu{
  display: flex;
  width: 10%;


}

.nav4{
 
text-align: center;

 border-bottom: 3px solid;
font-size: 15px;
border-bottom:2px solid ;
background-image: url(https://image.winudf.com/v2/image/Y29tLnBhc3RvcmUuYmxhY2suYmFja2dyb3VuZC53YWxscGFwZXJfc2NyZWVuc2hvdHNfMF9mZDM3Mzdi/screen-0.jpg?fakeurl=1&type=.webp);
border-bottom:2px solid ;
}
</style>
