<template>
  <div class="wrapper">
    <!-- router-link 负责跳转不同的页面,相当于 Vue 世界中的超链接 a 标签 -->
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
    <div>
        <!-- <Rate :value="score"></Rate>
        <Rate :value="4" theme="red"></Rate> 
        <Rate :value="1.5" theme="green"></Rate> -->
        <h3>你的评分是 {{score}}</h3> 
        <!-- 们使用 @update-rate 接收 Rate 组件 emit 的数据,并且修改 score 的值, -->
        <!-- <Rate :value="score" @update-rate="update"></Rate> -->
        <!-- 自定义组件来说,v-model 是两个语法,也就是:传入属性和接收组件传递数据和的简写 -->
        <Rate v-model="score"></Rate>
    </div>
  </div>
  <!-- router-view 负责渲染路由匹配的组件,我们可以通过把 router-view 放在不同的地方,实现复杂项目的页面布局 -->
<RouterView />
</template>

<script setup>
    import { ref } from 'vue'
    import Rate from './components/Rate.vue'
    let score = ref(4)
    function update(num){     
      score.value = num 
    }
</script>