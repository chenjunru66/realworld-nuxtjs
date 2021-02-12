<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 17:04:47
 * @LastEditTime: 2021-02-12 20:27:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\settings\index.vue
-->
<template>
	<div class="settings-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Your Settings</h1>

					<form @submit.prevent="onSubmt">
						<fieldset>
							<fieldset class="form-group">
								<input
									class="form-control"
									type="text"
									placeholder="URL of profile picture"
									v-model="image"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Your Name"
									v-model="username"
									required
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									class="form-control form-control-lg"
									rows="8"
									placeholder="Short bio about you"
									v-model="bio"
								></textarea>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Email"
									v-model="email"
									required
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="password"
									placeholder="Password"
									v-model="password"
									required
								/>
							</fieldset>
							<button
								class="btn btn-lg btn-primary pull-xs-right"
							>
								Update Settings
							</button>
						</fieldset>
					</form>
					<hr />
					<button class="btn btn-outline-danger" @click="logout()">
						Or click here to logout.
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { updateUser } from "@/api/setting";
// 仅在客户端加载第三方包
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
	// 在路由匹配组件渲染之前会执行中间件处理
	middleware: ["auth"], //中间件选项：会自动找到middleware目录下的auth.js文件，
	name: "SettingsIndex",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		return {
			username: this.$store.state.user.username,
			email: this.$store.state.user.email,
			password: "",
			image: this.$store.state.user.image,
			bio: this.$store.state.user.bio,
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		async onSubmt() {
			try {
				const { data } = await updateUser({
					user: {
						email: this.email,
						bio: this.bio,
						username: this.username,
						password: this.password,
						image: this.image,
					},
				});
				// 修改成功之后修改当前登录信息
				this.$store.commit("setUser", data.user);
				// 为了防止刷新页面数据丢失，我们需要把数据持久化
				Cookie.set("user", data.user);
				// 跳转到详情页
				this.$router.push("/profile/" + data.user.username);
			} catch (error) {
				console.log("请求失败");
				console.dir(error); //这样才能打印出错误
				this.err = error.response.data.errors;
			}
		},
		logout() {
			Cookie.remove("user");
			this.$router.push("/");
			this.$store.commit("setUser", null);
		},
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
