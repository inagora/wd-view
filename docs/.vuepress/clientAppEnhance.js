import { defineClientAppEnhance } from '@vuepress/client'
import DemoViewer from './DemoViewer.vue'
// import WdView from '../../dist/index.js'
import '../../dist/index.css'
import './assets/common.css'

export default defineClientAppEnhance(({app}) => {
  app.component('DemoViewer', DemoViewer)
  // app.use(WdView)
  app.mixin({
    mounted() {
      import('../../dist/index.js').then(m => {
        app.use(m);
      });
    }
  });
})