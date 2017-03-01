import React from 'react'
import { Link } from 'react-router'

class Auth extends React.Component {
	constructor() {
		super();
		this.state = {errors: {
			email: null,
			password: null
		}};
	}

	render() {
		return (
			<section className='auth'>
				<form method='POST' name='authForm' className='form --inverse'>
					<h1 className="brand --inverse"></h1>
					
					<div className="alert --error">Ops! Seu email ou a senha está errada.</div>

					<div className='input-group'>
						<label className='label'>Email</label>
						<input name='email' className='input' />
					</div>
					<div className='input-group'>
						<label className='label'>Senha</label>
						<input name='password' className='input' placeholder='' />
					</div>
					<div className='input-group'>
						<button className='button --default --block'>Entre</button>
					</div>
					<div className='input-group'>
						<div className="description">
							Ainda não tem cadastro? <Link to='#' className='link --inverse'>Registre-se agora.</Link>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default Auth;