import { useState, useContext } from "react";
import FormInput from "../form-input/Form-input.component";
import "./sign-in-form.scss";
import {
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import { userContext } from "../../contexts/user.context";
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

  const { setCurrentUser } = useContext(userContext);
  const signInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopup();
    // await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  const handleSubmit = async (e) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
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
      <span>Sign in with your email and password</span>
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
          <Button buttonType={"inverted"} type="submit">
            Sign - in
          </Button>

          {/* <Button type="button" buttonType={"google"}>
            Google Sign - in
          </Button> */}
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
