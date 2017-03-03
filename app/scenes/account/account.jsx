import React from 'react'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

class Account extends React.Component {
	render() {
		return (
			<section className='account'>
				<Header />
				<Footer />
			</section>
		);
	}
}

export default Account;