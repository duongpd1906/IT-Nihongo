import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { useAppContext } from "../../context/appContext";
import "./register.css";


function Register() {
	const navigate = useNavigate();

	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { user, registerUser } = useAppContext();

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "ユーザ名",
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special character!",
			label: "ユーザ名",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "メールアドレス",
			errorMessage: "It should be a valid email address!",
			label: "メールアドレス",
			required: true,
		},
		{
			id: 3,
			name: "password",
			type: "password",
			placeholder: "パスワード",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
			label: "パスワード",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			placeholder: "パスワードを認証する",
			errorMessage: "Passwords don't match!",
			label: "パスワードを認証する",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password, username } = values;
		if (!email || !password || !username) {
			return;
		}
		const currentUser = { email, password, username };


		registerUser({
			currentUser,
		});
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (user) {
			// setTimeout(() => {
			// 	navigate("/");
			// }, 1000);
		}
	}, [user, navigate]);

	return (
		<div id="register">
			<div className="register-container">
				<div className="register-background"></div>
				<div className="register-form">
					<h2 className="register-form-title">サインアップ</h2>
					<form className="register-form-container" onSubmit={handleSubmit}>
						{inputs.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
							/>
						))}
						<button className="register-form-button">サインアップ</button>
						<p className="form-link-login">
							まだアカウントを持っていませんか?
							<Link to="/login">
								<b> ログイン</b>
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;