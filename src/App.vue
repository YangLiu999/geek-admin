<template>
  <div class="wrapper">
    <!-- router-link 负责跳转不同的页面,相当于 Vue 世界中的超链接 a 标签 -->
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
  </div>
  <!-- router-view 负责渲染路由匹配的组件,我们可以通过把 router-view 放在不同的地方,实现复杂项目的页面布局 -->
<RouterView />
</template>
