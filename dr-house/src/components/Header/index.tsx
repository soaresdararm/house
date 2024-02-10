import React from "react";
import styled from "styled-components";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Logo> HOUSE</Logo>
      <Nav>
        <NavItem href="#">Sobre</NavItem>
        <NavItem href="#">Onde Assistir</NavItem>
        <NavItem href="#">Personagens</NavItem>
      </Nav>
    </header>
  );
};

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #8463B5;
  color: #fff;
  font-family: Georgia;
  box-shadow: 0 4px 16px rgb(83, 77, 77); 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.text`
  font-family: Georgia;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const NavItem = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: #fff;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export default StyledHeader;
