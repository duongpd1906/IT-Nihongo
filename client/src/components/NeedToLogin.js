import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function NeedToLogin(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					警告
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>ログイン警告</h4>
				<p>このアクションを実行する前にログインする必要があります</p>
				<Link to="/login">ここをクリックしてログイン</Link>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default NeedToLogin;
