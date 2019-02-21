import Vue from 'vue';
import Router from 'vue-router';
import Loading from '@/components/Loading';
import Home from '@/components/Home';
import Scroll from '@/components/Scroll';
import Slogan from '@/components/Slogan';
import Names from '@/components/Names';
import Edit from '@/components/Edit';
import Poster from '@/components/Poster';


Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: Loading,
	},
	{
		path: '/Home',
		component: Home,
	},
	{
		path: '/Scroll',
		component: Scroll,
	},
	{
		path: '/Slogan',
		component: Slogan,
	},
	{
		path: '/Names',
		component: Names,
	},
	{
		path: '/Edit',
		component: Edit,
	},
	{
		path: '/Poster',
		component: Poster,
	},
	{
		path: '*',
		component: Loading,
	}],
});
