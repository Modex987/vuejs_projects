<template>
  <div v-if="city && country">
    <h1>{{city}}, {{country}}</h1>
  </div>
  <div v-else>
    <h1>Waiting...</h1>
  </div>
</template>

<script>
export default {
    name: 'City',

    props: {
      city: String,
      country: String
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
  padding: 1rem 2rem;
}

div h1{
  color: white;
  font-weight: bolder;
  font-size: 2.5rem;
  text-shadow: 3px 3px 3px white;
  /* overflow: hidden; */
}

</style>