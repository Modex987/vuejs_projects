<template>

  <Header @loginAttemp="visibleLoginModal = true" @logoutAttemp="logoutUser" :isUserLoggedIn="isUserLoggedIn"/>
  <div class="container">
    <router-view/>
  </div>
  <LoginModal @closeLoginModal="visibleLoginModal = false" v-if="visibleLoginModal"/>

  <!-- <teleport to="body">
    <LoginModal @closeLoginModal="visibleLoginModal = false" v-if="visibleLoginModal"/>
  </teleport> -->

</template>


<script>
import Header from './components/Header'
import LoginModal from './components/LoginModal'
import firebase from './utilities/firebase.js'

export default {

  components: {
    Header, LoginModal
  },

  data(){
    return {
      visibleLoginModal: false,
      isUserLoggedIn: false,
      authUser: {}
    }
  },

  methods: {
    logoutUser(){
        firebase.auth().signOut()
                .then((resp) => {

                })
                .catch((err)=>{

                })
    }
  },

  mounted(){

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isUserLoggedIn = true
        this.authUser = user
      } else {
        this.isUserLoggedIn = false
        this.authUser = {}
      }
    });

  }

}

</script>


<style>

body{
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
