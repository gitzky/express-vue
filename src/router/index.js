import Vue from "vue";
import Router from "vue-router";
import Layout from "@/Layout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index",
      component: Layout,
      children: [
        {
          path: "/404", // 页面不存在的情况下会跳到404页面
          name: "notFound",
          component: () => import("@/views/components/Exception/index.vue"),
        },
        {
          path: "/index",
          name: "Index",
          component: () => import("@/views/index"),
        },

        {
          path: "/list",
          name: "List",
          component: () => import("@/views/list"),
        },

        {
          path: "/list/details/:id",
          name: "Details",
          component: () => import("@/views/details"),
        },

        {
          path: "/notes",
          name: "Notes",
          component: () => import("@/views/notes-list"),
        },

        {
          path: "/home",
          name: "Home",
          component: () => import("@/views/home"),
        },
        {
          path: "/home/details/:id",
          name: "Details",
          component: () => import("@/views/details"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/about"),
        },

        {
          path: "/about/details/:id",
          name: "Details",
          component: () => import("@/views/details"),
        },

        // {
        //   path: "echarts",
        //   name: "echarts",
        //   component: () => import("@/views/echarts"),
        // },

        // {
        //   path: "editor",
        //   name: "editor",
        //   component: () => import("@/views/editor"),
        // },

        // {
        //   path: "dialog",
        //   name: "dialog",
        //   component: () => import("@/views/el-dialog"),
        // },

        // {
        //   path: "form",
        //   name: "form",
        //   component: () => import("@/views/el-form"),
        // },

        // {
        //   path: "images",
        //   name: "images",
        //   component: () => import("@/views/images"),
        // },
        // {
        //   path: "map",
        //   name: "map",
        //   component: () => import("@/views/amap"),
        // },
        {
          path: "*", // 页面不存在的情况下会跳到404页面
          redirect: "/404",
          name: "notFound",
          hidden: true,
        },
      ],
    },
  ],
});
