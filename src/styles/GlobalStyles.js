import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 50px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${props => props.theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
  }

  .btn-secondary {
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
    }
  }

  .text-center {
    text-align: center;
  }

  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }

  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    animation: slideInLeft 0.8s ease forwards;
  }

  @keyframes slideInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    animation: slideInRight 0.8s ease forwards;
  }

  @keyframes slideInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default GlobalStyles;
