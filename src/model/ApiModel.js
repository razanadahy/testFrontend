const db='ToDoList'

function getLocalDB() {
    if (!localStorage.getItem(db)){
        localStorage.setItem(db,JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(db))
}
function updateDB(value) {
    localStorage.setItem(db,JSON.stringify(value))
}
function getUnfinishByOrder() {
    const data = getLocalDB();
    const unfinish = data.filter((item) => item.unfinish);
    const sortByOrder = unfinish.sort((a, b) => b.order - a.order);
    return sortByOrder;
}

function getFinishByOrder() {
    const data = getLocalDB();
    const finish = data.filter((item) => !item.unfinish);
    const sortByOrder = finish.sort((a, b) => b.order - a.order);
    return sortByOrder;
}


export function getFinish() {
    const localDB=getLocalDB()
    return localDB.filter((tache)=>!tache.unfinish).length
}
export function getUnFinish() {
    const localDB=getLocalDB()
    return localDB.filter((tache)=>tache.unfinish).length
}
export function addTask(title,comment) {
    if (title.trim()!=="" && comment.trim()!==""){
        const localDB=getLocalDB()
        const id=Date.now()+""
        localDB.push({id:id,titre: title, commentaire: comment, unfinish: true, order: Date.now()})
        updateDB(localDB)
    }
}
export function getAll() {
    const unfinishTasks = getUnfinishByOrder();
    const finishTasks = getFinishByOrder();

    const allTasks = unfinishTasks.concat(finishTasks);

    return allTasks;
}

export function updateToggle(task) {
    const localDB=getLocalDB()
    const upTask=localDB.map((cur)=>{
        if (cur.id===task.id){
            cur.unfinish=!task.unfinish
        }
        return cur
    })
    updateDB(upTask)
}

export function deleteTask(task) {
    const localDB=getLocalDB()
    const upTask=localDB.filter((cur)=>cur.id!==task.id)
    updateDB(upTask)
}

export function updateElement(id,title,comment) {
    const localDB=getLocalDB()
    const upTask=localDB.map((cur)=>{
        if (cur.id===id){
            cur.titre=title
            cur.commentaire=comment
        }
        return cur
    })
    updateDB(upTask)
}