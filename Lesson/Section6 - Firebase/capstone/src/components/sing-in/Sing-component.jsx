import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../sign-up-form/Sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";

const SignComponent = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  // const myfunction = async () => {
  //   let res = await getRedirectResult(auth);
  //   if (res) {
  //     const userDocRef = await createUserDocumentFromAuth(res.user);
  //   }
  // };
  // useEffect(() => {
  //   myfunction();
  // }, []);
  return (
    <div>
      Sing-component
      <br />
      <button onClick={logGoogleUser}>sign-in with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign-in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignComponent;
