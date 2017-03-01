import React from 'react'
import { Link } from 'react-router'


class Welcome extends React.Component {
	render() {
		return (
			<section id="welcome" className="welcome">
				<div className="presentation">
					<h1 className="brand --gradient"></h1>
					<p className="description animated fadeInUp">
						Agora você pode ter o seu curriculo online. De forma rápida, fácil e atraente.
					</p>
					<Link to="auth" className="action animated fadeInUp">Começe</Link>
				</div>
			</section>
		);
	}
} 

export default Welcome;