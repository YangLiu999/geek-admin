<template>
    <div @click="add">
        {{ count }}
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    // 创建一个store变量，用于存储useStore()函数的返回值
    let store = useStore();
    // 使用computed函数，返回store的state中的count属性
    let count = computed(() => store.state.count);

    function add() {
        // 不能直接去操作store.state.count += 1，这个数据属于vuex统一管理
        // 需要通过mutations来修改
        store.commit('add');
    }

</script>