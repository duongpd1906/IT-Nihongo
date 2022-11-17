import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./login.css";

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
		<div id="login">
			<div className="login-container">
				<div className="login-background"></div>
				<div className="login-form">
					<h2 className="login-form-title">ログイン</h2>
					<Form className="login-form-container" onSubmit={onSubmit}>
						<Form.Group className="login-form-group" controlId="formBasicEmail">
							<Form.Label className="login-form-label">電子メールアドレス</Form.Label>
							<Form.Control className="login-form-control"
								type="email"
								name="email"
								placeholder="Enter email"
								value={values.email}
								onChange={handleChange}
							/>
							<Form.Text className="login-form-text">
								あなたのメールを他の人と共有することは決してありません。
							</Form.Text>
						</Form.Group>
						<Form.Group className="login-form-group" controlId="formBasicPassword">
							<Form.Label className="login-form-label">パスワード</Form.Label>
							<Form.Control className="login-form-control"
								type="password"
								placeholder="Password"
								name="password"
								value={values.password}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="login-form-group" controlId="formBasicCheckbox">
							<Form.Check className="login-form-check" type="checkbox" label="ログインターンを保存" />
						</Form.Group>
						<Button
							className="login-form-button"
							type="submit"
						>
							送信
						</Button>
						<p className="form-link-register">
							まだアカウントを持っていませんか?
							<Link to="/register">
								<b>サインアップ</b>
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Login;
