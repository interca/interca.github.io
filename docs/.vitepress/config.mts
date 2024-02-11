import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  locales: {  
    root : {
      lang: "zh_CN",
      label: '中文',
      title: "hongshen",
      description: "分享美好事情，期待与你相遇",
      themeConfig: getChinsesThemeConfig()
    },
    en: {
      lang: "en",
      label: 'English',
      title: "Custom title",
      description: "Custom description",
      themeConfig: getEnglishThemeConfig(),
    }
  },
  themeConfig: {
    logo:"/logo.png",
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在Github编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/interca' },
      { icon: 'twitter', link: 'https://twitter.com/hanabahan000' },
      {
        icon: {
              svg: '<svg t="1706538590537" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3944" width="200" height="200"><path d="M1359.35 962.136l-408.149-474.71 408.625-423.363c2.912 8.736 4.933 17.888 4.933 27.515v841.616c0 10.163-2.199 19.79-5.408 28.942zM817.727 483.564L682.41 589.524l-134.9-105.722-68.521-53.604L67.926 4.933C76.424 2.496 85.219 0.773 94.49 0.773h1175.957c9.27 0 18.007 1.723 26.505 4.16L886.128 429.9l-68.402 53.663zM5.586 962.136a85.635 85.635 0 0 1-5.408-28.942V91.578c0-9.627 2.02-18.779 4.933-27.515l408.863 423.542L5.586 962.135zM682.41 697.92L882.74 541.03l413.142 479.107a94.728 94.728 0 0 1-25.435 3.863H94.49c-8.855 0-17.293-1.605-25.435-3.803l413.38-478.929L682.409 697.92z" p-id="3945"></path></svg>',
        },
        link: "1634340724@qq.com",
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    search: {
      provider: 'local'
    },
  
  }
})


// 获取中文布局配置
function getChinsesThemeConfig() {
  return {
    nav: [
      { text: '首页', link: '/' },
      { text: '后端', link: '/guide/backend/' },
      { text: '计算机基础', link: '/guide/cs/' },
      { 
        text: '日常', 
        items:[
          {text:'思考',link:'/guide/diary/think/philosophyOfComputer.md'},
          {text:'生活',link:'/guide/diary/life/2024.2.8.md'}
        ]
      },
    ],
    sidebar: {
      "/guide/diary":[
        { 
          text: '思考', 
          collapsed:true,
          items:[
            {text:'计算机的哲学',link:'/guide/diary/think/philosophyOfComputer.md'},
            {text:'后端的艺术',link:'/guide/diary/daily.md'},
            {text:'如何高效地学习？',link:'/guide/diary/daily.md'}
          ]
      
        },
        { 
          text: '生活', 
          collapsed:true,
          items:[
            {
              text:'2024.2.8 线上kafka事故',
              link:'/guide/diary/life/2024.2.8.md'
            },
          ]
      
        },
      ],
      "/guide/project":[
        { 
          text: '莞青君', 
          link:'/guide/project/baner.md'
        },
        { 
          text: '汗青阁', 
          link:'/guide/project/hanqin.md'
        },
        { 
          text: 'flashComms', 
          link:'/guide/project/23MathematicalModel.md'
        },
      ],
      "/guide/paper":[
        { 
          text: '基于XXX的XXX', 
          link:'/guide/paper/firstPaper.md'
        },
      ],
      "/guide/backend/":[
        {text:'k邻近算',link:'/guide/backend/knn.md'},
        {text:'交叉熵',link:'/guide/backend/crossEntropy.md'},
      ],
      "/guide/cs/":[
        { 
          text: '算法', 
          collapsed:true,
          items:[
            {text:'树的前中后序遍历',link:'/guide/cs/algorithm/orderOfTree.md'},
          ]
        },
        { 
          text: '操作系统', 
          collapsed:true,
          items:[
            {text:'索引',link:'/guide/cs/os/indexOfMysql.md'},
          ]
        },
        {
          text: '计算机网络',
          collapsed:true,
          items:[
            {text:'tcp'}
          ]
        }
      ],
    },
  };
}


// 获取英文布局配置
function getEnglishThemeConfig() {
  return {
    nav: [
      { text: 'Home', link: '/en/' },
    ],
  };
}

