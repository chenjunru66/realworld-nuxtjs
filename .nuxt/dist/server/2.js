exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=ec27db4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-ec27db4c><div class=\"container\" data-v-ec27db4c><h1 class=\"logo-font\" data-v-ec27db4c>conduit</h1> <p data-v-ec27db4c>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-ec27db4c>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-ec27db4c>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'your_feed',
								},attrs:{"exact":"","to":{
									name: 'home',
									query: {
										tab: 'your_feed',
									},
								}}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-ec27db4c>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'global_feed',
								},attrs:{"exact":"","to":{
									name: 'home',
									query: {
										tab: 'global_feed',
									},
								}}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-ec27db4c>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'tag',
								},attrs:{"exact":"","to":{
									name: 'home',
									query: {
										tab: 'tag',
										tag: _vm.tag,
									},
								}}},[_vm._v("# "+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-ec27db4c>","</div>",[_c('nuxt-link',{attrs:{"to":{
								name: 'profile',
								params: {
									username: article.author.username,
								},
							}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-ec27db4c>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
									name: 'profile',
									params: {
										username: article.author.username,
									},
								}}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-ec27db4c>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.isDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
								active: article.favorited,
							}))+" data-v-ec27db4c><i class=\"ion-heart\" data-v-ec27db4c></i>"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(article.favoritesCount)+"\n\t\t\t\t\t\t")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
							name: 'article',
							params: {
								slug: article.slug,
							},
						}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-ec27db4c>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-ec27db4c>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
								active: item === _vm.page,
							}))+" data-v-ec27db4c>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
									name: 'home',
									query: {
										page: item,
										tag: _vm.$route.query.tag,
										tab: _vm.tab,
									},
								}}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-ec27db4c>","</div>",[_vm._ssrNode("<p data-v-ec27db4c>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-ec27db4c>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{directives:[{name:"show",rawName:"v-show",value:(item.length > 0),expression:"item.length > 0"}],key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
								name: 'home',
								query: {
									tab: 'tag',
									tag: item,
								},
							}}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=ec27db4c&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/tag.js
/*
 * @Author: your name
 * @Date: 2021-02-09 22:59:30
 * @LastEditTime: 2021-02-09 23:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\tag.js
 */
 // 获取文章标签列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",
  watchQuery: ["page", "tag", "tab"],

  //监听query中参数页面改变出发asyncData等方法，不然页面改变不会重新获取数据
  // 需要满足SEO，因此使用asyncData
  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20; // const { data } = await getArticle({
    // 	limit,
    // 	page: (page - 1) * limit,
    // });
    // const { data: tagData } = await getTags();

    const {
      tag
    } = query;
    const tab = query.tab || "global_feed";
    const loadArticle = store.state.user && tab === "your_feed" ? api_article["g" /* getFeedArticle */] : api_article["d" /* getArticle */]; //判断获取文章列表还是用户关注列表

    const [articleRes, tagRes] = await Promise.all([loadArticle({
      limit,
      page: (page - 1) * limit,
      tag
    }), getTags()]); // console.log(articleRes, tagRes);

    const {
      articles,
      articlesCount
    } = articleRes.data;
    articles.forEach(item => {
      item.isDisabled = false;
    });
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  //监听属性 类似于data概念
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.isDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["c" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.isDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ec27db4c",
  "1727134e"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map