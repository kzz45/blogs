module.exports = {
    base: "/blogs/",
    head: [
        ['link', {
            rel: 'icon',
            href: 'walle.png'
        }]
    ],
    title: '达那蛋',
    description: '达那蛋',
    theme: '@vuepress/theme-default',
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
        navbar: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Python',
                link: '/python/'
            },
            {
                text: 'Golang',
                link: '/golang/'
            },
            {
                text: '日报',
                link: '/daily/'
            },
            {
                text: '算法',
                link: '/algorithm/'
            },
            {
                text: '监控',
                link: '/monitor/'
            },
            // {
            //     text: '投资',
            //     link: '/money/'
            // },
        ]
    }
}