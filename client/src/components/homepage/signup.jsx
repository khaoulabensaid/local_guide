import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      password: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  emailHandler(e) {
    this.setState({
      email: e.target.value,
    });
  }
  nameHandler(e) {
    this.setState({
      fullName: e.target.value,
    });
  }



  passwordHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    axios
      .post("http://localhost:3000/api/signup", {
        email: this.state.email,
        fullName: this.state.fullName,
        password: this.state.password,
      })
      .then((res) => {
        console.log('logged In');
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  }
    render(){
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" value={this.state.email} onChange={this.emailHandler.bind(this)} />
        <br />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control"  value={this.state.fullName} onChange={this.nameHandler.bind(this)}/>
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control"  value={this.state.password} onChange={this.passwordHandler.bind(this)}/>
        <div className="text-center mt-4">
          <button type="submit" onClick={this.handleSubmit.bind(this)} >
            Register
          </button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);

};
}


export default Signup;