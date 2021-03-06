module.exports = {
  title: 'WdView',
  base: '/wd-view/',
  bundlerConfig: {
    // vue: {
    //   compilerOptions: {
    //     isCustomElement(tag) {
    //       return tag.startsWith('wd-')
    //     }
    //   }
    // }
  },
  themeConfig: {
    darkMode: 'false',
    lastUpdated: false,
    contributors: false,
    logo: 'https://s2.wandougongzhu.cn/s/b7/logo-_b70294.png',
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
          },
          {
            text: 'Checkbox 多选',
            link: '/checkbox'
          },
          {
            text: 'Datepicker 日期选择器',
            link: '/datepicker'
          },
          {
            text: 'Dropdown 下拉列表',
            link: '/dropdown'
          },
          {
            text: 'Form 表单',
            link: '/form'
          },
          {
            text: 'Input 输入框',
            link: '/input'
          },
          {
            text: 'Inputnumber 数组输入框',
            link: '/inputnumber'
          },
          {
            text: 'Link 链接',
            link: '/link'
          },
          {
            text: 'Menu 菜单',
            link: '/menu'
          },
          {
            text: 'Pagination 分页器',
            link: '/pagination'
          },
          {
            text: 'Radio 单选按钮',
            link: '/radio'
          },
          {
            text: 'Select 下拉选择',
            link: '/select'
          },
          {
            text: 'Switch 开关',
            link: '/switch'
          },
          {
            text: 'Table 表格',
            link: '/table'
          }
        ]
      }
    ]
  }
}