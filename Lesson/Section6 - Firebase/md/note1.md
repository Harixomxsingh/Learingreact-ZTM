# Firebase with react

if we want to add user to our application so we need to make a authentication, but we have **firebase**,

so just go to firebase website firebase.google.com

**and create a project**

but in order to make connection with our react application we need to install firebase to our react application

```bash
yarn add firebase
```

### authentication with firebase

now you install firebase and create your own project in firebase website

Now go to your firebase project click on web icon and create a name and copy your config code and create a new file called fireabse.utils.js (its up to you) and paste it

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjflgvpheQ4LjXOPU9GYEogz3m6LkgZWk",
  authDomain: "react-learn-ztm-crow-e-commers.firebaseapp.com",
  projectId: "react-learn-ztm-crow-e-commers",
  storageBucket: "react-learn-ztm-crow-e-commers.appspot.com",
  messagingSenderId: "1091644674837",
  appId: "1:1091644674837:web:6cfdee668fdfaeb3654f1c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
```

in order to use auth with firebase we need to import some function from firebase

```js
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
```

## sign in with google pop up

now we import everything that we need to sign in via google

we create a instance of GoogleAuthProvider()

and select one google account that we wanna sign in

```js
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
```

then we create auth function and put in on google sign in function with provider

```js
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
```

one thing remember that, in firebase console we should enable google auth, in authentication page in website

then create a react component and log the user data to console

```jsx
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
```
