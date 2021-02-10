<!-- @format -->

<!--
 * @Author: your name
 * @Date: 2021-02-09 17:07:20
 * @LastEditTime: 2021-02-09 21:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\pages\editor\index.vue
-->
<template>
	<div class="editor-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-10 offset-md-1 col-xs-12">
					<form>
						<fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control form-control-lg"
									placeholder="Article Title"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="What's this article about?"
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									class="form-control"
									rows="8"
									placeholder="Write your article (in markdown)"
								></textarea>
							</fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="Enter tags"
								/>
								<div class="tag-list"></div>
							</fieldset>
							<button
								class="btn btn-lg pull-xs-right btn-primary"
								type="button"
							>
								Publish Article
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 在路由匹配组件渲染之前会执行中间件处理
	middleware: ["auth"], //中间件选项：会自动找到middleware目录下的auth.js文件，
	name: "EditorIndex",
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
