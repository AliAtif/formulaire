import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      emailValid: false,
      passwordValid: false,
      email: '',
      password: '',
      rememberMe: false,
      submitClick: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  };

  handleEmailChange (event) {
    const newEmail = event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail)

    this.setState({
      email: newEmail,
      emailValid: isEmail
    })
  };

  
  handlePasswordChange (event) {
    let newPasswordValid = false;
    if (event.target.value.length >= 6) {
      newPasswordValid = true
    } else {
      newPasswordValid = false
    }

    this.setState({
      password: event.target.value,
      passwordValid: newPasswordValid
    })
  };


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitClick: true
    })
  }

  render() {
    if (this.state.submitClick === true) {
      return (<div  className="col-8 justify-content-sm-center" style = {{backgroundColor: "#e7dada", width: 500, height:300, textAlign: "center", fontSize:20 }}>Form Submittied</div>)
    }
    return (<form className="form-group needs-validation container-fluid  justify-content-sm-center">
      <div className="row">
        <div className="col-8">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter email ..."
            name="email"
            className={ this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="col-8">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter password ..."
            className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
            required
            onChange={this.handlePasswordChange}
          />

        </div>
        <div className="col-8">
          <input name="remember" type="checkbox" />
          <label> Remember me</label>
        </div>
        <div className="col-8">
          <input type="submit" disabled={!this.state.emailValid || !this.state.passwordValid} value="Submit" className="btn btn-primary" onClick={this.handleSubmit} />
        </div>
      </div>
    </form>)
  }
};

export default App;