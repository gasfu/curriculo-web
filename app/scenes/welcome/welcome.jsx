import React from 'react'

class Welcome extends React.Component {
	render() {
		return (
			<section id="welcome" className="welcome">
				<div className="presentation">
					<h1 className="brand --inverse"></h1>
					<p className="description animated fadeInUp">
						Agora você pode ter o seu curriculo online. De forma rápida, fácil e atraente.
					</p>
					<a href="#" className="action animated fadeInUp">Entrar</a>
				</div>
			</section>
		);
	}
} 

export default Welcome;