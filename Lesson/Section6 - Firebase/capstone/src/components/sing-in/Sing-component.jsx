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
      <button onClick={logGoogleUser}>sign-in with Google</button>
    </div>
  );
};

export default SignComponent;
