import {createRouter, createWebHistory} from "vue-router";
import ViewList from "@/views/ViewList";
import ViewInsert from "@/views/ViewInsert";

export const routes=[
    {
        path: '/',
        name: 'list',
        component: ViewList
    },
    {
        path: '/create',
        name: 'create',
        component: ViewInsert
    },
]
const router=createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})
export default router