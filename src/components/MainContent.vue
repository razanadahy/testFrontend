<template>
  <div class="position-relative bg-body z-2" :class=" { 'full-w': isMobile , 'main-content': !isMobile}">
      <div class="d-flex align-items-center bg-gradient-info" style="min-height: 300px; background-size: cover; max-height: 300px">
      </div>
    <div class="container-fluid m--5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data(){
    return {
      isMobile: false,
    }
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
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
.bg-gradient-info{
  background: linear-gradient(87deg, #11cdef 0, #1171ef 100%) !important;
}
.m--5{
  margin-top: -270px;
}
</style>