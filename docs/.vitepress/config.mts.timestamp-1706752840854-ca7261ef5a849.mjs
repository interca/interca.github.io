// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/gitProject/vitepress/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  locales: {
    root: {
      lang: "zh_CN",
      label: "\u4E2D\u6587",
      title: "\u51AF\u6797",
      description: "\u5206\u4EAB\u7F8E\u597D\u4E8B\u60C5\uFF0C\u671F\u5F85\u4E0E\u4F60\u76F8\u9047",
      themeConfig: getChinsesThemeConfig()
    },
    en: {
      lang: "en",
      label: "English",
      title: "Custom title",
      description: "Custom description",
      themeConfig: getEnglishThemeConfig()
    }
  },
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728Github\u7F16\u8F91\u6B64\u9875"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/1aba1" },
      { icon: "twitter", link: "https://twitter.com/hanabahan000" },
      {
        icon: {
          svg: '<svg t="1706538590537" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3944" width="200" height="200"><path d="M1359.35 962.136l-408.149-474.71 408.625-423.363c2.912 8.736 4.933 17.888 4.933 27.515v841.616c0 10.163-2.199 19.79-5.408 28.942zM817.727 483.564L682.41 589.524l-134.9-105.722-68.521-53.604L67.926 4.933C76.424 2.496 85.219 0.773 94.49 0.773h1175.957c9.27 0 18.007 1.723 26.505 4.16L886.128 429.9l-68.402 53.663zM5.586 962.136a85.635 85.635 0 0 1-5.408-28.942V91.578c0-9.627 2.02-18.779 4.933-27.515l408.863 423.542L5.586 962.135zM682.41 697.92L882.74 541.03l413.142 479.107a94.728 94.728 0 0 1-25.435 3.863H94.49c-8.855 0-17.293-1.605-25.435-3.803l413.38-478.929L682.409 697.92z" p-id="3945"></path></svg>'
        },
        link: "mailto:flin33636@gmail.com"
      }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2019-present Evan You"
    },
    search: {
      provider: "local"
    }
  }
});
function getChinsesThemeConfig() {
  return {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u535A\u5BA2", link: "/guide/blog/index" },
      { text: "\u7B14\u8BB0", link: "/guide/books" },
      {
        text: "\u65E5\u5E38",
        items: [
          { text: "\u601D\u8003", link: "/guide/diary/think/philosophyOfComputer.md" },
          { text: "\u751F\u6D3B", link: "/guide/diary/life/2024.1.29.md" }
        ]
      }
    ],
    sidebar: {
      "/guide/diary": [
        {
          text: "\u601D\u8003",
          collapsed: true,
          items: [
            { text: "\u8BA1\u7B97\u673A\u7684\u54F2\u5B66", link: "/guide/diary/think/philosophyOfComputer.md" },
            { text: "\u540E\u7AEF\u7684\u827A\u672F", link: "/guide/books/deepLearning1.md" },
            { text: "\u5982\u4F55\u9AD8\u6548\u5730\u5B66\u4E60\uFF1F", link: "/guide/diary/daily.md" }
          ]
        },
        {
          text: "\u751F\u6D3B",
          collapsed: true,
          items: [
            { text: "2024.1.29\u65E5\u5E38", link: "/guide/diary/life/2024.1.29.md" },
            { text: "2024.1.28", link: "/guide/diary/think.md" },
            { text: "2024.1.27", link: "/guide/diary/daily.md" }
          ]
        }
      ],
      "/guide/project": [
        {
          text: "\u4F34\u5C14\u540C\u884C",
          link: "/guide/project/baner.md"
        },
        {
          text: "\u6C57\u9752\u9601",
          link: "/guide/project/hanqin.md"
        },
        {
          text: "2023\u6570\u6A21\u56FD\u8D5B",
          link: "/guide/project/23MathematicalModel.md"
        }
      ],
      "/guide/paper": [
        {
          text: "\u57FA\u4E8EXXX\u7684XXX",
          link: "/guide/paper/firstPaper.md"
        }
      ],
      "/guide/blog/": [
        {
          text: "2024",
          collapsed: true,
          items: [
            {
              text: "1\u6708",
              collapsed: true,
              items: [
                { text: "k\u90BB\u8FD1\u7B97", link: "/guide/blog/2024/knn.md" },
                { text: "\u4EA4\u53C9\u71B5", link: "/guide/blog/2024/crossEntropy.md" }
              ]
            }
          ]
        },
        {
          text: "2023",
          collapsed: true,
          items: [
            {
              text: "12\u6708",
              collapsed: true,
              items: [
                { text: "git\u5E38\u89C1\u64CD\u4F5C", link: "/guide/blog/2023/aboutGit.md" }
              ]
            }
          ]
        }
      ],
      "/guide/books": [
        {
          text: "\u7B97\u6CD5",
          collapsed: true,
          items: [
            { text: "\u6811\u7684\u524D\u4E2D\u540E\u5E8F\u904D\u5386", link: "/guide/diary/think/philosophyOfComputer.md" },
            { text: "\u540E\u7AEF\u7684\u827A\u672F", link: "/guide/books/deepLearning1.md" },
            { text: "\u5982\u4F55\u9AD8\u6548\u5730\u5B66\u4E60\uFF1F", link: "/guide/diary/daily.md" }
          ]
        },
        {
          text: "\u751F\u6D3B",
          collapsed: true,
          items: [
            { text: "2024.1.29\u65E5\u5E38", link: "/guide/diary/life/2024.1.29.md" },
            { text: "2024.1.28", link: "/guide/diary/think.md" },
            { text: "2024.1.27", link: "/guide/diary/daily.md" }
          ]
        }
      ]
    }
  };
}
function getEnglishThemeConfig() {
  return {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "\u8BB0\u5F55",
        items: [
          { text: "\u6280\u672F", link: "/guide/diary/code.md" },
          { text: "\u601D\u8003", link: "/guide/diary/think.md" },
          { text: "\u65E5\u5E38", link: "/guide/diary/daily.md" }
        ]
      },
      {
        text: "\u6587\u7AE0",
        items: [
          {
            items: [
              { text: "\u7B97\u6CD5", link: "/guide/article/code.md" },
              { text: "\u8BA1\u7B97\u673A\u57FA\u7840", link: "/guide/article/foundation.md" }
            ]
          },
          {
            items: [
              { text: "\u9879\u76EE", link: "/article/project.md" }
            ]
          }
        ]
      }
    ],
    sidebar: {
      "/guide/diary": [
        {
          text: "\u4E66\u7C4D\u7B14\u8BB0",
          collapsed: true,
          items: [
            { text: "\u673A\u5668\u5B66\u4E60\uFF08\u897F\u74DC\u4E66\uFF09", link: "/guide/diary/code.md" },
            { text: "\u6DF1\u5EA6\u5B66\u4E60\u5165\u95E8", link: "/guide/books/deepLearning1.md" },
            { text: "\u6DF1\u5EA6\u5B66\u4E60\u8FDB\u9636(\u57FA\u4E8ENLP)", link: "/guide/diary/daily.md" }
          ]
        },
        {
          text: "\u65E5\u5E38",
          collapsed: true,
          items: [
            { text: "2024.1.29", link: "/guide/diary/code.md" },
            { text: "2024.1.28", link: "/guide/diary/think.md" },
            { text: "2024.1.27", link: "/guide/diary/daily.md" }
          ]
        }
      ]
    }
  };
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnaXRQcm9qZWN0XFxcXHZpdGVwcmVzc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGdpdFByb2plY3RcXFxcdml0ZXByZXNzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9naXRQcm9qZWN0L3ZpdGVwcmVzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28ucG5nJyB9XV0sXG4gIGxvY2FsZXM6IHsgIFxuICAgIHJvb3QgOiB7XG4gICAgICBsYW5nOiBcInpoX0NOXCIsXG4gICAgICBsYWJlbDogJ1x1NEUyRFx1NjU4NycsXG4gICAgICB0aXRsZTogXCJcdTUxQUZcdTY3OTdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlx1NTIwNlx1NEVBQlx1N0Y4RVx1NTk3RFx1NEU4Qlx1NjBDNVx1RkYwQ1x1NjcxRlx1NUY4NVx1NEUwRVx1NEY2MFx1NzZGOFx1OTA0N1wiLFxuICAgICAgdGhlbWVDb25maWc6IGdldENoaW5zZXNUaGVtZUNvbmZpZygpXG4gICAgfSxcbiAgICBlbjoge1xuICAgICAgbGFuZzogXCJlblwiLFxuICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICAgIHRpdGxlOiBcIkN1c3RvbSB0aXRsZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ3VzdG9tIGRlc2NyaXB0aW9uXCIsXG4gICAgICB0aGVtZUNvbmZpZzogZ2V0RW5nbGlzaFRoZW1lQ29uZmlnKCksXG4gICAgfVxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286XCIvbG9nby5wbmdcIixcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvZWRpdC9tYWluL2RvY3MvOnBhdGgnLFxuICAgICAgdGV4dDogJ1x1NTcyOEdpdGh1Ylx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NSdcbiAgICB9LFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tLzFhYmExJyB9LFxuICAgICAgeyBpY29uOiAndHdpdHRlcicsIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL2hhbmFiYWhhbjAwMCcgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICBzdmc6ICc8c3ZnIHQ9XCIxNzA2NTM4NTkwNTM3XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMzY1IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIzOTQ0XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTEzNTkuMzUgOTYyLjEzNmwtNDA4LjE0OS00NzQuNzEgNDA4LjYyNS00MjMuMzYzYzIuOTEyIDguNzM2IDQuOTMzIDE3Ljg4OCA0LjkzMyAyNy41MTV2ODQxLjYxNmMwIDEwLjE2My0yLjE5OSAxOS43OS01LjQwOCAyOC45NDJ6TTgxNy43MjcgNDgzLjU2NEw2ODIuNDEgNTg5LjUyNGwtMTM0LjktMTA1LjcyMi02OC41MjEtNTMuNjA0TDY3LjkyNiA0LjkzM0M3Ni40MjQgMi40OTYgODUuMjE5IDAuNzczIDk0LjQ5IDAuNzczaDExNzUuOTU3YzkuMjcgMCAxOC4wMDcgMS43MjMgMjYuNTA1IDQuMTZMODg2LjEyOCA0MjkuOWwtNjguNDAyIDUzLjY2M3pNNS41ODYgOTYyLjEzNmE4NS42MzUgODUuNjM1IDAgMCAxLTUuNDA4LTI4Ljk0MlY5MS41NzhjMC05LjYyNyAyLjAyLTE4Ljc3OSA0LjkzMy0yNy41MTVsNDA4Ljg2MyA0MjMuNTQyTDUuNTg2IDk2Mi4xMzV6TTY4Mi40MSA2OTcuOTJMODgyLjc0IDU0MS4wM2w0MTMuMTQyIDQ3OS4xMDdhOTQuNzI4IDk0LjcyOCAwIDAgMS0yNS40MzUgMy44NjNIOTQuNDljLTguODU1IDAtMTcuMjkzLTEuNjA1LTI1LjQzNS0zLjgwM2w0MTMuMzgtNDc4LjkyOUw2ODIuNDA5IDY5Ny45MnpcIiBwLWlkPVwiMzk0NVwiPjwvcGF0aD48L3N2Zz4nLFxuICAgICAgICB9LFxuICAgICAgICBsaW5rOiBcIm1haWx0bzpmbGluMzM2MzZAZ21haWwuY29tXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLicsXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMTktcHJlc2VudCBFdmFuIFlvdSdcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICBcbiAgfVxufSlcblxuXG4vLyBcdTgzQjdcdTUzRDZcdTRFMkRcdTY1ODdcdTVFMDNcdTVDNDBcdTkxNERcdTdGNkVcbmZ1bmN0aW9uIGdldENoaW5zZXNUaGVtZUNvbmZpZygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxuICAgICAgeyB0ZXh0OiAnXHU1MzVBXHU1QkEyJywgbGluazogJy9ndWlkZS9ibG9nL2luZGV4JyB9LFxuICAgICAgeyB0ZXh0OiAnXHU3QjE0XHU4QkIwJywgbGluazogJy9ndWlkZS9ib29rcycgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6ICdcdTY1RTVcdTVFMzgnLCBcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OidcdTYwMURcdTgwMDMnLGxpbms6Jy9ndWlkZS9kaWFyeS90aGluay9waGlsb3NvcGh5T2ZDb21wdXRlci5tZCd9LFxuICAgICAgICAgIHt0ZXh0OidcdTc1MUZcdTZEM0InLGxpbms6Jy9ndWlkZS9kaWFyeS9saWZlLzIwMjQuMS4yOS5tZCd9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiB7XG4gICAgICBcIi9ndWlkZS9kaWFyeVwiOltcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnXHU2MDFEXHU4MDAzJywgXG4gICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAge3RleHQ6J1x1OEJBMVx1N0I5N1x1NjczQVx1NzY4NFx1NTRGMlx1NUI2NicsbGluazonL2d1aWRlL2RpYXJ5L3RoaW5rL3BoaWxvc29waHlPZkNvbXB1dGVyLm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonXHU1NDBFXHU3QUVGXHU3Njg0XHU4MjdBXHU2NzJGJyxsaW5rOicvZ3VpZGUvYm9va3MvZGVlcExlYXJuaW5nMS5tZCd9LFxuICAgICAgICAgICAge3RleHQ6J1x1NTk4Mlx1NEY1NVx1OUFEOFx1NjU0OFx1NTczMFx1NUI2Nlx1NEU2MFx1RkYxRicsbGluazonL2d1aWRlL2RpYXJ5L2RhaWx5Lm1kJ31cbiAgICAgICAgICBdXG4gICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnXHU3NTFGXHU2RDNCJywgXG4gICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yOVx1NjVFNVx1NUUzOCcsbGluazonL2d1aWRlL2RpYXJ5L2xpZmUvMjAyNC4xLjI5Lm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonMjAyNC4xLjI4JyxsaW5rOicvZ3VpZGUvZGlhcnkvdGhpbmsubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OicyMDI0LjEuMjcnLGxpbms6Jy9ndWlkZS9kaWFyeS9kYWlseS5tZCd9XG4gICAgICAgICAgXVxuICAgICAgXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZ3VpZGUvcHJvamVjdFwiOltcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnXHU0RjM0XHU1QzE0XHU1NDBDXHU4ODRDJywgXG4gICAgICAgICAgbGluazonL2d1aWRlL3Byb2plY3QvYmFuZXIubWQnXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NkM1N1x1OTc1Mlx1OTYwMScsIFxuICAgICAgICAgIGxpbms6Jy9ndWlkZS9wcm9qZWN0L2hhbnFpbi5tZCdcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnMjAyM1x1NjU3MFx1NkEyMVx1NTZGRFx1OEQ1QicsIFxuICAgICAgICAgIGxpbms6Jy9ndWlkZS9wcm9qZWN0LzIzTWF0aGVtYXRpY2FsTW9kZWwubWQnXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgXCIvZ3VpZGUvcGFwZXJcIjpbXG4gICAgICAgIHsgXG4gICAgICAgICAgdGV4dDogJ1x1NTdGQVx1NEU4RVhYWFx1NzY4NFhYWCcsIFxuICAgICAgICAgIGxpbms6Jy9ndWlkZS9wYXBlci9maXJzdFBhcGVyLm1kJ1xuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2d1aWRlL2Jsb2cvXCI6W1xuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICcyMDI0JywgXG4gICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgeyB0ZXh0OiAnMVx1NjcwOCcsIFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgICAgIHt0ZXh0OidrXHU5MEJCXHU4RkQxXHU3Qjk3JyxsaW5rOicvZ3VpZGUvYmxvZy8yMDI0L2tubi5tZCd9LFxuICAgICAgICAgICAgICAgIHt0ZXh0OidcdTRFQTRcdTUzQzlcdTcxQjUnLGxpbms6Jy9ndWlkZS9ibG9nLzIwMjQvY3Jvc3NFbnRyb3B5Lm1kJ30sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICcyMDIzJywgXG4gICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgeyB0ZXh0OiAnMTJcdTY3MDgnLCBcbiAgICAgICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgICAgICB7dGV4dDonZ2l0XHU1RTM4XHU4OUMxXHU2NENEXHU0RjVDJyxsaW5rOicvZ3VpZGUvYmxvZy8yMDIzL2Fib3V0R2l0Lm1kJ30sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIFwiL2d1aWRlL2Jvb2tzXCI6W1xuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTdCOTdcdTZDRDUnLCBcbiAgICAgICAgICBjb2xsYXBzZWQ6dHJ1ZSxcbiAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICB7dGV4dDonXHU2ODExXHU3Njg0XHU1MjREXHU0RTJEXHU1NDBFXHU1RThGXHU5MDREXHU1Mzg2JyxsaW5rOicvZ3VpZGUvZGlhcnkvdGhpbmsvcGhpbG9zb3BoeU9mQ29tcHV0ZXIubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OidcdTU0MEVcdTdBRUZcdTc2ODRcdTgyN0FcdTY3MkYnLGxpbms6Jy9ndWlkZS9ib29rcy9kZWVwTGVhcm5pbmcxLm1kJ30sXG4gICAgICAgICAgICB7dGV4dDonXHU1OTgyXHU0RjU1XHU5QUQ4XHU2NTQ4XHU1NzMwXHU1QjY2XHU0RTYwXHVGRjFGJyxsaW5rOicvZ3VpZGUvZGlhcnkvZGFpbHkubWQnfVxuICAgICAgICAgIF1cbiAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTc1MUZcdTZEM0InLCBcbiAgICAgICAgICBjb2xsYXBzZWQ6dHJ1ZSxcbiAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICB7dGV4dDonMjAyNC4xLjI5XHU2NUU1XHU1RTM4JyxsaW5rOicvZ3VpZGUvZGlhcnkvbGlmZS8yMDI0LjEuMjkubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OicyMDI0LjEuMjgnLGxpbms6Jy9ndWlkZS9kaWFyeS90aGluay5tZCd9LFxuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yNycsbGluazonL2d1aWRlL2RpYXJ5L2RhaWx5Lm1kJ31cbiAgICAgICAgICBdXG4gICAgICBcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn1cblxuXG4vLyBcdTgzQjdcdTUzRDZcdTgyRjFcdTY1ODdcdTVFMDNcdTVDNDBcdTkxNERcdTdGNkVcbmZ1bmN0aW9uIGdldEVuZ2xpc2hUaGVtZUNvbmZpZygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6ICdcdThCQjBcdTVGNTUnLCBcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHt0ZXh0OidcdTYyODBcdTY3MkYnLGxpbms6Jy9ndWlkZS9kaWFyeS9jb2RlLm1kJ30sXG4gICAgICAgICAge3RleHQ6J1x1NjAxRFx1ODAwMycsbGluazonL2d1aWRlL2RpYXJ5L3RoaW5rLm1kJ30sXG4gICAgICAgICAge3RleHQ6J1x1NjVFNVx1NUUzOCcsbGluazonL2d1aWRlL2RpYXJ5L2RhaWx5Lm1kJ31cbiAgICAgICAgXVxuICAgIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6ICdcdTY1ODdcdTdBRTAnLCBcbiAgICAgICAgaXRlbXM6W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zOltcbiAgICAgICAgICAgICAge3RleHQ6J1x1N0I5N1x1NkNENScsbGluazonL2d1aWRlL2FydGljbGUvY29kZS5tZCd9LFxuICAgICAgICAgICAgICB7dGV4dDonXHU4QkExXHU3Qjk3XHU2NzNBXHU1N0ZBXHU3ODQwJyxsaW5rOicvZ3VpZGUvYXJ0aWNsZS9mb3VuZGF0aW9uLm1kJ30sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICAgIHt0ZXh0OidcdTk4NzlcdTc2RUUnLGxpbms6Jy9hcnRpY2xlL3Byb2plY3QubWQnfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIHNpZGViYXI6IHtcbiAgICAgIFwiL2d1aWRlL2RpYXJ5XCI6W1xuICAgICAgICB7IFxuICAgICAgICAgIHRleHQ6ICdcdTRFNjZcdTdDNERcdTdCMTRcdThCQjAnLCBcbiAgICAgICAgICBjb2xsYXBzZWQ6dHJ1ZSxcbiAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICB7dGV4dDonXHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwXHVGRjA4XHU4OTdGXHU3NERDXHU0RTY2XHVGRjA5JyxsaW5rOicvZ3VpZGUvZGlhcnkvY29kZS5tZCd9LFxuICAgICAgICAgICAge3RleHQ6J1x1NkRGMVx1NUVBNlx1NUI2Nlx1NEU2MFx1NTE2NVx1OTVFOCcsbGluazonL2d1aWRlL2Jvb2tzL2RlZXBMZWFybmluZzEubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OidcdTZERjFcdTVFQTZcdTVCNjZcdTRFNjBcdThGREJcdTk2MzYoXHU1N0ZBXHU0RThFTkxQKScsbGluazonL2d1aWRlL2RpYXJ5L2RhaWx5Lm1kJ31cbiAgICAgICAgICBdXG4gICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICB0ZXh0OiAnXHU2NUU1XHU1RTM4JywgXG4gICAgICAgICAgY29sbGFwc2VkOnRydWUsXG4gICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yOScsbGluazonL2d1aWRlL2RpYXJ5L2NvZGUubWQnfSxcbiAgICAgICAgICAgIHt0ZXh0OicyMDI0LjEuMjgnLGxpbms6Jy9ndWlkZS9kaWFyeS90aGluay5tZCd9LFxuICAgICAgICAgICAge3RleHQ6JzIwMjQuMS4yNycsbGluazonL2d1aWRlL2RpYXJ5L2RhaWx5Lm1kJ31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlTLFNBQVMsb0JBQW9CO0FBR3RVLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLGFBQWE7QUFBQSxFQUNiLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxZQUFZLENBQUMsQ0FBQztBQUFBLEVBQ25ELFNBQVM7QUFBQSxJQUNQLE1BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGFBQWEsc0JBQXNCO0FBQUEsSUFDckM7QUFBQSxJQUNBLElBQUk7QUFBQSxNQUNGLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGFBQWEsc0JBQXNCO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFLO0FBQUEsSUFDTCxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsSUFD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
