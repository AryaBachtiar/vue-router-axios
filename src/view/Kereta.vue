<template>

  <div class="header">
    <h1>Kereta</h1>
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id " required>
        <label for="">KA</label><br>
        <input type="text" v-model="form.nama" required><br>
        
          <label for="">Jenis Rangkaian</label><br>
          <input type="text" v-model="form.jr" required><br>
          
            <label for="">Awal Operasi</label><br>
             <input type="text" v-model="form.ao" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
        <button class="tom" type="submit" v-show="!updateSubmit"><i class="fas fa-check-circle"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="tom2" type="button" v-show="updateSubmit" @click="update(form)"><i class="fas fa-upload"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <table border="1" style="width:1100px" >
<tr>
  <th>Nama Kereta</th>
      <th>Rangkaian</th>
      <th>Tahun</th>
      <th>Gambar</th>
      <th>Action</th>
</tr>
    <tr v-for="zex in zexs" :key="zex.id">
 
      <td>{{zex.nama}}</td> 
      <td>{{zex.jr}}</td> 
      <td>{{zex.ao}}</td> 
      <td><img :src="zex.image" alt="" width="150"></td>
       <td> <button   class="icon" @click="edit(zex)"><i class="fas fa-edit"></i></button>|<button class="icon2" @click="del(zex)"><i class="fas fa-trash"></i></button></td>
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: "Kereta",
 data(){
    return{
        form: {
          id: "",
          nama: "",
            jr: "",
              ao: "",
                harga: "",
                image: "",
        },
        zexs: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/zexs').then(res => {
        this.zexs = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/zexs/', this.form).then(res => {
          this.load()
          this.form.nama = " ";
          this.form.jr = " ";
          this.form.ao = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(zex){ 
        this.updateSubmit = true
        this.form.id = zex.id 
        this.form.nama = zex.nama 
         this.form.jr = zex.jr 
          this.form.ao = zex.ao 
           this.form.harga = zex.harga
             this.form.image = zex.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/zexs/' + form.id , {nama: this.form.nama,jr: this.form.jr,ao: this.form.ao,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.nama = ''
         this.form.jr = ''
          this.form.ao = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(zex){
      axios.delete('http://localhost:3000/zexs/' + zex.id).then(res =>{
          this.load()
          let index = this.zexs.indexOf(form.nama)
          this.zexs.splice(index,1)
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




