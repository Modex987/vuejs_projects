<template>
  <h1>Chat</h1>
  <hr>
  <div class="row">
    <div class="chat col-sm-9 col-md-6 col-lg-4 border rounded m-auto d-flex flex-column p-0">
      <section>
        <div v-for="chat in chats" :key="chat.message">
          {{chat.message}}
        </div>
      </section>
      <hr>
      <div class="d-flex p-1">
        <input type="text" class="flex-grow-1" v-model="message">
        <button @click="sendMessage" class="">Send</button>
      </div>
    </div>
  </div>
</template>




<script>
import { onMounted, ref, reactive } from "vue"
import firebase from '../utilities/firebase.js'

export default {
  name: 'Chat',

  props: {
    // currentUser: Object
  },

  setup(){

    let chats = ref({})

    let message = ref(null)

    let state = reactive({
        collection: null,
    })


    onMounted(async () => {

      let db = firebase.database()
      state.collection = db.ref('chats')

      // fetching data once
      let data = await state.collection.once("value")
      if(Object.keys(data.val()).length === 1){
        chats.value = {chat: data.val()}
      }else{
        chats.value = data.val()
      }

/*
      state.collection.on("child_changed", (snapshot) => {

        if(Object.keys(snapshot.val() || {}).length === 1){
          chats.value = {chat: snapshot.val()}
        }else{
          chats.value = snapshot.val()
        }

      })
*/
    })

    let sendMessage = () => {

      if(message.value){
        let newChat = state.collection.push()
        newChat.set({ message: message.value })
        message.value = null
      }

    }

    return { chats, message, sendMessage };
  }

}
</script>



<style scoped>

input{
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px 0 0 5px;
  padding: 7px;
}

button{
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  padding: 7px;
  background-color: indigo;
  color: white;
}

button:hover{
  background-color: rgba(76, 0, 130, 0.8);
}

.chat section{
  background-color: #eee;
  border: 3px solid rgb(94, 94, 94);
  padding: 5px;
  min-height: 50vh;
  border-radius: 5px;
}

.chat{
  border: 3px solid rgb(94, 94, 94);
  background-color: #eee;
}


</style>