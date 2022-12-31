import SignUpForm from "../sign-up-form/Sign-up-form.component";
import SignInForm from "../sign-in-form/Sign-in-form.component";
import "./authentication.scss";
const SignComponent = () => {
  return (
    <div className="authentication-container">
      <br />
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignComponent;
