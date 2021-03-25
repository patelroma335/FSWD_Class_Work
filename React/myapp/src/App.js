import React, { Component } from 'react';

class App extends Component {
    state = {
        email: "e",
        password: "p"
    };
    emailHandler = (event) => {
        this.setState({
            email: event.target.value,
        });
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value,
        });
    }
    render() { 
        return ( 
            <div>
              <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                  <a href="/" className="navbar-brand">
                      React Basics - Form Handling
                  </a>
              </nav>
              <form>
                  <label>Email</label>
                  <input type="text" value={this.state.email} onChange={this.emailHandler}/> <br/>
                  <label>Password</label>
                  <input type="text" name="email" value={this.state.password} onChange={this.passwordHandler}/>
                  <br/>
                  <br/>
                  <input type="submit" value="Submit" />
              </form>
              </div>
         );
    }
}
 
export default App;