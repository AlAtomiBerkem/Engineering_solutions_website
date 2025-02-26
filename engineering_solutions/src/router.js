import { createRouter, createWebHistory } from 'vue-router';
import PageContent from "@/pages/PageContent.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import PageTechnicalWork from "@/pages/PageTechnicalWork.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: "/",
        component: MainPage,
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
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;