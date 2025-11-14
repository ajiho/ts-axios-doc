import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh",
  title: "TypeScript 从零实现 axios",
  base: "/ts-axios-doc/",
  description: "学习使用 TypeScript 从零实现 axios 库",
  head: [["link", { rel: "icon", href: "favicon.svg", type: "image/svg+xml" }]],
  themeConfig: {
    outline: {
      level: "deep",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "关于本文档", link: "/about" }],
    logo: { src: "/logo-mini.svg", width: 24, height: 24 },
    sidebar: [
      {
        text: "初识 TypeScript",
        base: "/chapter1/",
        items: [
          { text: "介绍", link: "Introduction" },
          { text: "安装", link: "install" },
          { text: "开始", link: "start" },
        ],
      },
      {
        text: "TypeScript 常用语法",
        base: "/chapter2/",
        items: [
          { text: "基础类型", link: "type" },
          { text: "变量声明", link: "declare" },
          { text: "接口", link: "interface" },
          { text: "类", link: "class" },
          { text: "函数", link: "function" },
          { text: "泛型", link: "generic" },
          { text: "类型推断", link: "inference" },
          { text: "高级类型", link: "advance" },
        ],
      },
      {
        text: "ts-axios 项目初始化",
        base: "/chapter3/",
        items: [
          { text: "需求分析", link: "require" },
          { text: "初始化项目", link: "init" },
          { text: "编写基础请求代码", link: "base" },
        ],
      },
      {
        text: "ts-axios 基础功能实现",
        base: "/chapter4/",
        items: [
          { text: "处理请求 url 参数", link: "url" },
          { text: "处理请求 body 数据", link: "data" },
          { text: "处理请求 header", link: "header" },
          { text: "获取响应数据", link: "response" },
          { text: "处理响应 header", link: "response-header" },
          { text: "处理响应 data", link: "response-data" },
        ],
      },
      {
        text: "ts-axios 异常情况处理",
        base: "/chapter5/",
        items: [
          { text: "错误处理", link: "error" },
          { text: "错误信息增强", link: "enhance" },
        ],
      },
      {
        text: "ts-axios 接口扩展",
        base: "/chapter6/",
        items: [
          { text: "扩展接口", link: "extend" },
          { text: "axios 函数重载", link: "overload" },
          { text: "响应数据支持泛型", link: "generic" },
        ],
      },
      {
        text: "ts-axios 拦截器实现",
        base: "/chapter7/",
        items: [{ text: "扩展接口", link: "interceptor" }],
      },
      {
        text: "ts-axios 配置化实现",
        base: "/chapter8/",
        items: [
          { text: "合并配置的设计与实现", link: "merge" },
          { text: "请求和响应配置化", link: "transform" },
          { text: "扩展 axios.create 静态接口", link: "create" },
        ],
      },
      {
        text: "ts-axios 取消功能实现",
        base: "/chapter9/",
        items: [{ text: "取消功能的设计与实现", link: "cancel" }],
      },
      {
        text: "ts-axios 更多功能实现",
        base: "/chapter10/",
        items: [
          { text: "withCredentials", link: "withCredentials" },
          { text: "XSRF 防御", link: "xsrf" },
          { text: "上传和下载的进度监控", link: "upload-download" },
          { text: "HTTP 授权", link: "auth" },
          { text: "自定义合法状态码", link: "validateStatus" },
          { text: "自定义参数序列化", link: "paramsSerializer" },
          { text: "baseURL", link: "baseURL" },
          { text: "静态方法扩展", link: "static" },
        ],
      },
      {
        text: "ts-axios 单元测试",
        base: "/chapter11/",
        items: [
          { text: "前言", link: "preface" },
          { text: "Jest 安装和配置", link: "jest" },
          { text: "辅助模块单元测试", link: "helpers" },
          { text: "请求模块单元测试", link: "requests" },
          { text: "headers 模块单元测试", link: "headers" },
          { text: "Axios 实例模块单元测试", link: "instance" },
          { text: "拦截器模块单元测试", link: "interceptor" },
          { text: "mergeConfig 模块单元测试", link: "mergeConfig" },
          { text: "请求取消模块单元测试", link: "cancel" },
          { text: "剩余模块单元测试", link: "more" },
        ],
      },
      {
        text: "ts-axios 部署与发布",
        base: "/chapter12/",
        items: [
          { text: "ts-axios 编译与发布", link: "build-deploy" },
          { text: "引用 ts-axios 库", link: "demo" },
        ],
      },
      {
        text: "课程总结",
        base: "/chapter13/",
        items: [{ text: "课程回顾与总结", link: "summary" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ajiho/ts-axios-doc" },
    ],
  },
})
