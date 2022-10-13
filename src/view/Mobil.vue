<template>

  <div class="header">
    <h1>Mobil</h1>
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required>
        <label for="">Nama</label><br>
        <input type="text" v-model="form.nama" required><br>
        
          <label for="">Kapasitas Mesin</label><br>
          <input type="text" v-model="form.kmm" required><br>
          
            <label for="">Tahun Produksi </label><br>
             <input type="text" v-model="form.tp" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
        <button class="tom" type="submit" v-show="!updateSubmit"><i class="fas fa-check-circle"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="tom2" type="button" v-show="updateSubmit" @click="update(form)"><i class="fas fa-upload"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <table border="1" style="width:1100px" >
<tr>
  <th>Merk </th>
      <th>CC</th>
      <th>Tahun</th>
      <th>Gambar</th>
      <th>Action</th>
</tr>
    <tr v-for="ard in ards" :key="ard.id">
 
      <td>{{ard.nama}}</td> 
      <td>{{ard.kmm}}</td> 
      <td>{{ard.tp}}</td> 
      <td><img :src="ard.image" alt="" width="150"></td>
       <td> <button   class="icon" @click="edit(ard)"><i class="fas fa-edit"></i></button>|<button class="icon2" @click="del(ard)"><i class="fas fa-trash"></i></button></td>
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
    name: "Mobil",
 data(){
    return{
        form: {
          id: "",
          nama: "",
            kmm: "",
              tp: "",
                harga: "",
                image: "",
        },
        ards: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/ards').then(res => {
        this.ards = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/ards/', this.form).then(res => {
          this.load()
          this.form.nama = " ";
          this.form.kmm = " ";
          this.form.tp = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(ard){ 
        this.updateSubmit = true
        this.form.id = ard.id 
        this.form.nama = ard.nama 
         this.form.kmm = ard.kmm 
          this.form.tp = ard.tp 
           this.form.harga = ard.harga
             this.form.image = ard.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/ards/' + form.id , {nama: this.form.nama,kmm: this.form.kmm,tp: this.form.tp,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.nama = ''
         this.form.kmm = ''
          this.form.tp = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(ard){
      axios.delete('http://localhost:3000/ards/' + ard.id).then(res =>{
          this.load()
          let index = this.ards.indexOf(form.nama)
          this.ards.splice(index,1)
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




