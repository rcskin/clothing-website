import React from "react";
import logo from "../images/logoRS.jpeg";

//create header component
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, //using boolean state
      username: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //create handle functions to be called when user clicks Log In button
  handleLogin() {
    this.setState({
      isLoggedIn: true,
      username: "Rachel", //hard coded a name for this task purposes
    });
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false,
      username: "", //clear the username
    });
  }

  //render and create button
  render() {
    //create variables and assign them to the props in state
    const { isLoggedIn, username } = this.state;

    return (
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
          <h1 className="header-title">Skinner's Shopping Space</h1>
        </div>
        <div className="header-right">
          {isLoggedIn ? (
            <div>
              <h3 className="header-welcome">Welcome, {username}!</h3>
              <button onClick={this.handleLogout} className="header-button">
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={this.handleLogin} className="header-button">
              Log In
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Header;

/*Note to reviewer:
I used the following sources to read more about setState after a mentor call about
how I would like to revise the code I originally made for my Header page and button
because we hadn't learned about it yet in previous task. 
I used: https://reactjs.org/docs/react-component.html#setstate
and when looking at various websites to try and learn how to make code as succint as 
possible, I came across 'destructuring assignments' and used this source to
learn more and implement it in my practice for my render variables.
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
I used this destructuring to then have it = to this.state to extract the values for
'isLoggedIn' and 'username'. The syntax used allows for creating 2 new variables and 
assigns them values from the state object. I learned this is a shorthand way of 
extracting props from an object and assigning variables with the same names. 
*/
