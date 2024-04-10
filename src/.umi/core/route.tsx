// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"name":"API商店","icon":"HomeOutlined","path":"/","parentId":"ant-design-pro-layout","id":"1"},"2":{"name":"我的接口","icon":"StarOutlined","path":"/my_interface","parentId":"ant-design-pro-layout","id":"2"},"3":{"name":"查看接口","icon":"smile","path":"/interface_info/:id","hideInMenu":true,"parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/user","layout":false,"id":"4"},"5":{"name":"登录","path":"/user/login","parentId":"4","id":"5"},"6":{"path":"/admin","name":"管理中心","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"6"},"7":{"name":"接口管理","icon":"table","path":"/admin/interface_info","parentId":"6","id":"7"},"8":{"name":"统计分析","icon":"table","path":"/admin/analysis","parentId":"6","id":"8"},"9":{"name":"个人中心","icon":"UserOutlined","path":"/profile","parentId":"ant-design-pro-layout","id":"9"},"10":{"path":"*","layout":false,"id":"10"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__Index__index" */'@/pages/Index/index.tsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__MyInterface__index" */'@/pages/MyInterface/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__InterfaceInfo__index" */'@/pages/InterfaceInfo/index.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'6': React.lazy(() => import( './EmptyRoute')),
'7': React.lazy(() => import(/* webpackChunkName: "p__Admin__InterfaceInfo__index" */'@/pages/Admin/InterfaceInfo/index.tsx')),
'8': React.lazy(() => import(/* webpackChunkName: "p__Admin__InterfaceInfoAnalysis__index" */'@/pages/Admin/InterfaceInfoAnalysis/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__User__Profile__index" */'@/pages/User/Profile/index.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/haochen/IdeaProjects/nero-api-frontend-master/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/Users/haochen/IdeaProjects/nero-api-frontend-master/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
