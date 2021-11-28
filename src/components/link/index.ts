import { App } from 'vue';
import Link from './link.vue';

const install = (app: App) => {
    app.component(Link.name, Link);
}

export default install;