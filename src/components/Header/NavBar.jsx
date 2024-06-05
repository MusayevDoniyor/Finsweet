import React from "react";
import SiteLogo from "./Logo";
import ListLinks from "./NavLinks";
import DonateButton from "./Button";

const NavBar = () => {
  return (
    <nav>
      <div>
        <SiteLogo />
      </div>

      <div className="ListBtn">
        <ListLinks />

        <DonateButton />
      </div>
    </nav>
  );
};

export default NavBar;
