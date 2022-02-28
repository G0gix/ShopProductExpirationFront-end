import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import './PagesStyles/LogInPage.css'
import { useAuth } from '../components/hooks/useAuth';

const Login = () => {
	//#region useStates
	const [login, setlogin] = useState("");
	const [password, setpassword] = useState("");
	const [incorrectData, setincorrectData] = useState("")
	const [usersData, setUserData] = useState([]);
	const [passwordShown, setPasswordShown] = useState(false);
	//#endregion
	const navigate = useNavigate();
	const location = useLocation();
	const { signin } = useAuth()

	async function CheckDataFromDB(e) {
		e.preventDefault();

		if (login === "" || login === " " || login === null || password === "" || password == " " || password == null) {
			setincorrectData("Логин и Пароль не должны быть пусты");
		} else {
			setincorrectData("");
			let getAccess = await fetch(`https://localhost:44396/account/?userName=${login}&password=${password}`, { method: "POST",
				headers:{
					Accept: 'application/json',
					'Content-Type': 'API-Key"',
				},
				credentials: 'include',
			});

			if (getAccess.ok) {
				let accessData = await getAccess.json();
				signin(accessData, () => navigate("/employeePage", { replace: true }))
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
					<label className='form__labelLogin' htmlFor="">Введите логин</label>
					<input className='form__inputLogin'
						type="text"
						placeholder='Логин'
						onChange={value => setlogin(value.target.value)}
					/>
					<label className='form__labelPassword' htmlFor="">Введите пароль</label>
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