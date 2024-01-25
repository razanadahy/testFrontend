<template>
  <HeaderApp :termine="termine" :restant="restant"/>
  <div class="row mt-3 p-2">
    <div class=" col-lg-8 card h-100 col-md-12 offset-lg-2 shadow-sm mb-4 " >
      <div class="card-title ">
        <h4 class="text-center p-2">Nouvelle tâche</h4>
      </div>
      <div class="card-body">
          <div class="mb-3">
            <label for="n-titre" class="form-label">Titre</label>
            <input type="text" v-model="titre" class="form-control" id="n-titre" aria-describedby="titre">
          </div>
          <div class="mb-3">
            <label class="form-label">Commentaire</label>
            <textarea rowspan="1" v-model="commentaire"  class="form-control" id="n-commentaire"/>
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col-6">
                <el-button type="primary" size="large" style="width: 99%" @click="insertTache">Ajouter</el-button>
              </div>
              <div class="col-6">
                <el-button type="default" size="large" style="width: 99%" @click="initVariable">Annuller</el-button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import {addTask, getFinish, getUnFinish, } from "@/model/ApiModel";
export default {
  name: "InsertTache",
  components:{
    HeaderApp
  },
  data(){
    return {
      titre: '',
      commentaire: '',
      termine: 0,
      restant: 0,
    }
  },
  methods:{
    initVariable(){
      this.titre=""
      this.commentaire=""
    },
    insertTache(){
      addTask(this.titre,this.commentaire)
      this.initVariable()
      this.restant=getUnFinish()
      this.termine=getFinish()
    }

  },
  mounted() {
    this.termine=getFinish()
    this.restant=getUnFinish()
  }
}
</script>

<style scoped>

</style>