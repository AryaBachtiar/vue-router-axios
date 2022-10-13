<template>

  <div class="header">
    <h1>Kapal</h1>
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id " required>
        <label for="">Nama Kapal</label><br>
        <input type="text" v-model="form.nama" required><br>
        
          <label for="">Tipe Kapal</label><br>
          <input type="text" v-model="form.tk" required><br>
          
            <label for="">Call Sign </label><br>
             <input type="text" v-model="form.cs" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
        <button class="tom" type="submit" v-show="!updateSubmit"><i class="fas fa-check-circle"></i></button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="tom2" type="button" v-show="updateSubmit" @click="update(form)"><i class="fas fa-upload"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <table border="1" style="width:1100px" >
<tr>
  <th>Nama</th>
      <th>Type</th>
      <th>Call</th>
      <th>Image</th>
      <th>Action</th>
</tr>
    <tr v-for="nlp in nlps" :key="nlp.id">
 
      <td>{{nlp.nama}}</td> 
      <td>{{nlp.tk}}</td> 
      <td>{{nlp.cs}}</td> 
      <td><img :src="nlp.image" alt="" width="150"></td>
         <td> <button   class="icon" @click="edit(nlp)"><i class="fas fa-edit"></i></button>|<button class="icon2" @click="del(nlp)"><i class="fas fa-trash"></i></button></td>
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: "Kapal",
 data(){
    return{
        form: {
          id: "",
          nama: "",
            tk: "",
              cs: "",
                harga: "",
                image: "",
        },
        nlps: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/nlps').then(res => {
        this.nlps = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/nlps/', this.form).then(res => {
          this.load()
          this.form.nama = " ";
          this.form.tk = " ";
          this.form.cs = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(nlp){ 
        this.updateSubmit = true
        this.form.id = nlp.id 
        this.form.nama = nlp.nama 
         this.form.tk = nlp.tk 
          this.form.cs = nlp.cs 
           this.form.harga = nlp.harga
             this.form.image = nlp.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/nlps/' + form.id , {nama: this.form.nama,tk: this.form.tk,cs: this.form.cs,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.nama = ''
         this.form.tk = ''
          this.form.cs = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(nlp){
      axios.delete('http://localhost:3000/nlps/' + nlp.id).then(res =>{
          this.load()
          let index = this.nlps.indexOf(form.nama)
          this.nlps.splice(index,1)
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




