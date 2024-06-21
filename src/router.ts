import { createWebHistory, createRouter } from "vue-router"
import { siteLanguage } from "@ts/SiteLanguage"

const routes = [
  {
    path: "/",
    component: () => import("@/PasswordGenerator.vue"),
    // component: PasswordGenerator,
    props: { language: "en" },
    beforeEnter: (to, from, next) => {
      if (to.path == "/") {
        next("/en")
      }
    }
  },
  {
    path: "/:language",
    component: () => import("@/PasswordGenerator.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let routeLanguage = to.params.language

  siteLanguage.updateActiveLanguage(routeLanguage)
  siteLanguage.updateMetaData()

  next()
})

export default router
