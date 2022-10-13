<template>

  <div class="header">
    <h1>Pesawat</h1>
    <h1>project</h1>
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id " required>
        <label for="">Nama Pesawat</label><br>
        <input type="text" v-model="form.nama" required><br>
        
          <label for="">Tipe</label><br>
          <input type="text" v-model="form.bb" required><br>
          
            <label for="">Kapasitas Penumpang</label><br>
             <input type="text" v-model="form.kpp" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
       
 
 
<button class="tom" type="submit" v-show="!updateSubmit"><i class="fas fa-check-circle"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="tom2" type="button" v-show="updateSubmit" @click="update(form)"><i class="fas fa-upload"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <table border="1" style="width:1100px" >
<tr>
  <th>Nama</th>
      <th>Tipe </th>
      <th>Kapasitas</th>
      <th>Gambar</th>
      <th>Action</th>
</tr>
    <tr v-for="star in stars" :key="star.id">
 
      <td>{{star.nama}}</td> 
      <td>{{star.bb}}</td> 
      <td>{{star.kpp}}</td> 
      <td><img :src="star.image" alt="" width="150"></td>
       <td> <button   class="icon" @click="edit(star)"><i class="fas fa-edit"></i></button> 
      |  <button   class="icon2" @click="del(star)"><i class="fas fa-trash"></i></button></td>
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: "Pesawat",
 data(){
    return{
        form: {
          id: "",
          nama: "",
            bb: "",
              kpp: "",
                harga: "",
                image: "",
        },
        stars: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/stars').then(res => {
        this.stars = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/stars/', this.form).then(res => {
          this.load()
          this.form.nama = " ";
          this.form.bb = " ";
          this.form.kpp = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(star){ 
        this.updateSubmit = true
        this.form.id = star.id 
        this.form.nama = star.nama 
         this.form.bb = star.bb 
          this.form.kpp = star.kpp 
           this.form.harga = star.harga
             this.form.image = star.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/stars/' + form.id , {nama: this.form.nama,bb: this.form.bb,kpp: this.form.kpp,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.nama = ''
         this.form.bb = ''
          this.form.kpp = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(star){
      axios.delete('http://localhost:3000/stars/' + star.id).then(res =>{
          this.load()
          let index = this.stars.indexOf(form.nama)
          this.stars.splice(index,1)
      })
    }
  }
}
  
  
</script>

<style scoped>
.header{
  text-align: center;
color: white;
margin-left: auto;
}
button{
    background-color: none;
}

.icon{
  background-color: lime;
  color: aliceblue;
}
.icon:hover{
  background-color: aliceblue;
  color:lime ;
}
.icon2{
  background-color: red;
  color: white;
}
.icon2:hover{
  background-color: white;
  color: red;
}

.tom {
  background-color: white;
  color: lightsteelblue;
  
}

.tom :hover{
  background-color: white;
  color: lime;
}
.tom2 {
  background-color: white;
  color: lightsteelblue;
  
}

.tom2 :hover{
  background-color: white;
  color: lime;
}
</style>




