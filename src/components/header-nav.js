import { useState } from "react";
import HeaderNavUserIconDrawer from "./header-nav-user-icon-drawer";

const HeaderNav = () => {
  const [drawerState, setDrawerState] = useState(false);

  const changeDrawerState = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <div className="headernav">
        <ul className="headernav_ul">
          <li className="headernav_li">
            {
              //* change this button to a user icon
            }
            <button className="header_profile_icon" onClick={changeDrawerState}>
              Manu
            </button>
          </li>
        </ul>
      </div>
      <HeaderNavUserIconDrawer
        drawerState={drawerState}
        changeDrawer={changeDrawerState}
      />
    </>
  );
};

export default HeaderNav;
