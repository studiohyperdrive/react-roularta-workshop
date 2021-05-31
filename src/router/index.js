import { Redirect, Route, Switch } from 'react-router';
import { HomeView, ListView, DetailView, HooksView } from '../views';

export const ROUTE_PATHS = {
	home: '/',
	hooks: '/hooks',
	list: {
		overview: '/list',
		detail: '/list/:detailId',
	},
};

export const RouteSwitch = () => {
	return (
		<Switch>
			<Route path={ROUTE_PATHS.home} component={HomeView} exact />
			<Route path={ROUTE_PATHS.hooks} component={HooksView} />
			<Route path={ROUTE_PATHS.list.overview} component={ListView} />
			{/* We can redirect from any path we want to any path */}
			<Redirect from="/overview" to={ROUTE_PATHS.list.overview} />
			<Route path={ROUTE_PATHS.list.detail} component={DetailView} />
			{/*
			  * If nothing matches our above routes, redirect the user to the home page
			  * This can be espacially handy for making 404 or maintenance routes
			  * In this case we redirect the user to the home page if the route does not exist
			  */}
			<Redirect from="*" to="/" />
		</Switch>
	);
};
