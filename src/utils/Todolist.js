import { ref, computed } from 'vue';

export function useTodos() {
    let title = ref('')
    let todos = ref([{ title: '吃饭', done: false }])

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