import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";

import "./Navigation.styles.scss";
import { UserContext } from "../../Contexts/User.context";
import { CartContext } from "../../Contexts/Cart.context";

import { signOutUser } from "../../Utils/Firebase/Firebase.utils";
import CartIcon from "../../components/Cart-icon/Cart-icon.componet";
import CartDropdown from "../../components/Cart-dropdown/Cart-dropdown.componet";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  //whenever you sign out i essentially want to show sign in
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
