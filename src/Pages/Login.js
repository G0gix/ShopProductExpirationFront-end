import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap"
import './PagesStyles/LogInPage.css'

const Login = () => {
	const [login, setlogin] = useState("");
	const [password, setpassword] = useState("");
	const [incorrectData, setincorrectData] = useState("")
	const [usersData, setUserData] = useState([]);

	async function CheckDataFromDB(e) {
		e.preventDefault();

		if (login == "" || login == " " || login == null || password == "" || password == " " || password == null) {
			setincorrectData("Логин и Пароль не должны быть пусты");
		} else {
			setincorrectData("");
			console.log(`login ${login} password ${password}`);

			let getAccess = await fetch(`https://localhost:44396/account/?userName=${login}&password=${password}`, { method: "GET" });
			let accessData = await getAccess.json();
			console.log(accessData);
		}
	}




	return (
		<div className='Login'>
			<div className="LogIn__container">
				<form className='container__form'
					action="post"
					onSubmit={CheckDataFromDB}
				>
					<label className='form__labelLogin' htmlFor="">Введите Логин</label>
					<input className='form__inputLogin'
						type="text"
						placeholder='Логин'
						onChange={value => setlogin(value.target.value)}
					/>
					<label className='form__labelPassword' htmlFor="">Введите Пароль</label>
					<input className='form__inputPassword'
						type="password"
						placeholder='Пароль'
						onChange={value => setpassword(value.target.value)}
					/>
					<div className='incorrectData'>{incorrectData}</div>
					<input className='form__submit' type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Login;