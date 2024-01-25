<template>
  <HeaderApp :termine="termine" :restant="restant"/>
  <div class="row mt-4 p-2">
    <div v-for="(task, index) in allTask" :key="index" class="col-lg-4 col-md-12 mb-2">
      <div class="w-100  card h-100  shadow-sm mb-2 " >

        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="text-start text-muted p-2">{{task.titre}}</h4>
            <span v-if="task.unfinish" class="rounded-circle text-bg-warning d-flex align-items-center justify-content-center" style="height: 40px; width: 40px">
          <i class="fa-regular fa-circle"></i>
        </span>
            <span v-else class="rounded-circle text-bg-success d-flex align-items-center justify-content-center" style="height: 40px; width: 40px">
          <i class="fa-regular fa-circle-check"></i>
        </span>

          </div>
          <p class="text-muted text-sm-start">{{task.commentaire}}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <el-switch class="text-start" :model-value="isTaskUnfinished(task)" @update:model-value="updateTaskUnfinish(task)" />
          <el-button-group class="ml-4 text-end">
            <el-button @click=" activeModal(task)" type="primary"><el-icon><Edit/></el-icon></el-button>
            <el-button type="danger" @click="deleteT(task)"><el-icon><Delete/></el-icon></el-button>
          </el-button-group>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible" title="Modification">
    <div class="mb-3">
      <label for="n-titre" class="form-label">Titre</label>
      <input v-model="lastTitle" type="text" class="form-control" id="n-titre" aria-describedby="titre">
    </div>
    <div class="mb-3">
      <label class="form-label">Commentaire</label>
      <textarea v-model="lastComment" rowspan="1"  class="form-control" id="n-commentaire"/>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="initValueUpdate">Annuler</el-button>
        <el-button type="primary" @click="updateTaskElement">
          Modifier
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import {deleteTask, getAll, getFinish, getUnFinish, updateElement, updateToggle} from "@/model/ApiModel";

export default {
  name: "ListeTache",
  components:{
    Delete,
    Edit,HeaderApp
  },
  mounted() {
    this.init()
  },
  data(){
    return {
      dialogFormVisible: false,
      termine: 0,
      restant: 0,
      allTask:[],
      lastTitle:"",
      lastComment: "",
      id:""
    }
  },
  methods: {
    init(){
      this.termine=getFinish()
      this.restant=getUnFinish()
      this.allTask=getAll()
    },
    initValueUpdate(){
      this.dialogFormVisible = false
      this.lastTitle=""
      this.lastComment=""
      this.id=""
    },

    isTaskUnfinished(task) {
      return !task.unfinish;
    },

    updateTaskUnfinish(task) {
      updateToggle(task)
      this.init()
    },

    deleteT(task){
      deleteTask(task)
      this.init()
    },

    activeModal(task){
      this.dialogFormVisible = true
      this.lastTitle=task.titre
      this.lastComment=task.commentaire
      this.id=task.id
    },

    updateTaskElement(){
      updateElement(this.id,this.lastTitle,this.lastComment)
      this.initValueUpdate()
      this.init()
    },
  },
}
</script>

<style scoped>

</style>