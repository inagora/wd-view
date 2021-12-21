module.exports = {
  title: 'WdView',
  base: '/wd-view/',
  themeConfig: {
    darkMode: 'false',
    logo: 'https://s1.wandougongzhu.cn/s/ed/logo2x_b9a58d.png',
    navbar: [
      {
        text: '版本',
        children: ['v1.0', 'v2.0']
      },
      {
        text: 'GitHub',
        link: 'https://github.com/inagora/wd-view'
      }
    ],
    sidebar: [
      {
        text: '安装',
        link: '/install'
      },
      {
        text: '组件',
        children: [
          {
            text: 'layout',
            link: '/layout'
          },
          {
            text: 'Button 按钮',
            link: '/button'
          }
        ]
      }
    ]
  }
}