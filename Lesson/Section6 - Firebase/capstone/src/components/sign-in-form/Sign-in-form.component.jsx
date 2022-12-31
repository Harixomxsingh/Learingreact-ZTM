import { useState } from "react";
import FormInput from "../form-input/Form-input.component";
import "./sign-in-form.scss";
import {
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import { ButtonComponent } from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  //   console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  const handleSubmit = async (e) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password for email, Please enter correct");
      } else if (error.code === "auth/user-not-found") {
        alert("user not found associated with this email");
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label={"Email: "}
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          id="email"
          required
          autoComplete="off"
        />
        <FormInput
          label={"Password: "}
          type="Password"
          value={password}
          minLength="6"
          onChange={handleChange}
          name="password"
          id="Password"
          required
        />
        <div className="buttonContainer">
          <ButtonComponent buttonType={"inverted"} type="submit">
            Sign - in
          </ButtonComponent>

          <ButtonComponent type="button" buttonType={"google"}>
            Google Sign - in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
