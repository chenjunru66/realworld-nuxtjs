exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/*
 * @Author: your name
 * @Date: 2021-02-09 18:12:40
 * @LastEditTime: 2021-02-10 21:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\article.js
 */
 // 文章列表

const getArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles",
    params
  });
}; // 用户关注文章列表

const getFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "get",
    url: "/api/articles/feed",
    params // 这种写死的方式并不好，应该使用axios的拦截器interceptors统一设置
    // headers: {
    //     // 添加用户身份，数据格式：Token空格Token数据
    //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQxNDg1LCJ1c2VybmFtZSI6ImNoZW5qdW5ydSIsImV4cCI6MTYxODEyMTgyMX0.SAu--0Qr5-y6hsz-hdVXsdG2bWqWJzG75v80n2azsLw`
    // }

  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 删除文章评论

const deleteComment = param => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${param.slug}/comments/${param.id}`
  });
}; // 添加文章评论

const postComment = (param, slug) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: param
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=24b7f3b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-24b7f3b8>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-24b7f3b8>","</div>",[_vm._ssrNode("<h1 data-v-24b7f3b8>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-24b7f3b8>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-24b7f3b8><div class=\"col-md-12\" data-v-24b7f3b8>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-24b7f3b8> "),_vm._ssrNode("<div class=\"article-actions\" data-v-24b7f3b8>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-24b7f3b8>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-24b7f3b8>","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=24b7f3b8&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=ffdb3e5e&scoped=true&
var article_metavue_type_template_id_ffdb3e5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
			name: 'profile',
			params: {
				username: _vm.article.author.username,
			},
		}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-ffdb3e5e>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
				name: 'profile',
				params: {
					username: _vm.article.author.username,
				},
			}}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-ffdb3e5e>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
			active: _vm.article.author.following,
		}))+" data-v-ffdb3e5e><i class=\"ion-plus-round\" data-v-ffdb3e5e></i>\n\t\t  Follow Eric Simons\n\t\t<span class=\"counter\" data-v-ffdb3e5e>(10)</span></button>\n\t  \n\t<button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
			active: _vm.article.favorited,
		}))+" data-v-ffdb3e5e><i class=\"ion-heart\" data-v-ffdb3e5e></i>\n\t\t  Favorite Post\n\t\t<span class=\"counter\" data-v-ffdb3e5e>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_ffdb3e5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=ffdb3e5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
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
  mounted() {}

});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_ffdb3e5e_scoped_true_render,
  article_metavue_type_template_id_ffdb3e5e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "ffdb3e5e",
  "bdfc37f0"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=7999bf22&scoped=true&
var article_commentsvue_type_template_id_7999bf22_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<form class=\"card comment-form\" data-v-7999bf22><div class=\"card-block\" data-v-7999bf22><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-7999bf22>"+_vm._ssrEscape(_vm._s(_vm.addComment))+"</textarea></div> <div class=\"card-footer\" data-v-7999bf22><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-7999bf22> <button class=\"btn btn-sm btn-primary\" data-v-7999bf22>\n\t\t\t\tPost Comment\n\t\t\t</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-7999bf22>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-7999bf22><p class=\"card-text\" data-v-7999bf22>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-7999bf22>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
					name: 'profile',
					params: {
						username: comment.author.username,
					},
				}}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n\t\t\t \n\t\t\t"),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
					name: 'profile',
					params: {
						username: comment.author.username,
					},
				}}},[_vm._v("\n\t\t\t\t"+_vm._s(comment.author.username)+"\n\t\t\t")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-7999bf22>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD, YYYY")))+"</span> "+((
					comment.author.username === _vm.$store.state.user.username
				)?("<span class=\"mod-options\" data-v-7999bf22><i class=\"ion-trash-a\" data-v-7999bf22></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentsvue_type_template_id_7999bf22_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=7999bf22&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      // 文章列表
      addComment: ""
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
      await Object(api_article["b" /* deleteComment */])({
        slug: this.$route.params.slug,
        id: comment.id
      });
      this.comments = this.comments.filter(item => item.id !== comment.id);
    },

    // 添加评论
    async postComment() {
      if (!this.$store.state.user) {
        this.$route.push("/login");
      } else {
        const param = {
          comment: {
            body: this.addComment
          }
        };
        await Object(api_article["h" /* postComment */])(param, this.$route.params.slug);
        const {
          data
        } = await Object(api_article["f" /* getComments */])(this.article.slug);
        this.comments = data.comments;
      }
    }

  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  async mounted() {
    const {
      data
    } = await Object(api_article["f" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  }

});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_7999bf22_scoped_true_render,
  article_commentsvue_type_template_id_7999bf22_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "7999bf22",
  "38682ef7"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",
  //import引入的组件需要注入到对象中才能使用
  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },
  props: {},

  // 要支持SEO，使用asyncData
  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["e" /* getArticleDetail */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  // 设置header信息来优化SEO
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: "description",
        //使用hid键为meta配置一个唯一的标识编号
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "24b7f3b8",
  "52a348d8"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map