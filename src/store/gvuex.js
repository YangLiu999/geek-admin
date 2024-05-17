// 手写迷你vuex：使用Store类管理数据，_state存储数据，mutations存储数据修改，state使用reactive包裹成响应式数据
// vuex新的几个概念
// 1.state：定义数据
// 2.mutations：定义修改数据的逻辑
// 3.组件中使用commit调用mutation
// 4.getters：实现vuex世界的计算属性
// 5.action:定义异步任务，内部调研mutation去同步数据
import { inject, reactive } from 'vue';

// 定义一个常量STORE_KEY，用于存储store
const STORE_KEY = '__store__';
// 定义一个函数useStore，用于获取store
function useStore() {
    return inject(STORE_KEY);
}

// 定义一个函数createStore，用于创建store
function createStore(options) {
    return new Store(options);
}

// 定义一个Store类，用于存储store
class Store {
    // 构造函数，接收一个参数options
    constructor(options) {
        // 将options赋值给类的属性$options
        this.$options = options;
        // 将options中的state赋值给类的属性_state
        this._state = reactive({
            data: options.state()
        });
        // 将options中的mutations赋值给类的属性_mutations
        this._mutations = options.mutations;
    }

    // 获取store的状态
    get state() {
        return this._state.data;
    }

    // 提交mutation，传入类型和payload
    commit(type, payload) {
        // 获取类型对应的mutation函数
        const entry = this._mutations[type];
        // 如果没有对应的mutation函数，则报错
        if (!entry) {
            console.error(`[vuex] unknown mutation type: ${type}`);
            return;
        }
        // 执行mutation函数
        entry(this.state, payload);
    }
    
    // 安装store，传入app
    install(app) {
        // 为app提供store
        app.provide(STORE_KEY, this);
    }
}

// 导出createStore和useStore函数
export {createStore, useStore}