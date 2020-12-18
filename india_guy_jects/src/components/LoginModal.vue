<template>
    <div id="modalback" class="d-flex" @dblclick.self="closeModalHandler">
        <transition name="loginModal-anmt">
            <div v-if="show" class="bg-white py-3 px-5 border rounded m-auto">
                <span @click="closeModalHandler">&nbsp;&nbsp;x&nbsp;&nbsp;</span>
                <h1>Login</h1>
                <hr>
                <form class="text-start" @submit.prevent="submitHandler">
                    <div class="googleLogin mb-3 d-flex">
                        <button class="mx-auto" @click.prevent="loginWithGoogle" >
                            <img src="../assets/google.png" alt="">
                            Login With Google
                        </button>
                    </div>
                    <hr>
                    <div v-if="loginError" class="alert alert-danger mb-3">
                        <small>Something Went Wrong !</small>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input ref="emailInput" type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <div v-if="isLoading" class="isLoading d-flex mb-3">
                        <img class="mx-auto" src="../assets/25.gif" alt="">
                    </div>
                    <input v-else type="submit" class="btn btn-primary" value="Login">
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import firebase from '../utilities/firebase.js'
import Loading from '../utilities/mixins/loading.js'
import GoogleLogin from './GoogleLogin.vue'

export default {
    name: 'LoginModal',

    mixins: [Loading],

    components: {
        GoogleLogin
    },

    data(){
        return {
            show: false,
            form: {
                email: null,
                password: null
            },
            loginError: false,
        }
    },

    methods: {
        closeModalHandler(){
            this.show = false
            setTimeout(()=> {
                this.$emit('closeLoginModal')
            }, 500)
        },

        submitHandler(){
            this.isLoading = true;

            firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then((user) => {
                        // Signed in
                        this.isLoading = false;
                        this.closeModalHandler()
                    })
                    .catch(error => {
                        this.isLoading = false;
                        this.loginError = true
                    });
        },

        loginWithGoogle(){
            this.isLoading = true;
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                    .then((res)=>{
                        this.isLoading = false;
                        this.closeModalHandler()
                    }).catch((err)=>{
                        this.isLoading = false;
                        this.loginError = true
                    })
                    /*
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        // ...
                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
                    */
        },

    },

    mounted(){
        this.show = true
        setTimeout(()=>{
            this.$refs.emailInput.focus()
        }, 500)
    },   
    
    beforeUnmount(){
        // this.$refs.email.blur()
        // this.show = false
    },
}

</script>






<style scoped>

div#modalback{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}

div#modalback > div{
    position: relative;
    box-shadow: 5px 5px 20px 0 black;
    min-width: 500px;
}

span{
    position: absolute;
    top: -30px;
    right: -25px;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    cursor: pointer;
    border-radius: 50%;
}

/* Animation */

.loginModal-anmt-enter-active{
    animation: loginModal-anmt .5s;
}

.loginModal-anmt-leave-active {
    animation: loginModal-anmt .5s reverse;
}

@keyframes loginModal-anmt {
    0%{
        /* transform: scale(0) rotate(0deg) translateX(-250px); */
        transform: scale(0);
        opacity: 0;
    }
    
    50%{
        opacity: 0.5;
    }
    
    100%{
        /* transform: scale(1) rotate(360deg) translateX(0); */
        transform: scale(1);
        opacity: 1;
    }
}

.loginModal-anmt-enter-from {
    opacity: 0;
    transform: translateX(1000px);
}

.loginModal-anmt-leave-to {
    opacity: 0;
    transform: translateX(-1000px);
}

.isLoading img{
    height: 20px;
}


.googleLogin button img{
    height: 40px;
    /* border-right: 1px solid black; */
}
.googleLogin button{
    background-color: white;
    color: black;
    font-weight: bold;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
    border: none;
    outline: none;
}
.googleLogin button:hover{
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.8);
}

</style>