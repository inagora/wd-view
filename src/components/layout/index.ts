// @ts-nocheck
import { App } from 'vue';
import Layout from './layout.vue';
import LayoutHeader from './components/header.vue';
import LayoutSider from './components/sider.vue';
import LayoutContent from './components/content.vue';
import LayoutFooter from './components/footer.vue';

Layout.install = (app: App) => {
    app.component(Layout.name, Layout);
    app.component(LayoutHeader.name, LayoutHeader);
    app.component(LayoutSider.name, LayoutSider);
    app.component(LayoutContent.name, LayoutContent);
    app.component(LayoutFooter.name, LayoutFooter);
}

export default Layout;