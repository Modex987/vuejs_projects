<template>
  <div v-if="datetime">
    <h2>{{ datetime }}</h2>
  </div>
  <div v-else>
    <h2>Waiting...</h2>
  </div>
</template>

<script>
export default {
    name: 'DateTime',

    props: {
    datetime: String
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

div h2{
  color: white;
  font-weight: bolder;
  font-size: 1.8rem;
  text-shadow: 3px 3px 3px white;
  padding: 10px;
}

</style>