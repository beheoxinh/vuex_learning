<template>
  <div class="todo-list">
    <ul>
        <li v-for="todo in jobTodos" :key="todo.id">
            <input class="cb-complete" type="checkbox" @change="changeJobStatus(todo.id)" :checked="todo.completed">
            <span class="label-title">{{todo.title}}</span>
            <button class="btn-remove" @click="deleteTodo(todo.id)">Delete</button>
        </li>
    </ul>
    <comp-form></comp-form>
  </div>
</template>

<script>
import CompForm from './CompForm';
export default {
    name: 'comp-to-dos',
    data() {
        return {
            
        }
    },
    components: { CompForm},
    computed: {
        jobTodos(){
            return this.$store.state.todos;
        }
    },
    methods:{
        changeJobStatus(id){
            this.$store.commit('JOB_CHANGE_STATUS',id);
        },
        deleteTodo(id){
            this.$store.dispatch('deleteJobTodo',id);
        }
    },
    created(){
        this.$store.dispatch('ajaxGetJobTodo');
    }
}
</script>

<style>
    .todo-list ul{
        padding: 10px;
        list-style-type: none;
    }

    .todo-list li{
        position: relative;
        padding: 10px;
        cursor: pointer;
        margin: 10px 0;
        border:1px solid gray;
        border-radius: 5px;
        background: rbg(240, 240, 240);
        color: black;
    }
    .cb-complete{
        height: 20px;
        width: 20px;
        background-color: #eee;
    }
    .cd-complete:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .label-title{
        line-height: 20px;;
        position: relative;
        top:-4px;
        margin-left:10px;
    }
    .btn-remove{
        height: 25px;
        float:right;
        color: white;
        border: none;
        cursor: pointer;
        background: rgb(250, 50, 50);
    }
</style>