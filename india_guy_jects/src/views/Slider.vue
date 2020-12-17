<template>
  <h1>Slider</h1>
  <hr>
  <div class="px-5" id="slider">
      <!-- using v-for -->

      <div v-for="k in numberOfSlides" :key="k">
        <transition name="slide-fade">
          <div v-if="currentSlide == k" :class="'slide-item'+k"></div>
        </transition>
      </div>
      <div>
          <span v-for="k in numberOfSlides" :key="k" :class="{'activeSlide': currentSlide == k}" @click="currentSlide = k">&nbsp;&nbsp;&nbsp;</span>
      </div>

      <!-- *** -->
      <!-- <div class="slide-item1" v-show="currentSlide == 1"></div>
      <div class="slide-item2" v-show="currentSlide == 2"></div>
      <div class="slide-item3" v-show="currentSlide == 3"></div> -->
  </div>
  <!-- <div class="my-5">
    <transition name="fade">
      <h1 v-if="isTitleVisible">Slider Title</h1>
    </transition>
    <button class="btn btn-outline-primary" @click="isTitleVisible = !isTitleVisible">Toggle</button>
  </div> -->
</template>



<script>
import Debounce from '../utilities/mixins/debounce.js'

export default {
    name: 'Slider',

    mixins: [Debounce],

    data() {
        return {
            currentSlide: 1,
            numberOfSlides: 3,
            // isTitleVisible: true,
        }
    },

    computed: {
        numOfSlides(){
            return document.querySelectorAll('#slider > div').length
        }
    },

    mounted(){
        // this.timeIntervall = setInterval(() => {
        //     this.currentSlide %= this.numOfSlides
        //     this.currentSlide += 1
        // }, 1000)        
        
        this.timeIntervall = setInterval(() => {
            this.currentSlide %= this.numberOfSlides
            this.currentSlide += 1
        }, 4000)
    },
    
    beforeUnmount(){
        clearInterval(this.timeIntervall)
    }

    // unmounted(){
    //     clearInterval(this.timeIntervall)
    // },

}
</script>



<style scoped>

#slider{
    position: relative;
}

#slider > div:last-of-type{
    position: absolute;
    bottom: -380px;
    left: 49%;
}

#slider > div > div{
    position: absolute;
    height: 400px;
    width: 100%;
    top: 0;
    left: 0;
}

.slide-item1{
    background-color: greenyellow;
}

.slide-item2{
    background-color: blue;
}

.slide-item3{
    background-color: red;
}

div span{
    border-radius: 50%;
    border: 2px solid white;
    margin: 5px;
    cursor: pointer;
}

div span.activeSlide{
    background-color: white;
}


/* VueJs Css Text */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* VueJs Css Slide */
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

</style>