<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 16:21:19
 * @LastEditTime: 2021-02-09 22:29:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\layout\index.vue
-->
<template>
	<div class="">
		<!-- 顶部导航栏 -->
		<nav class="navbar navbar-light">
			<div class="container">
				<a class="navbar-brand" href="index.html">conduit</a>
				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						<!-- Add "active" class when you're on that page" -->
						<!-- <a class="nav-link active" href="">Home</a> -->
						<!-- exact精确匹配 -->
						<nuxt-link class="nav-link" exact to="/"
							>Home</nuxt-link
						>
					</li>
					<!-- 登录了展示以下内容 -->
					<template v-if="user">
						<li class="nav-item">
							<!-- <a class="nav-link" href="">
							<i class="ion-compose"></i>&nbsp;New Post
						</a> -->
							<nuxt-link class="nav-link" to="/editor">
								<i class="ion-compose"></i>&nbsp;New Post
							</nuxt-link>
						</li>
						<li class="nav-item">
							<!-- <a class="nav-link" href="">
							<i class="ion-gear-a"></i>&nbsp;Settings
						</a> -->
							<nuxt-link class="nav-link" to="/settings">
								<i class="ion-gear-a"></i>&nbsp;Settings
							</nuxt-link>
						</li>
						<!-- 当前登录用户 -->
						<li class="nav-item">
							<!-- <a class="nav-link" href="">Sign in</a> -->
							<nuxt-link
								class="nav-link"
								:to="{
									name: 'profile',
									params: {
										username: user.username,
									},
								}"
							>
								<img class="user-pic" :src="user.img" />{{
									user.username
								}}
							</nuxt-link>
						</li>
					</template>
					<template v-else>
						<li class="nav-item">
							<!-- <a class="nav-link" href="">Sign up</a> -->
							<nuxt-link class="nav-link" to="/register">
								Sign up
							</nuxt-link>
						</li>
						<li class="nav-item">
							<!-- <a class="nav-link" href="">Sign in</a> -->
							<nuxt-link class="nav-link" to="/login">
								Sign in
							</nuxt-link>
						</li>
					</template>
				</ul>
			</div>
		</nav>
		<!-- 子路由 -->
		<nuxt-child></nuxt-child>
		<!-- 底部导航栏 -->
		<footer>
			<div class="container">
				<!-- <a href="/" class="logo-font">conduit</a> -->
				<nuxt-link class="nav-link" to="/">
					conduit
				</nuxt-link>
				<span class="attribution">
					An interactive learning project from
					<a href="https://thinkster.io">Thinkster</a>. Code &amp;
					design licensed under MIT.
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "layoutIndex",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		//这里存放数据
		return {};
	},
	//监听属性 类似于data概念
	computed: {
		//将状态转换为计算属性，组件能够访问
		...mapState(["user"]),
	},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style scoped></style>
