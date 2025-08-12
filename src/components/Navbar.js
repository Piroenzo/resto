import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUtensils } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.scrolled ? props.theme.colors.primary : props.theme.colors.white};
  transition: color 0.3s ease;
  
  svg {
    margin-right: 0.5rem;
    font-size: 2rem;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? props.theme.colors.text : props.theme.colors.white};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? props.theme.colors.text : props.theme.colors.white};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Inicio' },
    { to: '/quienes-somos', text: 'Quienes Somos' },
    { to: '/carta', text: 'Carta' },
    { to: '/ubicacion', text: 'Ubicación' },
    { to: '/contacto', text: 'Contacto' },
    { to: '/reservas', text: 'Reservas' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavContainer>
          <Logo to="/" scrolled={scrolled}>
            <FaUtensils />
            La Esquina Gourmet
          </Logo>
          
          <NavLinks>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
                scrolled={scrolled}
              >
                {link.text}
              </NavLink>
            ))}
          </NavLinks>
          
          <MobileMenuButton onClick={toggleMobileMenu} scrolled={scrolled}>
            <FaBars />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={closeMobileMenu}>
              <FaTimes />
            </CloseButton>
            
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
              >
                {link.text}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
