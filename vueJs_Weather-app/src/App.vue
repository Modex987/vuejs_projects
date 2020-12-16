<template>
  <SearchBar @keypressed="fetchData" :searchError="searchError" ref="input" />
  <main>
    <City :city="city" :country="country" />
    <DateTime :datetime="datetime" />
    <Temperature :temperature="temperature" />
    <Weather :weather="weather" :weatherDesc="weatherDesc"/>
  </main>
</template>



<script>
import SearchBar from './components/SearchBar.vue'
import City from './components/City.vue'
import DateTime from './components/DateTime.vue'
import Temperature from './components/Temperature.vue'
import Weather from './components/Weather.vue'

export default {
  components: {
    SearchBar,
    City,
    DateTime,
    Temperature,
    Weather,
  },

  data(){
    return {
      api_key: 'd69ca8b3e31b96c7ac471e3ca79dbc5b',
      url_base: 'http://api.openweathermap.org/data/2.5/weather',
      country: null,
      city: null,
      datetime: null,
      temperature: null,
      weather: null,
      weatherDesc: null,
      searchError: false,
    }
  },

  methods: {
    reset() {
      this.country = null
      this.city = null
      this.datetime = null
      this.temperature =  null
      this.weather =  null
      this.weatherDesc =  null
    },

    datebuilder() {
      let d = new Date();
      return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
    },

    fetchData(searchTerm){
      fetch(`${this.url_base}?q=${searchTerm}&appid=${this.api_key}&units=metric`)
          .then(response => {
              return response.json();
          })
          .then(data => {
              this.city = data.name
              this.country = data.sys.country
              this.datetime = this.datebuilder()
              this.temperature = data.main.temp
              this.weather = data.weather[0].main
              this.weatherDesc = data.weather[0].description
              this.searchError = false
              return 
          })
          .catch(err => {
            this.reset()
            this.searchError = true
          })
    },
  }

}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

main{
  margin: 1rem auto;
  border: none;
  border-radius: 10px;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.425);
  box-shadow: 3px 3px 3px black;
  padding: 1rem;
}
</style>