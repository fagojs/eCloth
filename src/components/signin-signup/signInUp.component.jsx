import SignIn from "./signin.component";
import SignUp from "./signup.component";

const SignInUp = () => (
  <div
    className="signinup-container"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    }}
  >
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
