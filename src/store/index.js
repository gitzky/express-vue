import Vue from "vue";
import Vuex from "vuex";
import request from "./request";

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	state: {
		token: null,
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
	},
	actions: {
		// 注册
		async register(context, arg) {
			const response = request.post("/api/register", arg);
			return response;
		},

		async login(context, arg ) {
			const response = request.post("/api/login", arg);
			const token = response.data&&response.data.token;
			token &&	commit("SET_TOKEN", token);
			return response
		},

		async selUserList(context, arg ) {
			console.log("arg", arg);
			const response = request.post("/api/selUserList", arg);
			return response;
		},

		async selPostList(context, arg ) {
			console.log("arg", arg);
			const response = request.post("/api/selPostList", arg);
			return response;
		},
	},
	modules: {},
});
