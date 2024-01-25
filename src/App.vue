<template>
    <SideBar/>
    <router-view/>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>
#app{
  overflow-x: hidden !important;
}
.main-content{
  margin-left: 252px;
}
.full-w{
  margin-top: 70px;
}
</style>
