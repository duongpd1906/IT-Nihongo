import "./style.css";
import FormInput from "../../components/FormInput";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


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
			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, [user, navigate]);

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h1>サインアップ</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<button>サインアップ</button>
        <Link to="/login" className="link-login">
          ログイン
        </Link>
			</form>
		</div>
	);
}

export default Register;
