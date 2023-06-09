<template>
<div class="container d-flex flex-column justify-content-center align-items-center bd-highlightborder-0  border-danger mx-auto"> 
    <h1>Social Login</h1>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginGoogle">Login with Google</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginFacebook">Login with Facebook</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%">Login with Twitter</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%">Login with Gitub</button>
</div>
</template>

<script lang="ts" setup>
import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider } from "firebase/auth"

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const auth = getAuth()

const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert(token)
    })
    .catch((error) => {
        alert("Loig failed!")
    })
}

const loginFacebook = () => {
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        alert(token)
    })
    .catch((error) => {
        alert("Loig failed!")
    })
}
   
</script>

<style scoped>

</style>