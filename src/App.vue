<!-- TODO:各ページが完成されたら修正 -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/upload/file">Upload</router-link> |
    <router-link to="/activity">Activity</router-link> |
    <router-link to="/upload/file">file</router-link> |
    <router-link to="/upload/filter">filter</router-link> |
    <router-link to="/upload/post">post</router-link>
  </nav>
  <router-view />
</template>