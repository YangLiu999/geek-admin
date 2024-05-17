import { createStore } from "vuex";

// 创建一个 store 对象
const store = createStore({
    state (){
        // 返回一个对象，包含一个 count 属性
        return {
            count: 666
        }
    },
    getters: {
        // 定义一个名为 double 的 getter，返回 state 中的 count 乘以 2
        double(state){
            return state.count * 2
        }
    },
    mutations: {
        // 定义一个名为 add 的 mutation
        add (state){
            // 增加 state 中的 count 属性
            state.count++
        }
    },
    actions: {
        // 定义一个名为 asyncAdd 的 action，1 秒后执行 add mutation
        asyncAdd({commit}){
            setTimeout(() => {
                commit('add')
            },1000)
        }
    }

})

export default store