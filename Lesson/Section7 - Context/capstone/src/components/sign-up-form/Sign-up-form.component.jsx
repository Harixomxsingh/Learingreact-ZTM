import { useState, useContext } from "react";
import FormInput from "../form-input/Form-input.component";
import "./sign-up-form.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import { userContext } from "../../contexts/user.context";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password } = formFields;
  const { currentUser, setCurrentUser } = useContext(userContext);
  console.log(currentUser);
  //   console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    event.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already is use");
      } else {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label={"Name: "}
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          id="display-name"
          required
        />
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
        {/* test  */}
        <FormInput
          label={"Password: "}
          type="Password"
          value={password}
          onChange={handleChange}
          name="password"
          id="Password"
          required
        />
        <Button buttonType={"inverted"} type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
