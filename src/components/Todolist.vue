<template>
    <div>
        <!-- <h1 @click="add">{{ count }}</h1> -->
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done">
                <span :class="{done:todo.done}">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone">
            <span>{{active}}  / {{all}}</span>
            <h1 @click="toggle">click</h1>
        </div>
    </div>
</template>

<script setup>
    //import { ref,computed } from 'vue';
    import {useTodos} from '../utils/Todolist';
    import fs from 'fs';
    import { useFullscreen } from '@vueuse/core'
    const {isFullscreen, enter,exit,toggle} = useFullscreen()
    // let count = ref(1)
    // function add(){
    //     count.value++
    // }
    
    // 使用 Composition API 的逻辑来拆分代码,把一个功能相关的数据和方法都维护在一起。
    // function useTodos(){
    //     let title = ref('')
    //     let todos = ref([{title:'吃饭', done:false}])

    //     function addTodo(){
    //         todos.value.push({title:title.value, done:false});
    //         title.value = ''
    //     }
    //     function clear(){
    //     todos.value = todos.value.filter((todo) => !todo.done)
    //     }

    //     let active = computed(() => { 
    //         return todos.value.filter((todo) => !todo.done).length;
    //     });
    //     let all = computed(() =>  todos.value.length);
    //     let allDone = computed({
    //         get(){
    //             return active.value === 0;
    //         },
    //         set: function value(){
    //                 todos.value.forEach((todo) => {
    //                 todo.done = value
    //             });
    //         },
    //     });
    //     return { title,todos,addTodo,clear,active,all,allDone};
    // }

    let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
    
</script>

<!-- npm install -D sass -->
<style lang="scss" scoped>
$padding:10px;
$white:#fff;
ul {
  width:500px;
  margin:0 auto;
  padding: 0;
  li {
    &:hover {
      cursor: pointer;
    }
    list-style-type: none;
    margin-bottom: $padding;
    padding: $padding;
    background: $white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>