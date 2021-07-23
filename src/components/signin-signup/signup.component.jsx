import { Component } from "react";

import FormInput from "./form-input.component";
import CommonButton from "./../common/commonbutton.component";
import "../../css/signin-signup/signup.css";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      displayName: "",
      email: "",
      password: "",
    });
    //calling	backend
  };

  render() {
    const { displayName, email, password } = this.state;
    return (
      <div className="signup-container">
        <h2>Create Account</h2>
        <span>Provide given information.</span>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <FormInput
            className="input-field"
            name="displayName"
            type="text"
            label="Display	Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            className="input-field"
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            className="input-field"
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <CommonButton>SIGN UP</CommonButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
