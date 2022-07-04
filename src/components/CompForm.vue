<template>
  <form action="#">
    <input type="text" v-model="title" placeholder="Enter Title of Job Todo"/>
    <input type="submit" value="Add" @click.prevent="submitForm()">
  </form>
</template>

<script>
import {v4 as uuid} from 'uuid';
export default {
    name : 'comp-form',
    data(){
        return{
            title:''
        }
    },
    methods: {
        submitForm(){
            this.$store.dispatch('addNewJobTodo',{
                id: uuid(),
                title: this.title,
                completed:false
            });
            this.title = "";
        }
    }
}
</script>

<style>
    form{
        padding:10px;
    }
    form input[type='text'] {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin: 6px 0;
        border: 0;
    }

    form input[type='submit'] {
        width: 100px;
        margin: 10px auto;
        padding: 10px;
        border: 0;
        display: block;
    }

</style>