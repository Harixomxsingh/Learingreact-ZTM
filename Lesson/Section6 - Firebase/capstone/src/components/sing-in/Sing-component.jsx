import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const SignComponent = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      Sing-component
      <button onClick={logGoogleUser}>sign-in with Google</button>
    </div>
  );
};

export default SignComponent;
