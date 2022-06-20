import SignUpForm from "../Sign-up-form/Sign-up-form.componets";
import SignInForm from "../Sign-in-form/Sign-in-form.componets";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
