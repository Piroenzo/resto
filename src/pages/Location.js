import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaCar, FaSubway, FaBus } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 50vh;
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

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LocationInfo = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

const AddressCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: 2rem;
`;

const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const AddressTitle = styled.h4`
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

const AddressText = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin: 0;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  height: 400px;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const HoursSection = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4rem 0;
  margin: 4rem 0;
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const DayCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
  
  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    font-weight: 600;
  }
`;

const TransportationSection = styled.div`
  margin-top: 4rem;
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TransportCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
  
  svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h4 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.medium};
  
  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
  }
  
  div {
    h4 {
      color: ${props => props.theme.colors.secondary};
      margin: 0 0 0.5rem 0;
    }
    
    p {
      color: ${props => props.theme.colors.textLight};
      margin: 0;
    }
  }
`;

const Location = () => {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/location');
        const data = await response.json();
        setLocationData(data);
      } catch (error) {
        console.log('Usando datos de respaldo');
        setLocationData({
          address: "Av. San Martín 1234",
          city: "Buenos Aires",
          province: "CABA",
          postal_code: "1001",
          coordinates: {
            lat: -34.6037,
            lng: -58.3816
          },
          hours: {
            monday: "12:00 - 23:00",
            tuesday: "12:00 - 23:00",
            wednesday: "12:00 - 23:00",
            thursday: "12:00 - 23:00",
            friday: "12:00 - 00:00",
            saturday: "12:00 - 00:00",
            sunday: "12:00 - 22:00"
          }
        });
      }
    };

    fetchLocation();
  }, []);

  const days = [
    { key: 'monday', name: 'Lunes' },
    { key: 'tuesday', name: 'Martes' },
    { key: 'wednesday', name: 'Miércoles' },
    { key: 'thursday', name: 'Jueves' },
    { key: 'friday', name: 'Viernes' },
    { key: 'saturday', name: 'Sábado' },
    { key: 'sunday', name: 'Domingo' }
  ];

  const transportOptions = [
    {
      icon: <FaSubway />,
      title: "Subte",
      description: "Línea A - Estación San Martín (a 2 cuadras)"
    },
    {
      icon: <FaBus />,
      title: "Colectivos",
      description: "Líneas 5, 7, 24, 29, 39, 60, 92, 99, 102, 108, 124, 152"
    },
    {
      icon: <FaCar />,
      title: "Estacionamiento",
      description: "Estacionamiento privado disponible en el edificio"
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Teléfono",
      info: "+54 11 1234-5678"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "info@laesquinagourmet.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Dirección",
      info: "Av. San Martín 1234, CABA"
    }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Ubicación y Horarios</HeroTitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <LocationGrid>
            <LocationInfo>
              <h3>Encuéntranos en el Corazón de Buenos Aires</h3>
              <p>
                La Esquina Gourmet está ubicada en una de las zonas más vibrantes y 
                accesibles de la ciudad, en la intersección de Avenida San Martín y 
                la calle peatonal Florida.
              </p>
              <p>
                Nuestra ubicación privilegiada nos permite estar cerca de importantes 
                puntos de interés como el Obelisco, la Plaza de Mayo y el centro 
                financiero de la ciudad.
              </p>
              
              <AddressCard>
                <AddressHeader>
                  <FaMapMarkerAlt />
                  <AddressTitle>Dirección Completa</AddressTitle>
                </AddressHeader>
                <AddressText>
                  {locationData.address}<br/>
                  {locationData.city}, {locationData.province}<br/>
                  Código Postal: {locationData.postal_code}
                </AddressText>
              </AddressCard>
            </LocationInfo>
            
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889546!2d-58.38378908477025!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf425c81d1%3A0x5c085f8a0c0c0c0c!2sAv.%20San%20Mart%C3%ADn%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2ses!4v1234567890"
                title="Ubicación del restaurante"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapContainer>
          </LocationGrid>
        </Container>
      </Section>

      <HoursSection>
        <Container>
          <SectionTitle>Horarios de Atención</SectionTitle>
          <HoursGrid>
            {days.map((day, index) => (
              <DayCard
                key={day.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{day.name}</h4>
                <p>{locationData.hours?.[day.key] || "Cerrado"}</p>
              </DayCard>
            ))}
          </HoursGrid>
        </Container>
      </HoursSection>

      <Section>
        <Container>
          <TransportationSection>
            <SectionTitle>Cómo Llegar</SectionTitle>
            <TransportGrid>
              {transportOptions.map((option, index) => (
                <TransportCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {option.icon}
                  <h4>{option.title}</h4>
                  <p>{option.description}</p>
                </TransportCard>
              ))}
            </TransportGrid>
          </TransportationSection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle>Información de Contacto</SectionTitle>
            <ContactInfo>
              {contactInfo.map((contact, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {contact.icon}
                  <div>
                    <h4>{contact.title}</h4>
                    <p>{contact.info}</p>
                  </div>
                </ContactItem>
              ))}
            </ContactInfo>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Location;
