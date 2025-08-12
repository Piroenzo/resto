import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.medium};
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
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

const ContactInfo = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
    width: 20px;
  }
  
  div {
    h4 {
      color: ${props => props.theme.colors.secondary};
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
    }
    
    p {
      color: ${props => props.theme.colors.textLight};
      margin: 0;
      line-height: 1.6;
    }
  }
`;

const SocialSection = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4rem 0;
  margin: 4rem 0;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialCard = styled(motion.a)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h4 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialMedia = [
    {
      icon: <FaInstagram />,
      title: "Instagram",
      description: "Síguenos para ver nuestros platos",
      url: "https://instagram.com/laesquinagourmet"
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      description: "Mantente al día con nuestras novedades",
      url: "https://facebook.com/laesquinagourmet"
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      description: "Últimas noticias y eventos",
      url: "https://twitter.com/laesquinagourmet"
    },
    {
      icon: <FaTripadvisor />,
      title: "TripAdvisor",
      description: "Lee las reseñas de nuestros clientes",
      url: "https://tripadvisor.com/laesquinagourmet"
    }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Contáctanos</HeroTitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ContactGrid>
            <ContactForm onSubmit={handleSubmit}>
              <h3 style={{ color: '#D4AF37', marginBottom: '2rem', textAlign: 'center' }}>
                Envíanos un Mensaje
              </h3>
              
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
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Mensaje *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </SubmitButton>
            </ContactForm>
            
            <ContactInfo>
              <h3>Información de Contacto</h3>
              
              <ContactItem>
                <FaMapMarkerAlt />
                <div>
                  <h4>Dirección</h4>
                  <p>Av. San Martín 1234<br/>Buenos Aires, CABA 1001</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <FaPhone />
                <div>
                  <h4>Teléfono</h4>
                  <p>+54 11 1234-5678</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p>info@laesquinagourmet.com</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <FaClock />
                <div>
                  <h4>Horarios</h4>
                  <p>Lun-Jue: 12:00 - 23:00<br/>Vie-Sáb: 12:00 - 00:00<br/>Dom: 12:00 - 22:00</p>
                </div>
              </ContactItem>
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ color: '#D4AF37', marginBottom: '1rem' }}>¿Por qué contactarnos?</h4>
                <ul style={{ color: '#7F8C8D', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                  <li>Consultas sobre nuestro menú</li>
                  <li>Información sobre eventos especiales</li>
                  <li>Reservas para grupos grandes</li>
                  <li>Alergias alimentarias</li>
                  <li>Eventos corporativos</li>
                  <li>Sugerencias y comentarios</li>
                </ul>
              </div>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </Section>

      <SocialSection>
        <Container>
          <SectionTitle>Síguenos en Redes Sociales</SectionTitle>
          <SocialGrid>
            {socialMedia.map((social, index) => (
              <SocialCard
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
                <h4>{social.title}</h4>
                <p>{social.description}</p>
              </SocialCard>
            ))}
          </SocialGrid>
        </Container>
      </SocialSection>
    </>
  );
};

export default Contact;
