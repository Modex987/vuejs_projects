<template>

  <Header @loginAttemp="visibleLoginModal = true" @logoutAttemp="logoutUser"/>
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
import {useStore} from "vuex"

export default {

  components: {
    Header, LoginModal
  },

  data(){
    return {
      visibleLoginModal: false,
      store: useStore(),
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
        this.$store.commit('setIsUserLoggedIn', true)
        this.$store.commit('setAuthUser', user)
      } else {
        this.$store.commit('setIsUserLoggedIn', false)
        this.$store.commit('setAuthUser', {})
      }

    });

  }

}

</script>


<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
