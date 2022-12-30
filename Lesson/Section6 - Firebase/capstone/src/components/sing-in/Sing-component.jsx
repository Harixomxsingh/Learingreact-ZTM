import SignUpForm from "../sign-up-form/Sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignComponent = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <div>
      Sing-component
      <br />
      <button onClick={logGoogleUser}>sign-in with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignComponent;
