/** @format */

import { createApp } from 'vue';
import App from './app.vue';
import components from '@/components/UI';
import router from '@/router/router.js'

const app = createApp(App);
components.forEach((component) => {
	app.component(component.name, component);
});

app
.use(router)
.mount('#app');
