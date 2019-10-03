import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from './views/AboutUs.vue'
import Curriculum from './views/Curriculum.vue'
import Activities from './views/Activities.vue'
import Promotions from './views/Promotions.vue'
import Gallery from './views/Gallery.vue'
import Career from './views/Career.vue'
import Reviews from './views/Reviews.vue'
import ContactUs from './views/ContactUs.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'AboutUs',
			component: AboutUs
		},
		{
			path: '/Curriculum',
			name: 'Curriculum',
			component: Curriculum
		},
		{
			path: '/Activities',
			name: 'Activities',
			component: Activities
		},
		{
			path: '/Promotions',
			name: 'Promotions',
			component: Promotions
		},
		{
			path: '/Gallery',
			name: 'Gallery',
			component: Gallery
		},
		{
			path: '/Career',
			name: 'Career',
			component: Career
		},
		{
			path: '/Reviews',
			name: 'Reviews',
			component: Reviews
		},
		{
			path: '/ContactUs',
			name: 'ContactUs',
			component: ContactUs
		}
	]
})
