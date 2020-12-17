<template>
  <h1>Vue Calender</h1>
  <hr>
  <div>
      <section class="d-flex justify-content-center p-0 m-0">
        <p class="d-flex justify-content-between align-items-center">
          <h2>{{currMonthName}}</h2>
          <h2>{{currYear}}</h2>
        </p>
      </section>
      <section class="d-flex align-items-center justify-content-center flex-column">
        <p class="d-flex">
          <h2  class="calendreItem p-1" v-for="day in weekDays" :key="day">{{ day }}</h2>
        </p>
        <p class="d-flex flex-wrap">
          <h4  class="calendreItem p-2" v-for="x in firstDayOfMonth - 1" :key="x"></h4>
          <h4  class="calendreItem p-2" v-for="x in daysInMonth()" :key="x" :class="{'istoday': isToday(x)}">{{ x }}</h4>
        </p>
      </section>
      <section class="d-flex align-items-center justify-content-center mt-3">
        <p class="d-flex justify-content-between align-items-center">
          <button @click="prev" class="btn btn-outline-primary">Prev</button>
          <button @click="next" class="btn btn-outline-primary">Next</button>
        </p>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Calender',

    data: () => {
      return {
        weekDays: ["Mon", 'Tue', "Wed", "Thu", "Fri", "Sat", "Sun"],
        currYear: new Date().getFullYear(),
        currMonth: new Date().getMonth(),
        currDate: new Date().getDate(),
        // ***********
      }
    },

    computed: {
        currMonthName(){
          return new Date(this.currYear, this.currMonth).toLocaleString("en-GB", {month: "long"})
        },

        firstDayOfMonth(){
          return new Date(this.currYear, this.currMonth, 1).getDay()
        },
    },

    methods: {
      daysInMonth(){
        return new Date(this.currYear, this.currMonth + 1, 0).getDate()
      },

      startDay(){
        return new Date(this.currYear, this.currMonth, 1).getDay()
      },

      prev(){
        if(this.currMonth === 0){
          this.currMonth = 11
          this.currYear--
        }else{
          this.currMonth--
        }
      },

      next(){
        if(this.currMonth === 11){
          this.currMonth = 0
          this.currYear++
        }else{
          this.currMonth++
        }
      },

      isToday(x){
        return (new Date()).toDateString() === (new Date(this.currYear, this.currMonth, x)).toDateString()
      }
    }

}
</script>



<style scoped>

.calendreItem{
  width: 14.285%;
  text-align: center;
  border: none;
  border-radius: 30%;
  box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.281);
  transition: 0.5s ease;
}
.calendreItem:hover{
    box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.7);
}

p{
  width: 70%;
}

.istoday{
  background-color: greenyellow;
}

</style>