import React from "react";
import {
  HeaderContainer,
  LogoWrapper,
  MenuItemsWrapper,
  ProfileWrapper,
} from "./Header.styled";
import { Logo } from "../../assets";

function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={Logo} alt="" srcset="" />
      </LogoWrapper>
      <MenuItemsWrapper>
        <span>Model S</span>
        <span>Model 3</span>
        <span>Model X</span>
        <span>Model Y</span>
        <span>Solar Roof</span>
        <span>Solar Panels</span>
      </MenuItemsWrapper>
      <ProfileWrapper>
        <span>Shop</span>
        <span>Account</span>
        <span>Menu</span>
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
