<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 17:01:22
 * @LastEditTime: 2021-02-09 21:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit      
 * @FilePath: \code\realworld-nuxtjs\pages\profile\index.vue
-->
<template>
	<div class="profile-page">
		<div class="user-info">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-10 offset-md-1">
						<img
							src="http://i.imgur.com/Qr71crq.jpg"
							class="user-img"
						/>
						<h4>Eric Simons</h4>
						<p>
							Cofounder @GoThinkster, lived in Aol's HQ for a few
							months, kinda looks like Peeta from the Hunger Games
						</p>
						<button
							class="btn btn-sm btn-outline-secondary action-btn"
						>
							<i class="ion-plus-round"></i>
							&nbsp; Follow Eric Simons
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-10 offset-md-1">
					<div class="articles-toggle">
						<ul class="nav nav-pills outline-active">
							<li class="nav-item">
								<a class="nav-link active" href=""
									>My Articles</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href=""
									>Favorited Articles</a
								>
							</li>
						</ul>
					</div>

					<div class="article-preview">
						<div class="article-meta">
							<a href=""
								><img src="http://i.imgur.com/Qr71crq.jpg"
							/></a>
							<div class="info">
								<a href="" class="author">Eric Simons</a>
								<span class="date">January 20th</span>
							</div>
							<button
								class="btn btn-outline-primary btn-sm pull-xs-right"
							>
								<i class="ion-heart"></i> 29
							</button>
						</div>
						<a href="" class="preview-link">
							<h1>How to build webapps that scale</h1>
							<p>This is the description for the post.</p>
							<span>Read more...</span>
						</a>
					</div>

					<div class="article-preview">
						<div class="article-meta">
							<a href=""
								><img src="http://i.imgur.com/N4VcUeJ.jpg"
							/></a>
							<div class="info">
								<a href="" class="author">Albert Pai</a>
								<span class="date">January 20th</span>
							</div>
							<button
								class="btn btn-outline-primary btn-sm pull-xs-right"
							>
								<i class="ion-heart"></i> 32
							</button>
						</div>
						<a href="" class="preview-link">
							<h1>
								The song you won't ever stop singing. No matter
								how hard you try.
							</h1>
							<p>This is the description for the post.</p>
							<span>Read more...</span>
							<ul class="tag-list">
								<li class="tag-default tag-pill tag-outline">
									Music
								</li>
								<li class="tag-default tag-pill tag-outline">
									Song
								</li>
							</ul>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 在路由匹配组件渲染之前会执行中间件处理
	middleware: ["auth"], //中间件选项：会自动找到middleware目录下的auth.js文件，
	name: "UserProfile",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {},
	data() {
		//这里存放数据
		return {};
	},
	//监听属性 类似于data概念
	computed: {},
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
