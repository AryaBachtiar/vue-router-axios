<template>
  <div class="header">
    <h1>Motor</h1>
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required>
        <label for="">Nama Kendaraan</label><br>
        <input type="text" v-model="form.name" required><br>
        
          <label for="">cc Bakar</label><br>
          <input type="text" v-model="form.bb" required><br>
          
            <label for="">CC</label><br>
             <input type="text" v-model="form.cc" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
                
        <button class="tom" type="submit" v-show="!updateSubmit"><i class="fas fa-check-circle"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="tom2" type="button" v-show="updateSubmit" @click="update(form)"><i class="fas fa-upload"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
         
    </form>
    <table border="1" style="width:1100px" >
<tr>
      <th>Merk</th>
      <th>cc Bakar</th>
      <th>Kapasitas Mesin</th>
      <th>Gambar</th>
      <th>Action</th>
</tr>
    <tr v-for="user in users" :key="user.id">
 
      <td>{{user.name}}</td> 
      <td>{{user.bb}}</td> 
      <td>{{user.cc}}</td> 
      <td><img :src="user.image" alt="" width="150"></td>
  
      <td> <button   class="icon" @click="edit(user)"><i class="fas fa-edit"></i></button> 
      |  <button   class="icon2" @click="del(user)"><i class="fas fa-trash"></i></button></td>
  
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: "Motor",
 data(){
    return{
        form: {
          id: "",
          name: "",
            bb: "",
              cc: "",
                harga: "",
                image: "",
        },
        users: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/users/', this.form).then(res => {
          this.load()
          this.form.name = " ";
          this.form.bb = " ";
          this.form.cc = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.name = user.name 
         this.form.bb = user.bb 
          this.form.cc = user.cc 
           this.form.harga = user.harga
             this.form.image = user.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/users/' + form.id , {name: this.form.name,bb: this.form.bb,cc: this.form.cc,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.name = ''
         this.form.bb = ''
          this.form.cc = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(user){
      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)
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




