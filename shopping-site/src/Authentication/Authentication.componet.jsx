import "./Authentication.styles.scss";
import SignUpForm from "../components/Sign-up-form/Sign-up-form.componets";
import SignInForm from "../components/Sign-in-form/Sign-in-form.componets";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
