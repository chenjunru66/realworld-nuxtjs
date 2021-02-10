<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 16:44:42
 * @LastEditTime: 2021-02-09 21:59:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\login\index.vue
-->
<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">
						{{ isLogin ? "Sign in" : "Sign up" }}
					</h1>
					<p class="text-xs-center">
						<!-- <a href="">Have an account?</a> -->
						<nuxt-link v-if="isLogin" to="/register"
							>Need an account?</nuxt-link
						>
						<nuxt-link v-else to="/login"
							>Have an account?</nuxt-link
						>
					</p>

					<ul class="error-messages">
						<template v-for="(messages, field) in err">
							<li
								v-for="(message, index) in messages"
								:key="index"
							>
								{{ field }} {{ message }}
							</li>
						</template>
					</ul>

					<form @submit.prevent="onSubmt">
						<fieldset v-if="!isLogin" class="form-group">
							<input
								v-model="user.username"
								class="form-control form-control-lg"
								type="text"
								placeholder="Your Name"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								v-model="user.email"
								class="form-control form-control-lg"
								type="email"
								placeholder="Email"
								required
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								v-model="user.password"
								class="form-control form-control-lg"
								type="password"
								placeholder="Password"
								required
							/>
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right">
							{{ isLogin ? "Sign in" : "Sign up" }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { login, register } from "@/api/user";
// 仅在客户端加载第三方包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
	// 在路由匹配组件渲染之前会执行中间件处理
	middleware: ["noAuth"], //中间件选项：会自动找到middleware目录下的noAuth.js文件，
	name: "LoginIndex",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		//这里存放数据
		return {
			user: {
				username: "",
				email: "",
				password: "",
			},
			err: {
				// email:['fdfsd','xxfdfd'],
				// password:['ff','xx']
			}, //错误信息
		};
	},
	//监听属性 类似于data概念
	computed: {
		// 根据路由显示注册/登录
		isLogin() {
			return this.$route.name === "login";
		},
	},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		async onSubmt() {
			try {
				// 判断是否是登录还是注册
				const { data } = this.isLogin
					? await login({
							user: this.user,
					  })
					: await register({
							user: this.user,
					  });
				console.log(data);
				// 处理登录成功保护用户的登录状态
				this.$store.commit("setUser", data.user);
				// 为了防止刷新页面数据丢失，我们需要把数据持久化
				Cookie.set("user", data.user);
				// 跳转到首页
				this.$router.push("/");
			} catch (error) {
				console.log("请求失败");
				console.dir(error); //这样才能打印出错误
				this.err = error.response.data.errors;
			}
		},
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
