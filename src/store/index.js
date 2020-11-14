import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
  },
  actions: {
    // 注册
    async register(context, arg) {
      const response = request.post('/api/register', arg)
      return response
    },

    async login(context, arg) {
      const response = request.post('/api/singin', arg)
      const token = response.data && response.data.token
      token && commit('SET_TOKEN', token)
      return response
    },

    async getMemberByToken(context, arg) {
      const response = request.post('/api/users/getMemberByToken', arg)
      const userInfo = response.data
      userInfo && commit('SET_USERINFO', userInfo)
      return response
    },

    async selUserList(context, arg) {
      const response = request.post('/api/users/selUserList', arg)
      return response
    },

    async selPostList(context, arg) {
      const response = request.post('/api/posts/selPostList', arg)
      return response
    },

    async selPostById(context, arg) {
      const response = request.post('/api/posts/selPostById', arg)
      return response
    },
    async addPost(context, arg) {
      const response = request.post('/api/posts/addPost', arg)
      return response
    },

    
  },
  modules: {},
})
