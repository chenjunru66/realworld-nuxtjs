<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 17:09:21
 * @LastEditTime: 2021-02-10 16:18:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\article\index.vue
-->
<template>
	<div class="article-page">
		<div class="banner">
			<div class="container">
				<h1>{{ article.title }}</h1>

				<article-meta :article="article"></article-meta>
			</div>
		</div>

		<div class="container page">
			<div class="row article-content">
				<div class="col-md-12" v-html="article.body"></div>
			</div>

			<hr />

			<div class="article-actions">
				<article-meta :article="article"></article-meta>
			</div>

			<div class="row">
				<div class="col-xs-12 col-md-8 offset-md-2">
					<article-comments :article="article"></article-comments>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getArticleDetail } from "@/api/article";
import MarkdownIt from "markdown-it";
import ArticleMeta from "./components/article-meta";
import ArticleComments from "./components/article-comments";
export default {
	name: "ArticleIndex",
	//import引入的组件需要注入到对象中才能使用
	components: {
		ArticleMeta,
		ArticleComments,
	},
	props: {},
	// 要支持SEO，使用asyncData
	async asyncData({ params }) {
		const { data } = await getArticleDetail(params.slug);
		const { article } = data;
		const md = new MarkdownIt();
		article.body = md.render(article.body);
		return {
			article,
		};
	},
	// 设置header信息来优化SEO
	head() {
		return {
			title: `${this.article.title} - RealWorld`,
			meta: [
				{
					hid: "description", //使用hid键为meta配置一个唯一的标识编号
					name: "description",
					content: this.article.description,
				},
			],
		};
	},
};
</script>
<style scoped></style>
