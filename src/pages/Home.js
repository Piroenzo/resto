import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUtensils, FaStar, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.secondary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const StatsSection = styled(Section)`
  background: ${props => props.theme.colors.backgroundDark};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  h3 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.5rem 3rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

const Home = () => {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Cocina Gourmet",
      description: "Platos elaborados con ingredientes frescos y técnicas culinarias de vanguardia."
    },
    {
      icon: <FaStar />,
      title: "Experiencia Premium",
      description: "Servicio excepcional y ambiente elegante para momentos especiales."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Ubicación Privilegiada",
      description: "En el corazón de Buenos Aires, fácil acceso y estacionamiento disponible."
    }
  ];

  const stats = [
    { number: "25+", label: "Años de Experiencia" },
    { number: "1000+", label: "Clientes Satisfechos" },
    { number: "50+", label: "Platos Únicos" },
    { number: "4.9", label: "Calificación Promedio" }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            La Esquina Gourmet
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sabor y tradición en cada bocado
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton to="/carta">Ver Carta</CTAButton>
            <CTAButton to="/reservas" className="btn-secondary">Hacer Reserva</CTAButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>¿Por qué elegirnos?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </Section>

      <StatsSection>
        <Container>
          <SectionTitle>Nuestros Números</SectionTitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <SectionTitle>¿Listo para una experiencia gastronómica única?</SectionTitle>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#7F8C8D' }}>
              Reserva tu mesa y descubre por qué somos el restaurante favorito de Buenos Aires
            </p>
            <CTAButton to="/reservas">Reservar Ahora</CTAButton>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
