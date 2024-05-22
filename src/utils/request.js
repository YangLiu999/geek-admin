// 对所有的 http 请求进行统一拦截,确保在请求发出之前,从本地存储中获取 token
// 在接口返回报错信息的时候,会在调试窗口统一打印报错信息
import axios from 'axios'
import { useMsgbox, Message } from 'element3'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url   
    timeout: 5000, // request timeout 
})

// request interceptor
service.interceptors.request.use(
    config => { 
        if (store.getters.token) { 
            config.headers['X-Token'] = getToken() 
        } 
        return config 
    }, 
    error => { 
        console.log(error) // for debug     
        return Promise.reject(error)  
    }, 
)

//response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200000) {
            console.log('接口信息报错',res.message)
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('接口信息报错' + error)
        return Promise.reject(error)  
    }
)

export default service



