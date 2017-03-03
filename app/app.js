import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

/* ==== Importing scenes ==== */
import Welcome from './scenes/welcome/welcome.jsx'
import Auth from './scenes/auth/auth.jsx'
import Account from './scenes/account/account.jsx'

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path='/' component={Welcome} />
		<Route path='/auth' component={Auth} />
		<Route path='/account' component={Account}>
			
		</Route>
	</Router>,
	document.querySelector('[app-root]')
);