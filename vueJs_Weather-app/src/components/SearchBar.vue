<template>
    <input type="text" placeholder="Search..." v-model="searchTerm" @keypress.enter="forwardEvent" :class="{'searchError': searchError}">
</template>

<script>
export default {
    name: 'SearchBar',

    data(){
        return {
            searchTerm: null
        }
    },

    props: {
        searchError:Boolean
    },

    methods:{
        forwardEvent(){
            if(this.searchTerm){
                this.$emit('keypressed', this.searchTerm)
            }
        },


    }

}
</script>

<style scoped>

input{
    background-color: white;
    margin: 1rem;
    padding: 0.5rem .8rem;
    border: none;
    /* border-bottom: 1px solid black; */
    border-radius: 3px;
    outline: none;
    min-width:400px ;
    box-shadow: 2px 2px 2px 0 black;
}

input:hover, input:focus{
    box-shadow: -2px -2px 2px 0 black;
}

.searchError{
    background-color: rgba(255, 0, 0, 0.425);
}

</style>