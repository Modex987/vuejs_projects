<template>
  <h1>Vue Calender</h1>
  <div>
      <section class="d-flex justify-content-center p-0 m-0">
        <p class="d-flex justify-content-between align-items-center">
          <h2>{{currMonthName}}</h2>
          <h2>{{currYear}}</h2>
        </p>
      </section>
      <section class="d-flex align-items-center justify-content-center flex-column">
        <p class="d-flex bg-dark text-white">
          <h2  class="calendreItem" v-for="day in weekDays" :key="day">{{ day }}</h2>
        </p>
        <p class="d-flex flex-wrap bg-dark text-white">
          <h4  class="calendreItem" v-for="x in firstDayOfMonth - 1" :key="x"></h4>
          <h4  class="calendreItem" v-for="x in daysInMonth()" :key="x">{{ x }}</h4>
        </p>
      </section>
      <section class="d-flex align-items-center justify-content-center">
        <p class="d-flex justify-content-between align-items-center">
          <button @click="prev" class="btn btn-outline-primary">Prev</button>
          <button @click="next" class="btn btn-outline-primary">Next</button>
        </p>
      </section>
      <!-- <section class="d-flex justify-content-center">
      </section> -->
      
      currYear: {{currYear}} <br>
      currMonthName: {{currMonthName}} <br>
      currMonth: {{currMonth}} <br>
      currDate: {{currDate}} <br>
      <!-- firstDayOfMonth: {{weekDays[startDay() - 1]}} <br> -->
      daysInMonth: {{daysInMonth()}} <br>
      startDay: {{startDay()}} <br>
      firstDayOfMonth: {{firstDayOfMonth}} <br>
      <hr>
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
        return new Date(this.currYear, this.currMonth, 0).getDate()
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
      }
    }

}
</script>



<style scoped>

.calendreItem{
  width: 14.285%;
  text-align: center;
}

p{
  width: 70%;
}

</style>