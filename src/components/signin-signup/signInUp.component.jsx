import SignIn from "./signin.component";
import SignUp from "./signup.component";

import "../../css/signin-signup/signinup.css";

const SignInUp = () => (
  <div className="signinup-container">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
