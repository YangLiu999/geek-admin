import { createStore } from "vuex";

// 创建一个 store 对象
const store = createStore({
    state (){
        // 返回一个对象，包含一个 count 属性
        return {
            count: 666
        }
    },
    mutations: {
        // 定义一个名为 add 的 mutation
        add (state){
            // 增加 state 中的 count 属性
            state.count++
        }
    }

})