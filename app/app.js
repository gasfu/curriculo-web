import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, RouteHandler, IndexRoute, browserHistory} from 'react-router'

/* ==== Importing scenes ==== */
import Welcome from './scenes/welcome/welcome.jsx'
import Auth from './scenes/auth/auth.jsx'

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path='/' component={Welcome} />
		<Route path='/auth' component={Auth} />
	</Router>,
	document.querySelector('[app-root]')
);