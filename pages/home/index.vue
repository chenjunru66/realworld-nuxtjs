<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 16:38:23
 * @LastEditTime: 2021-02-11 11:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\home\index.vue
-->
<template>
	<div class="home-page">
		<div class="banner">
			<div class="container">
				<h1 class="logo-font">conduit</h1>
				<p>A place to share your knowledge.</p>
			</div>
		</div>

		<div class="container page">
			<div class="row">
				<div class="col-md-9">
					<div class="feed-toggle">
						<ul class="nav nav-pills outline-active">
							<li v-if="user" class="nav-item">
								<nuxt-link
									class="nav-link"
									:class="{
										active: tab === 'your_feed',
									}"
									exact
									:to="{
										name: 'home',
										query: {
											tab: 'your_feed',
										},
									}"
									>Your Feed</nuxt-link
								>
							</li>
							<li class="nav-item">
								<nuxt-link
									class="nav-link"
									:class="{
										active: tab === 'global_feed',
									}"
									exact
									:to="{
										name: 'home',
										query: {
											tab: 'global_feed',
										},
									}"
									>Global Feed</nuxt-link
								>
							</li>
							<li v-if="tag" class="nav-item">
								<nuxt-link
									class="nav-link"
									:class="{
										active: tab === 'tag',
									}"
									exact
									:to="{
										name: 'home',
										query: {
											tab: 'tag',
											tag: tag,
										},
									}"
									># {{ tag }}</nuxt-link
								>
							</li>
						</ul>
					</div>

					<div
						class="article-preview"
						v-for="article in articles"
						:key="article.slug"
					>
						<div class="article-meta">
							<!-- <a href="profile.html"
								><img src="http://i.imgur.com/Qr71crq.jpg"
							/></a> -->
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
									class="author"
									:to="{
										name: 'profile',
										params: {
											username: article.author.username,
										},
									}"
									>{{ article.author.username }}</nuxt-link
								>
								<!--时间转换 -->
								<span class="date">{{
									article.createdAt | date("MMM DD, YYYY")
								}}</span>
							</div>
							<button
								class="btn btn-outline-primary btn-sm pull-xs-right"
								:class="{
									active: article.favorited,
								}"
								@click="onFavorite(article)"
								:disabled="article.isDisabled"
							>
								<i class="ion-heart"></i>
								{{ article.favoritesCount }}
							</button>
						</div>
						<nuxt-link
							class="preview-link"
							:to="{
								name: 'article',
								params: {
									slug: article.slug,
								},
							}"
						>
							<h1>{{ article.title }}</h1>
							<p>{{ article.description }}</p>
							<span>Read more...</span>
						</nuxt-link>
					</div>
					<!-- 分页列表 -->
					<nav>
						<ul class="pagination">
							<li
								class="page-item"
								:class="{
									active: item === page,
								}"
								v-for="item in totalPage"
								:key="item"
							>
								<nuxt-link
									class="page-link"
									:to="{
										name: 'home',
										query: {
											page: item,
											tag: $route.query.tag,
											tab: tab,
										},
									}"
									>{{ item }}</nuxt-link
								>
							</li>
						</ul>
					</nav>
					<!-- /分页列表 -->
				</div>

				<div class="col-md-3">
					<div class="sidebar">
						<p>Popular Tags</p>
						<div class="tag-list">
							<nuxt-link
								:to="{
									name: 'home',
									query: {
										tab: 'tag',
										tag: item,
									},
								}"
								class="tag-pill tag-default"
								v-for="item in tags"
								:key="item"
								v-show="item.length > 0"
								>{{ item }}</nuxt-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	getArticle,
	getFeedArticle,
	addFavorite,
	deleteFavorite,
} from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex";

export default {
	name: "HomeIndex",
	watchQuery: ["page", "tag", "tab"], //监听query中参数页面改变出发asyncData等方法，不然页面改变不会重新获取数据
	// 需要满足SEO，因此使用asyncData
	async asyncData({ query, store }) {
		const page = Number.parseInt(query.page || 1);
		const limit = 20;
		// const { data } = await getArticle({
		// 	limit,
		// 	page: (page - 1) * limit,
		// });
		// const { data: tagData } = await getTags();
		const { tag } = query;
		const tab = query.tab || "global_feed";
		const loadArticle =
			store.state.user && tab === "your_feed"
				? getFeedArticle
				: getArticle; //判断获取文章列表还是用户关注列表
		const [articleRes, tagRes] = await Promise.all([
			loadArticle({
				limit,
				page: (page - 1) * limit,
				tag,
			}),
			getTags(),
		]);
		// console.log(articleRes, tagRes);
		const { articles, articlesCount } = articleRes.data;
		articles.forEach((item) => {
			item.isDisabled = false;
		});
		const { tags } = tagRes.data;
		return {
			articles,
			articlesCount,
			limit,
			page,
			tags,
			tag,
			tab,
		};
	},
	//监听属性 类似于data概念
	computed: {
		...mapState(["user"]),
		totalPage() {
			return Math.ceil(this.articlesCount / this.limit);
		},
	},
	methods: {
		async onFavorite(article) {
			article.isDisabled = true;
			if (article.favorited) {
				// 取消点赞
				await deleteFavorite(article.slug);
				article.favorited = false;
				article.favoritesCount += -1;
			} else {
				// 添加点赞
				await addFavorite(article.slug);
				article.favorited = true;
				article.favoritesCount += 1;
			}
			article.isDisabled = false;
		},
	},
};
</script>
<style scoped></style>
