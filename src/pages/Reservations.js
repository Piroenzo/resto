import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUsers, FaPhone, FaEnvelope, FaUtensils, FaStar } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
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

const ReservationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ReservationForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const FormTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: ${props => props.theme.colors.gray};
    cursor: not-allowed;
    transform: none;
  }
`;

const ReservationInfo = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: 1.5rem;
  
  h4 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
    margin: 0;
  }
`;

const FeaturesSection = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4rem 0;
  margin: 4rem 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
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

const Message = styled.div`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  
  &.success {
    background: ${props => props.theme.colors.success}20;
    color: ${props => props.theme.colors.success};
    border: 1px solid ${props => props.theme.colors.success};
  }
  
  &.error {
    background: ${props => props.theme.colors.error}20;
    color: ${props => props.theme.colors.error};
    border: 1px solid ${props => props.theme.colors.error};
  }
`;

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: '¡Reserva confirmada exitosamente! Te enviaremos un email de confirmación pronto.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          occasion: '',
          specialRequests: ''
        });
      } else {
        throw new Error('Error al crear la reserva');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Error al crear la reserva. Por favor, inténtalo de nuevo o contáctanos por teléfono.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const occasions = [
    'Cena romántica',
    'Cumpleaños',
    'Aniversario',
    'Cena de negocios',
    'Celebración familiar',
    'Otro'
  ];

  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Reservas Online",
      description: "Reserva tu mesa de forma rápida y sencilla desde cualquier dispositivo."
    },
    {
      icon: <FaClock />,
      title: "Confirmación Inmediata",
      description: "Recibe confirmación instantánea de tu reserva por email y SMS."
    },
    {
      icon: <FaUsers />,
      title: "Grupos Grandes",
      description: "Aceptamos reservas para grupos de hasta 20 personas con previo aviso."
    },
    {
      icon: <FaStar />,
      title: "Servicio Premium",
      description: "Disfruta de nuestro servicio personalizado y atención especial."
    }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Reserva tu Mesa</HeroTitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ReservationGrid>
            <ReservationForm onSubmit={handleSubmit}>
              <FormTitle>Haz tu Reserva</FormTitle>
              
              {message && (
                <Message className={message.type}>
                  {message.text}
                </Message>
              )}
              
              <FormGroup>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="date">Fecha *</Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="time">Hora *</Label>
                <Select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una hora</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="guests">Número de Personas *</Label>
                <Select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona el número</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="occasion">Ocasión Especial</Label>
                <Select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una ocasión</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="specialRequests">Solicitudes Especiales</Label>
                <TextArea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Alergias, preferencias especiales, decoración, etc..."
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Confirmando Reserva...' : 'Confirmar Reserva'}
              </SubmitButton>
            </ReservationForm>
            
            <ReservationInfo>
              <h3>Información Importante</h3>
              
              <InfoCard>
                <h4><FaClock /> Horarios de Reserva</h4>
                <p>
                  <strong>Almuerzo:</strong> 12:00 - 15:00<br/>
                  <strong>Cena:</strong> 19:00 - 22:30<br/>
                  Las reservas se confirman hasta 30 minutos antes del horario.
                </p>
              </InfoCard>
              
              <InfoCard>
                <h4><FaUsers /> Política de Grupos</h4>
                <p>
                  Para grupos de más de 8 personas, contacta con nosotros con al menos 
                  48 horas de anticipación. Ofrecemos menús especiales para eventos.
                </p>
              </InfoCard>
              
              <InfoCard>
                <h4><FaPhone /> Contacto Directo</h4>
                <p>
                  <strong>Teléfono:</strong> +54 11 1234-5678<br/>
                  <strong>Email:</strong> reservas@laesquinagourmet.com<br/>
                  Para reservas urgentes o cambios, llámanos directamente.
                </p>
              </InfoCard>
              
              <InfoCard>
                <h4><FaUtensils /> Menús Especiales</h4>
                <p>
                  Ofrecemos opciones vegetarianas, sin gluten y para alérgicos. 
                  Consulta con nuestro personal sobre tus necesidades dietéticas.
                </p>
              </InfoCard>
              
              <div style={{ 
                background: '#D4AF37', 
                color: 'white', 
                padding: '1.5rem', 
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>¿Necesitas Ayuda?</h4>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>
                  Si tienes problemas con la reserva online, no dudes en llamarnos. 
                  Estamos aquí para ayudarte a planificar tu experiencia perfecta.
                </p>
              </div>
            </ReservationInfo>
          </ReservationGrid>
        </Container>
      </Section>

      <FeaturesSection>
        <Container>
          <SectionTitle>¿Por qué Reservar con Nosotros?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </>
  );
};

export default Reservations;
