// @ts-nocheck
import { App } from "vue";
import Link from "./link.vue";

Link.install = (app: App) => {
  app.component(Link.name, Link);
};

export default Link;
