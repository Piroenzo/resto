# 🍽️ La Esquina Gourmet - Sitio Web del Restaurante

Un sitio web profesional y elegante para un restaurante gourmet, construido con React y Python Flask.

## ✨ Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Navegación Suave**: Transiciones y animaciones fluidas
- **Formularios Interactivos**: Sistema de reservas y contacto
- **API REST**: Backend robusto con Python Flask
- **Imágenes de Alta Calidad**: Imágenes profesionales de Unsplash
- **SEO Optimizado**: Metadatos y estructura semántica
- **Accesibilidad**: Diseño accesible y fácil de usar

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **Styled Components** - CSS-in-JS para estilos
- **Framer Motion** - Animaciones y transiciones
- **React Router** - Navegación entre páginas
- **React Icons** - Iconografía moderna

### Backend
- **Python 3.8+** - Lenguaje de programación
- **Flask** - Framework web ligero
- **Flask-CORS** - Soporte para CORS
- **Gunicorn** - Servidor WSGI para producción

## 📁 Estructura del Proyecto

```
restaurant/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.js       # Navegación principal
│   │   └── Footer.js       # Pie de página
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Home.js         # Página de inicio
│   │   ├── About.js        # Quienes somos
│   │   ├── Menu.js         # Carta del restaurante
│   │   ├── Location.js     # Ubicación y horarios
│   │   ├── Contact.js      # Formulario de contacto
│   │   └── Reservations.js # Sistema de reservas
│   ├── styles/             # Estilos y tema
│   │   ├── GlobalStyles.js # Estilos globales
│   │   └── theme.js        # Configuración del tema
│   ├── App.js              # Componente principal
│   └── index.js            # Punto de entrada
├── public/                 # Archivos estáticos
│   └── index.html         # HTML principal
├── app.py                  # Servidor Flask
├── requirements.txt        # Dependencias de Python
├── package.json           # Dependencias de Node.js
└── README.md              # Este archivo
```

## 🛠️ Instalación

### Prerrequisitos
- Node.js 16+ y npm
- Python 3.8+
- pip (gestor de paquetes de Python)

### 1. Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd restaurant
```

### 2. Instalar Dependencias del Frontend
```bash
npm install
```

### 3. Instalar Dependencias del Backend
```bash
pip install -r requirements.txt
```

## 🚀 Ejecutar el Proyecto

### Opción 1: Ejecutar Todo Junto (Recomendado)

#### Terminal 1 - Backend Flask
```bash
python app.py
```
El servidor estará disponible en: http://localhost:5000

#### Terminal 2 - Frontend React
```bash
npm start
```
La aplicación estará disponible en: http://localhost:3000

### Opción 2: Solo Frontend (Modo Demo)
Si solo quieres ver el frontend sin el backend:
```bash
npm start
```
Los formularios mostrarán mensajes de error pero podrás navegar por todas las páginas.

## 📱 Páginas Disponibles

1. **🏠 Inicio** - Hero section, características destacadas y estadísticas
2. **👥 Quienes Somos** - Historia, valores, equipo y premios
3. **🍽️ Carta** - Menú completo con categorías y precios
4. **📍 Ubicación** - Dirección, mapa, horarios y transporte
5. **📞 Contacto** - Formulario de contacto y redes sociales
6. **📅 Reservas** - Sistema completo de reservas online

## 🎨 Personalización

### Colores del Tema
Edita `src/styles/theme.js` para cambiar la paleta de colores:
```javascript
colors: {
  primary: '#D4AF37',      // Dorado principal
  secondary: '#2C3E50',    // Azul oscuro
  accent: '#E74C3C',       // Rojo vino
  // ... más colores
}
```

### Imágenes
Las imágenes se cargan desde Unsplash. Para usar imágenes propias:
1. Coloca las imágenes en `public/images/`
2. Actualiza las URLs en los componentes
3. Ajusta los estilos según sea necesario

### Contenido
Edita `app.py` para cambiar:
- Información del restaurante
- Menú y precios
- Horarios y ubicación
- Datos de contacto

## 🔧 Configuración Avanzada

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
FLASK_ENV=development
FLASK_DEBUG=True
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

### Base de Datos
Para conectar una base de datos real:
1. Instala `flask-sqlalchemy`
2. Configura la conexión en `app.py`
3. Crea modelos para reservas y contactos

### Email
Para enviar emails reales:
1. Instala `flask-mail`
2. Configura SMTP en `app.py`
3. Implementa envío de confirmaciones

## 📦 Construir para Producción

### Frontend
```bash
npm run build
```
Los archivos optimizados se generarán en `build/`

### Backend
```bash
gunicorn app:app
```
O usa un servidor WSGI como uWSGI o Waitress.

## 🌐 Despliegue

### Frontend (Netlify, Vercel, etc.)
1. Conecta tu repositorio
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `build`

### Backend (Heroku, DigitalOcean, etc.)
1. Asegúrate de que `requirements.txt` esté actualizado
2. Configura las variables de entorno
3. Usa `gunicorn app:app` como comando de inicio

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Características Técnicas

- **Lazy Loading**: Imágenes y componentes se cargan según sea necesario
- **SEO**: Metadatos, Open Graph y Twitter Cards
- **Performance**: Optimización de imágenes y código
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Cross-browser**: Compatible con navegadores modernos

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo
- Consulta la documentación

## 🎉 Agradecimientos

- **Unsplash** por las imágenes de alta calidad
- **React Team** por el framework increíble
- **Flask Team** por el backend robusto
- **Styled Components** por el CSS-in-JS elegante

---

**¡Disfruta creando experiencias gastronómicas digitales! 🍷✨**
