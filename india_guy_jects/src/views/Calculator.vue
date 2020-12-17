<template>
  <h1>Calculator</h1>
  <hr>
  <div class="row">
    <div class="bg-dark btns border py-1 rounded m-auto row justify-content-center align-items-center col-sm-9 col-md-6 col-lg-4">
      <h2>
        <p class="bg-white result p-1 col-12 rounded border">{{calculation.msg}}</p>
      </h2>
      <div class="row flex-row justify-content-center">

        <div class="btns col-9 row">
          <button @click="reset" class="m-1 p-1 col-3 rounded">C</button>
          <button @click="pressed(k)" v-for="k in 9" :key="k" class="m-1 p-1 col-3 rounded">{{k}}</button>
          <button @click="pressed(0)" class="m-1 p-1 col-3 rounded">0</button>
          <button @click="pressed('.')" class="m-1 p-1 col-3 rounded">.</button>
        </div>

        <div class="btns col-3 operation row">
          <button @click="operate('+')" class="m-1 p-1 col-12 rounded">+</button>
          <button @click="operate('-')" class="m-1 p-1 col-12 rounded">-</button>
          <button @click="operate('*')" class="m-1 p-1 col-12 rounded">x</button>
          <button @click="operate('/')" class="m-1 p-1 col-12 rounded">/</button>
        </div>
      </div>

      <div class="row flex">
          <button @click="showResult" class="m-1 p-1 col-11 mx-auto rounded"><h3>=</h3></button>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from "vue"


export default {
    name: 'Calculator',

    setup(){

      let calculation = ref({
        operator1: null,
        operator2: null,
        operation: null,
        msg: ''
      })

      let pressed = (btn) => {
        if(!calculation.value.operation){
          calculation.value.operator1 += btn
          calculation.value.msg += btn
        }else{
          calculation.value.msg = null
          calculation.value.operator2 += btn
          calculation.value.msg += btn
        }
      }        
      
      let operate = (opt) => {
        if(calculation.value.operator1){
          calculation.value.msg = opt
          calculation.value.operation = opt
          calculation.value.msg = opt
        }
      }     

      let showResult = () => {
        switch(calculation.value.operation) {
        case "*":
          calculation.value.msg = Number(calculation.value.operator1) * Number(calculation.value.operator2)
            break;
        case "+":
          calculation.value.msg = Number(calculation.value.operator1) + Number(calculation.value.operator2)
            break;        
        case "-":
          calculation.value.msg = Number(calculation.value.operator1) - Number(calculation.value.operator2)
            break;        
        case "/":
          if(Number(calculation.value.operator2) != 0){
            calculation.value.msg = Number(calculation.value.operator1) / Number(calculation.value.operator2)
          }else{
            reset()
            calculation.value.msg = 'Error Division By 0'
          }
            break;
        default:
        }
      }

      let reset = () => {
        calculation.value.operator1 = null
        calculation.value.operator2 = null
        calculation.value.operation = null
        calculation.value.msg = null
      }



      return {
        calculation,
        pressed,
        reset,
        operate,
        showResult
      }
    }

}
</script>




<style scoped>

.btns{
  /* background-color: #EFEFEF; */
}
.operation button{
  background-color: #5a5a5a;
}

p{
  word-wrap: break-word;
  text-align: end;
  overflow: hidden;
  width: 100%;
}

.btns button{
  border: none;
  outline: none;
  box-shadow: 2px 2px 5px 0 #a5a5a5;
  background-color: #EFEFEF;
  transition: 0.5s ease;
}

.btns button:hover{
  box-shadow: 2px 2px 5px 0 #a5a5a546;
  transform: scale(1.1);
  color: greenyellow;
  font-weight: bold;
}

.result{
  height: 50px;
  width: 95%;
}

</style>