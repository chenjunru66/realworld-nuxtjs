<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-10 15:53:36
 * @LastEditTime: 2021-02-12 20:19:59
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
		<template v-if="article.author.username !== user.username">
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
		</template>
		<template v-else>
			<nuxt-link
				class="btn btn-outline-secondary btn-sm"
				:to="{
					name: 'editor',
					query: {
						slug: article.slug,
					},
				}"
				><i class="ion-edit"></i> Edit Article
			</nuxt-link>
			<button
				class="btn btn-outline-danger btn-sm"
				@click="deleteArticle(article)"
			>
				<i class="ion-trash-a"></i> Delete Article
			</button>
		</template>
	</div>
</template>

<script>
import { deleteArticle } from "@/api/article";
import { mapState } from "vuex";
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
	computed: {
		...mapState(["user"]),
	},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		// 删除文章
		async deleteArticle(article) {
			const { data } = await deleteArticle(article.slug);
			try {
				// 跳转到首页
				this.$router.push("/");
			} catch (error) {
				console.log("删除文章失败");
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
