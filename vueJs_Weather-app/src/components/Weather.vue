<template>
  <div v-if="weather && weatherDesc">
    <h1>{{ weather }}</h1>
    <hr>
    <p>{{ weatherDesc }}</p>
  </div>
  <div v-else>
    <h1>Waiting...</h1>
    <hr>
    <p>Waiting ...</p>
  </div>
</template>

<script>
export default {
    name: 'Weather',

    props: {
      weather: String,
      weatherDesc: String
    }

}
</script>

<style scoped>

div{
  margin: 1rem auto;
  border: none;
  border-radius: 10px;
  max-width: 300px;
  background-color: rgba(0, 0, 0, 0.425);
  box-shadow: 3px 3px 3px black;
  padding: 10px;
}

div h1{
  color: white;
  font-weight: bolder;
  font-size: 2rem;
}

p{
  color: white;
  font-weight: bolder;
  font-size: 1rem;
}

</style>