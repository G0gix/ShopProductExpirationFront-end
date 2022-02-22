import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './PagesStyles/LogInPage.css'

const Login = () => {
	const [login, setlogin] = useState("");
	const [password, setpassword] = useState("");
	const [incorrectData, setincorrectData] = useState("")
	const [usersData, setUserData] = useState([]);
	const [passwordShown, setPasswordShown] = useState(false);
	const navigate = useNavigate();

	const goToEmployeePage = () => navigate("/employeePage")

	async function CheckDataFromDB(e) {
		e.preventDefault();

		if (login === "" || login === " " || login === null || password === "" || password == " " || password == null) {
			setincorrectData("Логин и Пароль не должны быть пусты");
		} else {
			setincorrectData("");
			let getAccess = await fetch(`https://localhost:44396/account/?userName=${login}&password=${password}`, { method: "GET" });

			if (getAccess.ok) {
				let accessData = await getAccess.json();
				console.log(accessData.Succeeded);
				goToEmployeePage();
			} else {
				setincorrectData("Неверный логин или пароль")
			}
		}
	}

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

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
					<div className='form__password'>
						<input className='password__inputPassword'
							type={passwordShown ? "text" : "password"}
							placeholder='Пароль'
							onChange={value => setpassword(value.target.value)}
						/>
						<label >
							<input onClick={togglePassword} type="checkbox" value="value-1" />
							<span style={{ marginLeft: 5 }}>Показать пароль</span>
						</label>
					</div>
					<div className='incorrectData'>{incorrectData}</div>
					<input className='form__submit' type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Login;