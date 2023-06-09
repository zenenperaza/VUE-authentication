<template>
<div class="container d-flex flex-column justify-content-center align-items-center bd-highlightborder-0  border-danger mx-auto"> 
    <h1>Social Login</h1>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginGoogle">Login with Google</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginFacebook">Login with Facebook</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginTwitter">Login with Twitter</button>
    <button class="btn btn-info  m-3 p-3 " style="width: 25%" v-on:click="loginGithub">Login with Gitub</button>
</div>
</template>

<script lang="ts" setup>
import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth"

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const twitterProvider = new TwitterAuthProvider()
const githubProvider = new GithubAuthProvider()

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


const loginGithub = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result)
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

const loginTwitter= () => {
    signInWithPopup(auth, twitterProvider)
    .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result)
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