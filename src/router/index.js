import { Redirect, Route, Switch } from 'react-router';
import { HomeView, ListView, DetailView, HooksView } from '../views';


export const RouteSwitch = () => {
	return (
		<Switch>
			<Route path="/" component={HomeView} exact />
			<Route path="/hooks" component={HooksView} />
			<Route path="/list" component={ListView} />
			{/* We can redirect from any path we want to any path */}
			<Redirect from="/overview" to="/list" />
			<Route path="/list/:detailId" component={DetailView} />
			{/*
			  * If nothing matches our above routes, redirect the user to the home page
			  * This can be espacially handy for making 404 or maintenance routes
			  * In this case we redirect the user to the home page if the route does not exist
			  */}
			<Redirect from="*" to="/" />
		</Switch>
	);
};
