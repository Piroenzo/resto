import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUtensils, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaTripadvisor, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #BDC3C7;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #BDC3C7;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
    width: 16px;
  }
  
  span {
    color: #BDC3C7;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495E;
  padding-top: 2rem;
  text-align: center;
  
  p {
    color: #BDC3C7;
    margin: 0;
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <h3>
                <FaUtensils style={{ marginRight: '0.5rem' }} />
                La Esquina Gourmet
              </h3>
              <p>
                Más de 25 años ofreciendo experiencias gastronómicas únicas en el 
                corazón de Buenos Aires. Combinamos tradición culinaria con 
                innovación para crear momentos inolvidables.
              </p>
              <SocialLinks>
                <SocialLink href="https://facebook.com/laesquinagourmet" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </SocialLink>
                <SocialLink href="https://instagram.com/laesquinagourmet" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href="https://twitter.com/laesquinagourmet" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialLink>
                <SocialLink href="https://tripadvisor.com/laesquinagourmet" target="_blank" rel="noopener noreferrer">
                  <FaTripadvisor />
                </SocialLink>
              </SocialLinks>
            </FooterSection>
            
            <FooterSection>
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/quienes-somos">Quienes Somos</Link></li>
                <li><Link to="/carta">Carta</Link></li>
                <li><Link to="/ubicacion">Ubicación</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/reservas">Reservas</Link></li>
              </ul>
            </FooterSection>
            
            <FooterSection>
              <h3>Información de Contacto</h3>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>Av. San Martín 1234, CABA</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>+54 11 1234-5678</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>info@laesquinagourmet.com</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>reservas@laesquinagourmet.com</span>
              </ContactItem>
            </FooterSection>
            
            <FooterSection>
              <h3>Horarios</h3>
              <p>
                <strong>Lunes - Jueves:</strong><br/>
                12:00 - 23:00
              </p>
              <p>
                <strong>Viernes - Sábado:</strong><br/>
                12:00 - 00:00
              </p>
              <p>
                <strong>Domingo:</strong><br/>
                12:00 - 22:00
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#95A5A6' }}>
                * Los horarios pueden variar en días festivos
              </p>
            </FooterSection>
          </FooterGrid>
          
          <FooterBottom>
            <p>
              © {currentYear} La Esquina Gourmet. Todos los derechos reservados. | 
              Diseñado con ❤️ para crear experiencias gastronómicas únicas.
            </p>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>
      
      <ScrollToTop onClick={scrollToTop} title="Volver arriba">
        <FaArrowUp />
      </ScrollToTop>
    </>
  );
};

export default Footer;
