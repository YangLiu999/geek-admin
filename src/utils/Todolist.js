import { ref, computed } from 'vue';
import {useStorage} from './common'

export function useTodos() {
    let title = ref('')
    //let todos = ref([{ title: '吃饭', done: false }])
    // 使用 watchEffect, 数据变化之后会把数据同步到 localStorage 之上
    // let todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'))
    // watchEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos.value))
    // })
    let todos = useStorage('todos', [{ title: '吃饭', done: false }])

    function addTodo() {
        todos.value.push({ title: title.value, done: false });
        title.value = ''
    }
    function clear() {
        todos.value = todos.value.filter((todo) => !todo.done)
    }

    let active = computed(() => {
        return todos.value.filter((todo) => !todo.done).length;
    });
    let all = computed(() => todos.value.length);
    let allDone = computed({
        get() {
            return active.value === 0;
        },
        set: function value() {
            todos.value.forEach((todo) => {
                todo.done = value
            });
        },
    });
    return { title, todos, addTodo, clear, active, all, allDone };

}