export default {
    base: '/blog/',
    title: '丁仙的博客',
    description: 'VitePress我们喜欢你',
      themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
    ],
    sidebar: {
      '/notes/': [
        {
          text: '笔记总览',
          items: [
            { text: '25-7-8', link: '/notes/25-7-8.md' }
            
          ]
        }
      ]
    }
  }

  }
  