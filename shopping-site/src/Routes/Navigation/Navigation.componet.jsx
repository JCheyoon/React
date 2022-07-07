import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./Navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
