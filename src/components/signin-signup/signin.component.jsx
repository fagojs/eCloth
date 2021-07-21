import React from "react";

import FormInput from "./form-input.component";
import CommonButton from "../common/commonbutton.component";
import "../../css/signin-signup/signin.css";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin-container">
        <h2>Already have an account ?</h2>
        <span>Log in with information given below:</span>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <FormInput
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
          <CommonButton type="submit">LOG IN</CommonButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
