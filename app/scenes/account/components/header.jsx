import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header className="profile">
				<nav className="nav">
					<a href="#" className="icon --nav" />
					<a href="#" className="brand" />
					<a href="#" className="icon --globe"/>
				</nav>
				<img className="image" src="http://lorempixel.com/200/200/people/" />
				<h1 className="name">Cacilds Vidis</h1>
				<h2 className="email">cacildsvidis@gmail.com</h2>
			</header>
		);
	}
}

export default Header;