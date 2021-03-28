import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavBarElements';

  
const Navbar = () => {
    return (
      <>
        <Nav className="Nav">
          <NavMenu>
            <NavLink to='/home' activeStyle>
              Home
            </NavLink>
            {console.log("click home")}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Log In </NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;