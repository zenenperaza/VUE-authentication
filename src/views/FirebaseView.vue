<template>
    <div class="container"> 
        <h1>Auth Firebase</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="texto" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <div class="form-check">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>
    
    </form>
    </div>
    </template>

<script lang="ts" setup>
   import {ref} from 'vue'
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    
    let email = ref("")
    let password = ref("")

    const authUser = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
            alert("Que Exito!!!")
        })
        .catch((error) => {
            alert("Error: " + error.message )
        } )
    }




</script>

<style scoped>

</style>