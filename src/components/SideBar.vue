<template>
    <el-menu v-if="!isMobile" default-active="2" class="el-menu-vertical-demo bg-body width-250 position-fixed z-1"
             :collapse="false" >
          <div class="row mt-1 mb-3 border-bottom p-2 pb-3 bg-body-tertiary">
              <div class="col-auto">
                    <span class="rounded-circle p-3 bg-warning text-white " style="font-size:1rem; font-weight: bold;">
                          TD
                      </span>
              </div>
              <div class="col-auto d-flex align-items-center">
                  <h4 class="color-active mx-auto">To Do List</h4>
              </div>
          </div>
          <router-link to="/create">
            <el-menu-item index="1">
              <el-icon><i class="fa-solid fa-add" style="color: cyan"></i></el-icon>
              <h5 class="p-2">Nouvelle tache</h5>
            </el-menu-item>
          </router-link>
          <router-link to="/">
              <el-menu-item index="2">
                  <el-icon><i class="fa-solid fa-list-ol pe-1" style="color: rgba(160,18,160,0.7);"></i></el-icon>
                  <h5 class="p-2" >Liste taches</h5>
              </el-menu-item>
          </router-link>
          <div class="position-absolute bottom-0 pb-3 w-100">
                <h6 class="text-black text-sm text-center rounded px-1 py-2 bg-light-subtle">
                    andrianiavo.vit@gmail.com
                </h6>
          </div>
      </el-menu>
    <el-menu
        v-else
        class="el-menu-demo position-fixed top-0 w-100 shadow z-3"
        mode="horizontal"
        :ellipsis="false"
    >
        <el-menu-item>
            <div class="row">
                <div class="col-auto">
                    <span class="rounded-circle p-3 bg-warning text-white " style="font-size:1rem; font-weight: bold;">
                          TD
                      </span>
                </div>
                <div class="col-auto d-flex align-items-center">
                  <h4 class="color-active mx-auto">To Do List</h4>
                </div>
            </div>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item>
          <el-icon @click="visible = true"><icon-menu /></el-icon>
          <el-dialog v-model="visible" :show-close="true"  width="100%" top="10" close-on-click-modal>
            <router-link to="/create">
              <el-menu-item index="1">
                <el-icon><i class="fa-solid fa-add" style="color: cyan"></i></el-icon>
                <h5 class="p-2">Nouvelle tache</h5>
              </el-menu-item>
            </router-link>
            <router-link to="/">
              <el-menu-item index="2">
                <el-icon><i class="fa-solid fa-list-ol pe-1" style="color: rgba(160,18,160,0.7);"></i></el-icon>
                <h5 class="p-2" >Liste taches</h5>
              </el-menu-item>
            </router-link>
          </el-dialog>
        </el-menu-item>
    </el-menu>
</template>

<script >
import {Menu as IconMenu,} from '@element-plus/icons-vue'
import { ElDialog } from 'element-plus'
export default {
    name: 'SideBar',
    components:{
      IconMenu, ElDialog,
    },
    data(){
      return{
        isMobile: false,
        visible: false,
      }
    },
    methods:{
      handleResize() {
        this.isMobile = window.innerWidth < 768; // Définis la largeur à laquelle tu considères l'écran comme mobile
      },
    },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 99.8vh;
}
.width-250{
  width: 250px;
}
.flex-grow {
  flex-grow: 1;
}
.el-menu a{
  text-decoration: none;
}
.color-active{
  color: #79bbff;
}
</style>