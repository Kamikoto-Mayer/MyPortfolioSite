import HomePage from '../pages/home_page/home_page';
import ProjectPage from '../pages/projects_page/project_page';
import AboutPage from '../pages/about_page/about_page';
import ContactPage from '../pages/contacts_page/contact_page';


const routesConfig = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/projects',
		exact: true,
		component: ProjectPage,
	},
	{
		path: '/about',
		exact: true,
		component: AboutPage,
	},
	{
		path: '/contacts',
		exact: true,
		component: ContactPage,
	},
];

export default routesConfig;