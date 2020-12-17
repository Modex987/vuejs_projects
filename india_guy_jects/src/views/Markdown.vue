<template>
  <h1>MarkDown</h1>
  <hr>
  <div class="outer border rounded d-flex align-items-stretch justify-content-center">
      <section class="flex-grow-1 m-1">
          <!-- <textarea class="w-100 h-100 p-2" v-model="text"></textarea> -->
          <!-- <textarea class="w-100 h-100 p-2" v-model.lazy="text"></textarea> -->
          <!-- <textarea class="w-100 h-100 p-2" :value="text" @input="update"></textarea> -->
          <textarea class="w-100 h-100 p-2" @input="update" ref="textarea"></textarea>
      </section>
      <section class="flex-grow-1 m-1">
          <p class="w-100 border rounded h-100 text-start p-2" v-html="markedText"></p>
      </section>
  </div>
</template>

<script>
import marked from 'marked'
import Debounce from '../utilities/mixins/debounce.js'

export default {
    name: 'Markdown',

    mixins: [Debounce],

    data(){
        return {
            text:'',
        }
    },

    computed: {
        markedText(){
            return marked(this.text)
        }
    },

    methods: {
        update(e){
            this.debounce(() => (this.text = e.target.value))
        },

    },

    mounted(){
        this.$refs.textarea.focus()
    },

    beforeUnmount(){
        this.$refs.textarea.blur()
    }
}
</script>

<style scoped>

.outer{
    min-height: 50vh;
}

section{
    width: 50%;
}

section p{
    overflow: auto;
    word-wrap: break-word
}

</style>