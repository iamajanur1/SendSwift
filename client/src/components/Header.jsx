import React, { useState } from 'react';
import styled from 'styled-components';
import Signup from './Auth/Signup'; // <-- Import the Signup component

// === Existing styles (HeaderWrapper, Container, FlexRow, etc) ===
const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
`;

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2d3748;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }

  a {
    color: #4a5568;
    font-weight: 500;
    text-decoration: none;

    &.active,
    &:hover {
      color: #2d3748;
    }
  }
`;

// Mobile Menu Panel
const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 100%;
  right: 1rem;
  left: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    display: none;
  }

  a {
    padding: 0.5rem 0;
    color: #4a5568;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #2d3748;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  color: #4a5568;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #2d3748;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 0.25rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  display: none;
  flex-direction: column;

  ${LanguageButton}:focus + & {
    display: flex;
  }
`;

const LanguageOption = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #edf2f7;
  }
`;

const BtnPrimary = styled.button`
  display: none;
  padding: 0.5rem 1rem;
  background-color: #4f46e5;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;

  @media (min-width: 640px) {
    display: inline-block;
  }
`;

const BtnText = styled.a`
  display: none;

  @media (min-width: 640px) {
    display: inline-block;
  }

  color: #4a5568;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #2d3748;
  }
`;

const MobileMenuButton = styled.button`
  display: inline-block;
  color: #4a5568;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    color: #2d3748;
  }
`;

// === Header Component ===
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <FlexRow>
          {/* Logo */}
          <div>
            <LogoWrapper href="#">
              <LogoBox>
                <img
                  src="./logo.png"
                  alt="Send Swift Logo"
                  width="80px"
                  height="auto"
                />
              </LogoBox>
              <LogoText>Send-Swift</LogoText>
            </LogoWrapper>
          </div>

          {/* Desktop Navigation */}
          <Nav>
            <a href="#" className="active">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </Nav>

          {/* Actions */}
          <Actions>
            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <LanguageButton>
                <svg width="20" height="20" stroke="currentColor" className="mr-1" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>EN</span>
                <svg width="16" height="16" stroke="currentColor" className="ml-1" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </LanguageButton>
              <LanguageDropdown>
                <LanguageOption>English</LanguageOption>
                <LanguageOption>Français</LanguageOption>
                <LanguageOption>Español</LanguageOption>
                <LanguageOption>Deutsch</LanguageOption>
              </LanguageDropdown>
            </div>

            <BtnText href="">Login</BtnText>
            <BtnPrimary onClick={() => setShowSignup(true)}>Sign Up</BtnPrimary>

            {/* Mobile Menu Button */}
            <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </MobileMenuButton>
          </Actions>
        </FlexRow>

        {/* Mobile Menu */}
        <MobileMenu open={menuOpen}>
          <a href="/home">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
          <a href="#" onClick={() => setShowSignup(true)}>Sign Up</a>
        </MobileMenu>

        {/* Show Signup Form */}
        {showSignup && <Signup />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
