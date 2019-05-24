module.exports = {
    title: '測試範本',
    description: 'template for vuepress',
    base: '/vuepress-template',
    repo: 'https://github.com/dolatrpg/vuepress-template',
    themeConfig: {
        sidebarDepth: 0,
        sidebar:[
            ['/', '簡介'],
            {
                title: '內頁',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/page/demo'
                ]
            }
        ]
    }
}
