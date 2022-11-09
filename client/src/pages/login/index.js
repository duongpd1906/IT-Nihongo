import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';


function login() {
  return (
   <div className='formLogin'>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2>ログイン</h2>
        <Form.Label>電子メールアドレス</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
あなたのメールを他の人と共有することは決してありません。
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>パスワード</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="ログインターンを保存" />
      </Form.Group>
      <Button variant="primary" classname="loginButton " type="submit">
      送信
      </Button>
    </Form>
   </div>
  );
}



export default login;