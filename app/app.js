import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

/* ==== Importing scenes ==== */
import Welcome from './scenes/welcome/welcome.jsx'

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path='/' component={Welcome} />
	</Router>,
	document.querySelector('[app-root]')
);