import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password } = formFields;
  console.log(formFields);
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
      await createUserDocumentFromAuth(user);
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
    <div>
      <h1>Sign Up with your email and password</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="display-name">display name: </label>
        <input
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          id="display-name"
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          id="email"
          required
          autoComplete="off"
        />
        <label htmlFor="Password">Password: </label>
        <input
          type="Password"
          value={password}
          onChange={handleChange}
          name="password"
          id="Password"
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default SignUpForm;
