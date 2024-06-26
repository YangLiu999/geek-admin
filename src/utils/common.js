import { ref,watchEffect } from "vue";

// 抽离出useStorage 函数 把任意数据响应式的变化同步到本地存储
export function useStorage(name, value=[]) {
    let data = ref(JSON.parse(localStorage.getItem(name) || '[]'))
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}