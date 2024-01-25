<template>
  <div class="row mt-3">
    <div class="col-6">
      <div class="card h-100 w-100 shadow-sm mb-4">
        <div class="card-body">
          <div class="row">
            <div :class="['col-xl-7', 'col-md-12', 'd-flex', 'align-items-center', 'rounded', 'bg-light-subtle', { 'flashing': flashTermine }]">
              <h5 class="card-title text-muted p-2 flex-grow-1">Terminée(s)</h5>
              <h4 class="p-2" :class="{ 'flash-text': flashTermine }">{{ termine }}</h4>
            </div>
            <div class="col-5 d-none d-xl-flex justify-content-end">
              <div class="text-end rounded-circle text-bg-success ml-auto" style="font-size: 1.8rem; width: 70px; height: 70px;">
                <span class="d-flex align-items-center justify-content-center h-100">
                  <i class="fa-regular fa-circle-check"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card h-100 w-100 shadow-sm mb-4">
        <div class="card-body">
          <div class="row">
            <div :class="['col-xl-7', 'col-md-12', 'd-flex', 'align-items-center', 'rounded', 'bg-light-subtle', { 'flashing': flashRestant }]">
              <h5 class="card-title text-muted p-2 flex-grow-1">Restante(s)</h5>
              <h4 class="p-2" :class="{ 'flash-text': flashRestant }">{{ restant }}</h4>
            </div>
            <div class="col-5 d-none d-xl-flex justify-content-end">
              <div class="text-end rounded-circle text-bg-warning ml-auto" style="font-size: 1.8rem; width: 70px; height: 70px;">
                <span class="d-flex align-items-center justify-content-center h-100">
                  <i class="fa-regular fa-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
  props: ["termine", "restant"],
  data() {
    return {
      flashTermine: false,
      flashRestant: false,
    };
  },
  watch: {
    termine() {
      this.flashTermine = true;
      setTimeout(() => {
        this.flashTermine = false;
      }, 2000); // 2000 millisecondes = 2 secondes
    },
    restant() {
      this.flashRestant = true;
      setTimeout(() => {
        this.flashRestant = false;
      }, 2000); // 2000 millisecondes = 2 secondes
    },
  },
};
</script>

<style scoped>
.flashing {
  animation: flashAnimation 1s infinite; /* La classe 'flashing' active une animation CSS pendant 1 seconde en boucle */
}

@keyframes flashAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flash-text {
  animation: flashTextAnimation 1s infinite;
}

@keyframes flashTextAnimation {
  0% {
    color: inherit;
  }
  50% {
    color: transparent;
  }
  100% {
    color: inherit;
  }
}
</style>
