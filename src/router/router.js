/** @format */

import Main from '@/pages/Main';
import CommentPage from '@/pages/CommentPage'; //comment page ni ulab olamiz
import AboutPage from '@/pages/About';
import CommentDetail from '@/pages/CommentDetail';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/comment', // yunaliwni registratsiyadan utqiziw
		component: CommentPage, // componentni ulaw
	},
	{
		path: '/about',
		component: AboutPage,
	},
	{
		path: '/comment/:id',
		component: CommentDetail,
	},
];
// Router yaratamiz
const router = createRouter({
	routes, // massivimizni berdik
	history: createWebHistory(process.env.BASE_URL), // har ichli parametr beriw
});

export default router;
