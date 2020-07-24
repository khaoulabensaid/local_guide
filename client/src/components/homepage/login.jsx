import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailHandler(e){
        this.setState({
            email: e.target.value
        })
    }

    passwordHandler(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        Axios.post("http://localhost:3000/api/signin", {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log('you are Logged In')
        })
        .catch((err)=> {
            console.log(err)
        })
        e.preventDefault();
    }

    render() {
        return (
            <div id="container">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.emailHandler.bind(this)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordHandler.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit.bind(this)}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}


