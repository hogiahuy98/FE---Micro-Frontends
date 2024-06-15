import { createApp } from "vue";

import Banner from "./index.vue";

export default (el: any, props: any) => {
  createApp(Banner, props).mount(el);
};
