import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaWineGlass, FaCoffee, FaLeaf } from 'react-icons/fa';

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

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryTab = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const MenuItem = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const MenuItemImage = styled.div`
  height: 200px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const MenuItemContent = styled.div`
  padding: 1.5rem;
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const MenuItemTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin: 0;
  flex: 1;
`;

const MenuItemPrice = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: 1.2rem;
  margin-left: 1rem;
`;

const MenuItemDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const MenuItemTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.text};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const SpecialSection = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 4rem 0;
  margin: 4rem 0;
  text-align: center;
`;

const SpecialTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
`;

const SpecialDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('entradas');
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    // Simular llamada a la API
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.log('Usando datos de respaldo');
        // Datos de respaldo si la API no está disponible
        setMenuData({
          entradas: [
            {
              name: "Ensalada César",
              description: "Lechuga romana, crutones, parmesano y aderezo César",
              price: 1200,
              image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Vegetariano", "Sin Gluten"]
            },
            {
              name: "Ceviche de Salmón",
              description: "Salmón fresco marinado en limón y hierbas",
              price: 1800,
              image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Pescado", "Fresco"]
            },
            {
              name: "Bruschetta",
              description: "Pan tostado con tomate, albahaca y mozzarella",
              price: 900,
              image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Vegetariano", "Italiano"]
            }
          ],
          platos_principales: [
            {
              name: "Risotto de Hongos",
              description: "Arroz arborio con hongos porcini y parmesano",
              price: 2800,
              image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Vegetariano", "Cremoso"]
            },
            {
              name: "Salmón a la Parrilla",
              description: "Salmón fresco con vegetales asados",
              price: 3200,
              image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Pescado", "Saludable"]
            },
            {
              name: "Solomillo de Ternera",
              description: "Ternera premium con salsa de vino tinto",
              price: 4500,
              image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Carne", "Premium"]
            },
            {
              name: "Pasta Carbonara",
              description: "Fettuccine con panceta, huevo y parmesano",
              price: 2200,
              image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Pasta", "Italiano"]
            }
          ],
          postres: [
            {
              name: "Tiramisú",
              description: "Clásico postre italiano con café y mascarpone",
              price: 1200,
              image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Dulce", "Italiano"]
            },
            {
              name: "Crème Brûlée",
              description: "Crema de vainilla con azúcar caramelizado",
              price: 1100,
              image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Dulce", "Francés"]
            },
            {
              name: "Tarta de Chocolate",
              description: "Chocolate negro con frutos rojos",
              price: 1300,
              image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              tags: ["Chocolate", "Dulce"]
            }
          ]
        });
      }
    };

    fetchMenu();
  }, []);

  const categories = [
    { id: 'entradas', name: 'Entradas', icon: <FaLeaf /> },
    { id: 'platos_principales', name: 'Platos Principales', icon: <FaUtensils /> },
    { id: 'postres', name: 'Postres', icon: <FaCoffee /> }
  ];

  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-AR')}`;
  };

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Nuestra Carta</HeroTitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Descubre Nuestros Platos</SectionTitle>
          
          <CategoryTabs>
            {categories.map((category) => (
              <CategoryTab
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon} {category.name}
              </CategoryTab>
            ))}
          </CategoryTabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuGrid>
                {menuData[activeCategory]?.map((item, index) => (
                  <MenuItem
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <MenuItemImage image={item.image} />
                    <MenuItemContent>
                      <MenuItemHeader>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemPrice>{formatPrice(item.price)}</MenuItemPrice>
                      </MenuItemHeader>
                      <MenuItemDescription>{item.description}</MenuItemDescription>
                      <MenuItemTags>
                        {item.tags?.map((tag, tagIndex) => (
                          <Tag key={tagIndex}>{tag}</Tag>
                        ))}
                      </MenuItemTags>
                    </MenuItemContent>
                  </MenuItem>
                ))}
              </MenuGrid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>

      <SpecialSection>
        <Container>
          <SpecialTitle>Platos del Chef</SpecialTitle>
          <SpecialDescription>
            Cada semana, nuestro chef ejecutivo crea platos especiales únicos que 
            reflejan la temporada y los ingredientes más frescos disponibles. 
            ¡No te pierdas estas creaciones exclusivas!
          </SpecialDescription>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '1rem' }}>
                Especial de la Semana
              </h3>
              <p style={{ color: '#7F8C8D', marginBottom: '1rem' }}>
                <strong>Lomo de Cordero con Hierbas Provenzales</strong><br/>
                Cordero de la Patagonia marinado en hierbas frescas, servido con 
                puré de papas trufado y vegetales de estación.
              </p>
              <p style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '1.2rem' }}>
                $5,800
              </p>
            </div>
          </motion.div>
        </Container>
      </SpecialSection>
    </>
  );
};

export default Menu;
