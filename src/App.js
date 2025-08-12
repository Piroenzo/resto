import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<About />} />
              <Route path="/carta" element={<Menu />} />
              <Route path="/ubicacion" element={<Location />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/reservas" element={<Reservations />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
