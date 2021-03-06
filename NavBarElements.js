
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #ffc600;
  height: 55px;
  display: flex;
  /*justify-content: space-between;*/
  padding: 4px;
  justify-content: flex-end; 
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  


  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 

  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
justify-content: flex-end; 
  border-radius: 10px;
  background: #a2d6f9;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f4a261;
    color: #000000;
  }
`;