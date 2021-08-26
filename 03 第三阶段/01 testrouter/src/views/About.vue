<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/news">新闻</router-link> | 
    <router-link to="/about/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
