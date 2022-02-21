import React from 'react';
import { Form, Button } from "react-bootstrap"
import './PagesStyles/LogInPage.css'

const Login = () => {
	return (
		<div className='Login'>
			<div className="LogIn__container">
				<form className='container__form' action="post">
					<label className='form__labelLogin' htmlFor="">Введите Логин</label>
					<input className='form__inputLogin' type="text" placeholder='Логин' />
					<label className='form__labelPassword' htmlFor="">Введите Пароль</label>
					<input className='form__inputPassword' type="password" placeholder='Пароль' />
					<input className='form__submit' type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Login;