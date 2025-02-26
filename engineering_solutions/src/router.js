import { createRouter, createWebHistory } from 'vue-router';
import PageContent from "@/pages/PageContent.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import PageTechnicalWork from "@/pages/PageTechnicalWork.vue";
import App from "@/App.vue";

const routes = [
    {
        path: "/",
        component: App,
    },
    {
        path: "/PageContent",
        component: PageContent,
    },
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound,
    },
    {
        path: "/PageTechnicalWork",
        component: PageTechnicalWork,
    }
]

const router = createRouter({
    history: createWebHistory(), routes
});

export default router;