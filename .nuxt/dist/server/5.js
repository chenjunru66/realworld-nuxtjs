exports.ids = [5];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=46914cdf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-46914cdf>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-46914cdf>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-46914cdf>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-46914cdf>"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n\t\t\t\t")+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-46914cdf>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-46914cdf>"+(_vm._ssrList((_vm.err),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-46914cdf>"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(field)+" "+_vm._s(message)+"\n\t\t\t\t\t\t")+"</li>")})))}))+"</ul> <form data-v-46914cdf>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-46914cdf><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-46914cdf></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-46914cdf><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-46914cdf></fieldset> <fieldset class=\"form-group\" data-v-46914cdf><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-46914cdf></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-46914cdf>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n\t\t\t\t\t")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=46914cdf&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/user.js
/*
 * @Author: your name
 * @Date: 2021-02-09 18:12:40
 * @LastEditTime: 2021-02-10 15:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\realworld-nuxtjs\api\user.js
 */
 // 用户登录

const login = data => {
  return Object(request["b" /* request */])({
    method: "Post",
    url: "/api/users/login",
    data
  });
}; // 用户注册

const register = data => {
  return Object(request["b" /* request */])({
    method: "Post",
    url: "/api/users",
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 仅在客户端加载第三方包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  // 在路由匹配组件渲染之前会执行中间件处理
  middleware: ["noAuth"],
  //中间件选项：会自动找到middleware目录下的noAuth.js文件，
  name: "LoginIndex",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},

  data() {
    //这里存放数据
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      err: {// email:['fdfsd','xxfdfd'],
        // password:['ff','xx']
      } //错误信息

    };
  },

  //监听属性 类似于data概念
  computed: {
    // 根据路由显示注册/登录
    isLogin() {
      return this.$route.name === "login";
    }

  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async onSubmt() {
      try {
        // 判断是否是登录还是注册
        const {
          data
        } = this.isLogin ? await login({
          user: this.user
        }) : await register({
          user: this.user
        });
        console.log(data); // 处理登录成功保护用户的登录状态

        this.$store.commit("setUser", data.user); // 为了防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set("user", data.user); // 跳转到首页

        this.$router.push("/");
      } catch (error) {
        console.log("请求失败");
        console.dir(error); //这样才能打印出错误

        this.err = error.response.data.errors;
      }
    }

  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}

});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46914cdf",
  "70b39c8b"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map