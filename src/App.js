import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {

  constructor(){

    super();
    this.state = {
      email: '',
      password: '',
    };

  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
    
      <div className="container-fluid">
        <div className="row">
         

         <div className ="col-sm-3 col-6">
            <h1>Login</h1>
                        
            <form onSubmit={this.handleSubmit}>
              <label>
                 Email address
                 <input type="email" placeholder="Enter mail ..." value={this.state.email} onChange={this.handleEmailChange}/>
              </label>

              <label>
                 Passwword
                 <input type="password" placeholder="Enter password ..." value={this.state.password} onChange={this.handlePasswordChange}/>
              </label> 
                 <div>
                  <input type="checkbox" ></input>
                  <label>Remember me</label>
                 </div>

                 <div>
                    <button type="submit">Submit</button>
                 </div>
  
            </form>

          </div>

        </div>
        
      </div>
    );
  }
};

export default App;