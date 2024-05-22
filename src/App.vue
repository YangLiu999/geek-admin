<template>
  <!-- <div class="wrapper">
    router-link 负责跳转不同的页面,相当于 Vue 世界中的超链接 a 标签 -->
  <!-- <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink> -->
  <!-- <div> -->
  <!-- <Rate :value="score"></Rate>
        <Rate :value="4" theme="red"></Rate> 
        <Rate :value="1.5" theme="green"></Rate> -->
  <!-- <h3>你的评分是 {{score}}</h3>  -->
  <!-- 们使用 @update-rate 接收 Rate 组件 emit 的数据,并且修改 score 的值, -->
  <!-- <Rate :value="score" @update-rate="update"></Rate> -->
  <!-- 自定义组件来说,v-model 是两个语法,也就是:传入属性和接收组件传递数据和的简写 -->
  <!-- <Rate v-model="score"></Rate> -->
  <!-- </div> -->
  <!-- </div> -->
  <!-- router-view 负责渲染路由匹配的组件,我们可以通过把 router-view 放在不同的地方,实现复杂项目的页面布局 -->
  <!-- <RouterView />  -->

  <!-- 使用element3-->
  <el-container>
    <el-header>
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template v-slot:title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template v-slot:title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://element3-ui.com" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
  </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <RouterLink to="/">home</RouterLink>
        </div>
        <div>
          <RouterLink to="/about">about</RouterLink>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>

// import { ref } from 'vue'
// import Rate from './components/Rate.vue'
// let score = ref(4)
// function update(num){
//   score.value = num
// }
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body>.el-container {
  margin-bottom: 40px;
}
</style>