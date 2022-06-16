import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../Utils/Firebase/Firebase.utils";

import SignUpForm from "../Sign-up-form/Sign-up-form.componets";
import SignInForm from "../Sign-in-form/Sign-in-form.componets";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
