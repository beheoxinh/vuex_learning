import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [],
        auth: {
            isAuthenticated: true
        }
    },
    getters: {
        completedJob: state => state.todos.filter(todo => todo.completed),
        processJob: (state,getter) => {
            const completedJob = getter.completedJob;
            return Math.round(completedJob.length/state.todos.length*100)
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated;
        },
        JOB_CHANGE_STATUS(state, id){
            state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                    return todo;
                }
            });
        },
        DELETE_JOB_TODO(state, id){
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        ADD_NEW_JOB_TODO(state,newTodo){
            state.todos.unshift(newTodo); //unshift add at top . push add at bottom
        },
        AJAX_LOAD_JOB_TODO(state, todos){
            state.todos = todos;
        }
    },
    actions: {
        async ajaxGetJobTodo({commit}){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
                commit('AJAX_LOAD_JOB_TODO',response.data);
            } catch (error) {
                console.log(error)
            }
        },
        // deleteJobTodo(context,id){
        //     context.commit('DELETE_JOB_TODO',id);
        // } tương đương
        deleteJobTodo({commit},id){
            commit('DELETE_JOB_TODO',id);
        },
        addNewJobTodo({commit},newTodo){
            commit('ADD_NEW_JOB_TODO',newTodo);
        }
    }
});
export default store;