import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header className="profile">
				<img className="image" src="http://lorempixel.com/200/200/people/" />
				<h1 className="name">Gabriel Furlan</h1>
				<h2 className="email">gabrielfurlan05@gmail.com</h2>
			</header>
		);
	}
}

export default Header;