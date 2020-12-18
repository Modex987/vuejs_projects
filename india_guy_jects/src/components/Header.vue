<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="{/}" class="navbar-brand mr-5">Vue.Js</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ml-auto">
            <li class="nav-item mx-5">
            </li>              
            <li class="nav-item">
              <router-link :to="{name: 'Calender'}" class="nav-link">Calender</router-link>
            </li>            
            <li class="nav-item">
              <router-link :to="{name: 'Markdown'}" class="nav-link">Markdown</router-link>
            </li>            
            <li class="nav-item">
              <router-link :to="{name: 'Slider'}" class="nav-link">Slider</router-link>
            </li>            
            <li class="nav-item">
              <router-link :to="{name: 'Calculator'}" class="nav-link">Calculator</router-link>
            </li>            
            <li class="nav-item">
              <router-link :to="{name: 'Chat'}" class="nav-link">Chat</router-link>
            </li>
            <li class="d-flex nav-item">          
              <button class="mx-auto nav-link btn btn-link" @click="$emit('logoutAttemp')" v-if="isUserLoggedIn">Log Out</button>
              <button class="mx-auto nav-link btn btn-link" @click="$emit('loginAttemp')" v-else>Log In</button>
            </li>      
            <!-- <li class="d-flex nav-item">
              <router-link :to="{name: 'Slider'}" class="nav-link">Login</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {useStore} from "vuex"

export default {
    name: 'Header',

    props: {
      // isUserLoggedIn: Boolean,
      // isUserLoggedIn: {type: Boolean, default: false},
    },

    methods: {
      
    },

    data(){
      return {
        // store: this.$store, // and then use just store.commit('mutation')
        store: useStore()
      }
    },

    computed: {

      isUserLoggedIn(){
        return this.store.state.isUserLoggedIn
      }

    },

}
</script>

<style>

</style>