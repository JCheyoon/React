import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../Utils/Firebase/Firebase.utils";

import SingUpForm from "../Sign-up-form/Sign-up-form.componets";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};
export default SignIn;
