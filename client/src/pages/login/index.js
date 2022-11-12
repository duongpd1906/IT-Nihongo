import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
	email: "",
	password: "",
};

function Login() {
	const navigate = useNavigate();
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const { user, loginUser } = useAppContext();

	const onSubmit = (e) => {
		e.preventDefault();
		const { email, password } = values;
		if (!email || !password) {
			return;
		}
		const currentUser = { email, password };

		loginUser({
			currentUser,
			alertText: "Login Successful! Redirecting...",
		});
	};
	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, [user, navigate]);

	return (
		<div className="formLogin">
			<Form onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<h2>ログイン</h2>
					<Form.Label>電子メールアドレス</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						value={values.email}
						onChange={handleChange}
					/>
					<Form.Text className="text-muted">
						あなたのメールを他の人と共有することは決してありません。
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>パスワード</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={values.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="ログインターンを保存" />
				</Form.Group>
				<Button
					variant="primary"
					classname="loginButton "
					type="submit"
				>
					送信
				</Button>
			</Form>
		</div>
	);
}

export default Login;
