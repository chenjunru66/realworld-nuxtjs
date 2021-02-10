<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-10 16:12:43
 * @LastEditTime: 2021-02-10 21:22:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\article\components\article-component.vue
-->
<template>
	<div class="">
		<form class="card comment-form">
			<div class="card-block">
				<textarea
					class="form-control"
					placeholder="Write a comment..."
					rows="3"
					v-model="addComment"
				></textarea>
			</div>
			<div class="card-footer">
				<img
					src="http://i.imgur.com/Qr71crq.jpg"
					class="comment-author-img"
				/>
				<button class="btn btn-sm btn-primary" @click="postComment()">
					Post Comment
				</button>
			</div>
		</form>

		<div class="card" v-for="comment in comments" :key="comment.id">
			<div class="card-block">
				<p class="card-text">{{ comment.body }}</p>
			</div>
			<div class="card-footer">
				<nuxt-link
					class="comment-author"
					:to="{
						name: 'profile',
						params: {
							username: comment.author.username,
						},
					}"
				>
					<img
						:src="comment.author.image"
						class="comment-author-img"
					/>
				</nuxt-link>
				&nbsp;
				<nuxt-link
					class="comment-author"
					:to="{
						name: 'profile',
						params: {
							username: comment.author.username,
						},
					}"
				>
					{{ comment.author.username }}
				</nuxt-link>
				<span class="date-posted">{{
					comment.createdAt | date("MMM DD, YYYY")
				}}</span>
				<span
					class="mod-options"
					v-if="
						comment.author.username === $store.state.user.username
					"
				>
					<i
						class="ion-trash-a"
						@click="deleteMyComment(comment)"
					></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { getComments, deleteComment, postComment } from "@/api/article";
export default {
	name: "ArticleComments",
	//import引入的组件需要注入到对象中才能使用
	components: {},
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			comments: [], // 文章列表
			addComment: "",
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		// 删除我的评论
		async deleteMyComment(comment) {
			await deleteComment({
				slug: this.$route.params.slug,
				id: comment.id,
			});
			this.comments = this.comments.filter(
				(item) => item.id !== comment.id
			);
		},
		// 添加评论
		async postComment() {
			if (!this.$store.state.user) {
				this.$route.push("/login");
			} else {
				const param = {
					comment: {
						body: this.addComment,
					},
				};
				await postComment(param, this.$route.params.slug);
				const { data } = await getComments(this.article.slug);
				this.comments = data.comments;
			}
		},
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	async mounted() {
		const { data } = await getComments(this.article.slug);
		this.comments = data.comments;
	},
};
</script>
<style scoped></style>
