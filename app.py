from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Datos del restaurante
restaurant_data = {
    "info": {
        "name": "La Esquina Gourmet",
        "tagline": "Sabor y tradición en cada bocado",
        "description": "Somos un restaurante familiar que combina la tradición culinaria con técnicas modernas para crear experiencias gastronómicas únicas.",
        "founded": 1995,
        "chef": "Chef María González",
        "specialties": ["Cocina mediterránea", "Pescados frescos", "Carnes premium", "Postres artesanales"]
    },
    "location": {
        "address": "Av. San Martín 1234",
        "city": "Buenos Aires",
        "province": "CABA",
        "postal_code": "1001",
        "coordinates": {
            "lat": -34.6037,
            "lng": -58.3816
        },
        "hours": {
            "monday": "12:00 - 23:00",
            "tuesday": "12:00 - 23:00",
            "wednesday": "12:00 - 23:00",
            "thursday": "12:00 - 23:00",
            "friday": "12:00 - 00:00",
            "saturday": "12:00 - 00:00",
            "sunday": "12:00 - 22:00"
        }
    },
    "contact": {
        "phone": "+54 11 1234-5678",
        "email": "info@laesquinagourmet.com",
        "reservations": "reservas@laesquinagourmet.com"
    },
    "menu": {
        "entradas": [
            {"name": "Ensalada César", "description": "Lechuga romana, crutones, parmesano y aderezo César", "price": 1200},
            {"name": "Ceviche de Salmón", "description": "Salmón fresco marinado en limón y hierbas", "price": 1800},
            {"name": "Bruschetta", "description": "Pan tostado con tomate, albahaca y mozzarella", "price": 900}
        ],
        "platos_principales": [
            {"name": "Risotto de Hongos", "description": "Arroz arborio con hongos porcini y parmesano", "price": 2800},
            {"name": "Salmón a la Parrilla", "description": "Salmón fresco con vegetales asados", "price": 3200},
            {"name": "Solomillo de Ternera", "description": "Ternera premium con salsa de vino tinto", "price": 4500},
            {"name": "Pasta Carbonara", "description": "Fettuccine con panceta, huevo y parmesano", "price": 2200}
        ],
        "postres": [
            {"name": "Tiramisú", "description": "Clásico postre italiano con café y mascarpone", "price": 1200},
            {"name": "Crème Brûlée", "description": "Crema de vainilla con azúcar caramelizado", "price": 1100},
            {"name": "Tarta de Chocolate", "description": "Chocolate negro con frutos rojos", "price": 1300}
        ]
    },
    "social_media": {
        "instagram": "https://instagram.com/laesquinagourmet",
        "facebook": "https://facebook.com/laesquinagourmet",
        "twitter": "https://twitter.com/laesquinagourmet",
        "tripadvisor": "https://tripadvisor.com/laesquinagourmet"
    },
    "awards": [
        "Mejor Restaurante 2023 - Guía Gastronómica",
        "5 Estrellas - TripAdvisor 2023",
        "Reconocimiento por Excelencia Culinaria 2022"
    ],
    "events": [
        "Cenas de degustación mensuales",
        "Clases de cocina los sábados",
        "Eventos corporativos y celebraciones",
        "Cenas románticas especiales"
    ]
}

@app.route('/')
def home():
    return jsonify({"message": "API del Restaurante La Esquina Gourmet"})

@app.route('/api/info')
def get_info():
    return jsonify(restaurant_data["info"])

@app.route('/api/location')
def get_location():
    return jsonify(restaurant_data["location"])

@app.route('/api/contact')
def get_contact():
    return jsonify(restaurant_data["contact"])

@app.route('/api/menu')
def get_menu():
    return jsonify(restaurant_data["menu"])

@app.route('/api/menu/<category>')
def get_menu_category(category):
    if category in restaurant_data["menu"]:
        return jsonify(restaurant_data["menu"][category])
    return jsonify({"error": "Categoría no encontrada"}), 404

@app.route('/api/social')
def get_social():
    return jsonify(restaurant_data["social_media"])

@app.route('/api/awards')
def get_awards():
    return jsonify(restaurant_data["awards"])

@app.route('/api/events')
def get_events():
    return jsonify(restaurant_data["events"])

@app.route('/api/reservation', methods=['POST'])
def create_reservation():
    data = request.get_json()
    
    # Validación básica
    required_fields = ['name', 'email', 'phone', 'date', 'time', 'guests']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Campo requerido: {field}"}), 400
    
    # Aquí normalmente se guardaría en una base de datos
    reservation = {
        "id": datetime.now().strftime("%Y%m%d%H%M%S"),
        "name": data['name'],
        "email": data['email'],
        "phone": data['phone'],
        "date": data['date'],
        "time": data['time'],
        "guests": data['guests'],
        "status": "confirmada",
        "created_at": datetime.now().isoformat()
    }
    
    return jsonify({
        "message": "Reserva creada exitosamente",
        "reservation": reservation
    }), 201

@app.route('/api/contact', methods=['POST'])
def send_contact():
    data = request.get_json()
    
    # Validación básica
    if not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({"error": "Nombre, email y mensaje son requeridos"}), 400
    
    # Aquí normalmente se enviaría un email
    contact = {
        "id": datetime.now().strftime("%Y%m%d%H%M%S"),
        "name": data['name'],
        "email": data['email'],
        "message": data['message'],
        "received_at": datetime.now().isoformat()
    }
    
    return jsonify({
        "message": "Mensaje enviado exitosamente",
        "contact": contact
    }), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
