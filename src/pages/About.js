import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUtensils, FaHeart, FaStar, FaUsers, FaAward } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
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

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

const StoryImage = styled.div`
  height: 400px;
  background: url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.large};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
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

const ValueIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const TeamSection = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4rem 0;
  margin: 4rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
`;

const MemberName = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const AwardsSection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const AwardsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AwardItem = styled(motion.li)`
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border-radius: 25px;
  font-weight: 600;
`;

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Pasión por la Cocina",
      description: "Cada plato se prepara con amor y dedicación, cuidando cada detalle para crear experiencias únicas."
    },
    {
      icon: <FaStar />,
      title: "Excelencia",
      description: "Buscamos la perfección en cada aspecto de nuestro servicio, desde la calidad de los ingredientes hasta la presentación."
    },
    {
      icon: <FaUsers />,
      title: "Hospitalidad",
      description: "Tratamos a cada cliente como si fuera parte de nuestra familia, creando un ambiente cálido y acogedor."
    },
    {
      icon: <FaAward />,
      title: "Innovación",
      description: "Combinamos técnicas tradicionales con innovación culinaria para sorprender a nuestros comensales."
    }
  ];

  const team = [
    {
      name: "Chef María González",
      role: "Chef Ejecutiva",
      bio: "Con más de 20 años de experiencia en la cocina internacional, María lidera nuestro equipo culinario con creatividad y pasión."
    },
    {
      name: "Carlos Rodríguez",
      role: "Sous Chef",
      bio: "Especialista en cocina mediterránea y pescados, Carlos aporta su experiencia en restaurantes de renombre mundial."
    },
    {
      name: "Ana Martínez",
      role: "Chef Pastelera",
      bio: "Nuestra experta en postres artesanales, Ana crea dulces que son verdaderas obras de arte comestibles."
    }
  ];

  const awards = [
    "Mejor Restaurante 2023 - Guía Gastronómica",
    "5 Estrellas - TripAdvisor 2023",
    "Reconocimiento por Excelencia Culinaria 2022",
    "Chef del Año 2021 - Asociación Gastronómica",
    "Mejor Carta de Vinos 2020 - Revista Enológica"
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Nuestra Historia</HeroTitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <StorySection>
            <StoryContent>
              <h3>Una Tradición Familiar</h3>
              <p>
                La Esquina Gourmet nació en 1995 como el sueño de la familia González. 
                Comenzamos como un pequeño restaurante familiar en el corazón de Buenos Aires, 
                con la misión de compartir nuestra pasión por la cocina tradicional con un toque moderno.
              </p>
              <p>
                A lo largo de más de 25 años, hemos mantenido vivo el espíritu familiar mientras 
                evolucionamos para convertirnos en uno de los restaurantes más reconocidos de la ciudad. 
                Nuestro compromiso con la calidad y la autenticidad nunca ha cambiado.
              </p>
            </StoryContent>
            <StoryImage />
          </StorySection>

          <StorySection>
            <StoryImage style={{ order: -1 }} />
            <StoryContent>
              <h3>Nuestra Filosofía</h3>
              <p>
                Creemos que la comida es más que nutrición; es una experiencia que une a las personas, 
                crea recuerdos y celebra la vida. Cada ingrediente que seleccionamos, cada técnica que 
                perfeccionamos, y cada plato que servimos refleja esta filosofía.
              </p>
              <p>
                Trabajamos directamente con productores locales para asegurar la frescura y calidad 
                de nuestros ingredientes, y nuestro equipo culinario combina la tradición con la 
                innovación para crear platos que sorprenden y deleitan.
              </p>
            </StoryContent>
          </StorySection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Nuestros Valores</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </Section>

      <TeamSection>
        <Container>
          <SectionTitle>Nuestro Equipo</SectionTitle>
          <TeamGrid>
            {team.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MemberImage />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>

      <Section>
        <Container>
          <AwardsSection>
            <SectionTitle>Reconocimientos y Premios</SectionTitle>
            <AwardsList>
              {awards.map((award, index) => (
                <AwardItem
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {award}
                </AwardItem>
              ))}
            </AwardsList>
          </AwardsSection>
        </Container>
      </Section>
    </>
  );
};

export default About;
