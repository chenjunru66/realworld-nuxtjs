<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-10 15:53:36
 * @LastEditTime: 2021-02-10 16:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\article\components\article-user.vue
-->
<template>
	<div class="article-meta">
		<nuxt-link
			:to="{
				name: 'profile',
				params: {
					username: article.author.username,
				},
			}"
			><img :src="article.author.image"
		/></nuxt-link>
		<div class="info">
			<nuxt-link
				:to="{
					name: 'profile',
					params: {
						username: article.author.username,
					},
				}"
				class="author"
				>{{ article.author.username }}</nuxt-link
			>
			<span class="date">{{
				article.createdAt | date("MMM DD, YYYY")
			}}</span>
		</div>
		<button
			class="btn btn-sm btn-outline-secondary"
			:class="{
				active: article.author.following,
			}"
		>
			<i class="ion-plus-round"></i>
			&nbsp; Follow Eric Simons
			<span class="counter">(10)</span>
		</button>
		&nbsp;&nbsp;
		<button
			class="btn btn-sm btn-outline-primary"
			:class="{
				active: article.favorited,
			}"
		>
			<i class="ion-heart"></i>
			&nbsp; Favorite Post
			<span class="counter">({{ article.favoritesCount }})</span>
		</button>
	</div>
</template>

<script>
export default {
	name: "ArticleMeta",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
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
