<template>
  <div v-if="temperature">
    <h1>{{temperature}} °C</h1>
  </div>
  <div v-else>
    <h1>Waiting...</h1>
  </div>
</template>

<script>
export default {
    name: 'Temperature',

    props: {
      temperature: String
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
}

div h1{
  color: white;
  font-weight: bolder;
  font-size: 2rem;
  text-shadow: 3px 3px 3px white;
  padding: 10px;
}

</style>