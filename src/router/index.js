import Vue from "vue";
import Router from "vue-router";
import Layout from "@/Layout";
import Main from "@/Layout/main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/register", // 登录页面
      component: Main,
      children: [
        {
          path: "/register", // 页面不存在的情况下会跳到404页面
          name: "register",
          component: () => import("@/views/login/register"),
        },
      ],
    },
    {
      path: "/login", // 登录页面
      component: Main,
      children: [
        {
          path: "/login", // 页面不存在的情况下会跳到404页面
          name: "login",
          component: () => import("@/views/login/index"),
        },
      ],
    },
    {
      path: "/",
      redirect: "/index",
      component: Layout,
      children: [
        {
          path: "/404", // 页面不存在的情况下会跳到404页面
          name: "notFound",
          component: () => import("@/components/Exception/index.vue"),
        },
        /*************  index  **************/
        {
          path: "/index",
          name: "Index",
          component: () => import("@/views/index"),
        },

        {
          path: "/index/details/:id",
          name: "IndexDetails",
          component: () => import("@/views/details"),
        },

        /*************  list  **************/
        {
          path: "/list",
          name: "List",
          component: () => import("@/views/list"),
        },

        {
          path: "/list/details/:id",
          name: "ListDetails",
          component: () => import("@/views/details"),
        },

        /*************  notes  **************/
        {
          path: "/notes",
          name: "Notes",
          component: () => import("@/views/list-notes"),
        },
        {
          path: "/notes/details/:id",
          name: "NotesDetails",
          component: () => import("@/views/details"),
        },

        /*************  home  **************/
        {
          path: "/home",
          name: "Home",
          component: () => import("@/views/home"),
        },
        {
          path: "/home/details/:id",
          name: "HomeDetails",
          component: () => import("@/views/details"),
        },

        /*************  homeOther  **************/
        {
          path: "/homeOther",
          name: "homeOther",
          component: () => import("@/views/home-other"),
        },
        {
          path: "/homeOther/details/:id",
          name: "HomeOtherDetails",
          component: () => import("@/views/details"),
        },

        /*************  关于  **************/
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/about"),
        },

        /*************  个人  **************/
        {
          path: "/mine",
          name: "Mine",
          component: () => import("@/views/mine"),
        },

        {
          path: "*", // 页面不存在的情况下会跳到404页面
          redirect: "/404",
          name: "notFound",
          hidden: true,
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
      ],
    },
  ],
});
