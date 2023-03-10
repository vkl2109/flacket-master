import os
from flask import Flask, send_file, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Booking, Classroom, Event, Seat
import json
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)


@app.get('/')
def home():
    return send_file('welcome.html')


@app.post('/login')
def login():
    data = request.json
    print('data is', data)
    user = User.query.filter_by(username=data['username']).first()
    if not user:
        return jsonify({'error': 'No account found'}), 404
    else:
        given_password = data['password']
        if user.password == given_password:
            access_token = create_access_token(identity=user.id)
            return jsonify({'user': user.toJSON(), 'token': access_token}), 200
        else:
            return jsonify({'error': 'Invalid Password'}), 422


@app.post('/autologin')
@jwt_required()
def auto_login():
    current_user = get_jwt_identity()
    print('user_id is', current_user)

    user = User.query.get(int(current_user))

    if not user:
        return jsonify({'error': 'No account found'}), 404
    else:
        return jsonify(user.toJSON()), 200


@app.post('/users')
def create_user():
    data = request.json
    user = User(data['username'], data['email'],
                data['password'], data['avatarUrl'])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.toJSON()), 201


@app.route('/classrooms')
def get_all_classrooms():
    classrooms = Classroom.query.all()
    if len(classrooms):
        return jsonify([room.toJSON() for room in classrooms])
    else:
        return {}, 404


@app.get('/bookings/<int:user>')
def get_all_bookings(user):
    bookings = Booking.query.all()
    if len(bookings):
        bookings_data = []
        for booking in bookings:
            if booking.user_id == user:
                bookings_data.append(booking.toJSON())
        return jsonify(bookings_data)
    else:
        return {}, 404


@app.post('/bookings')
def add_booking():
    data = request.json
    user_id = data['user']
    seat_id = data['seat']
    booking = Booking(user_id, seat_id)
    db.session.add(booking)
    db.session.commit()
    return jsonify(booking.toJSON()), 201


@app.delete('/bookings/<int:booking_id>')
def delete_booking(booking_id):
    booking = Booking.query.get(booking_id)
    db.session.delete(booking)
    db.session.commit()
    return {"msg": "booking deleted"}, 204


@app.patch('/seats/<int:seat_id>')
def update_seat(seat_id):
    data = request.json
    seat = Seat.query.get(seat_id)

    if seat:
        seat.is_empty = False if data['is_empty'] == "False" else True
        seat.student_name = data['student']
        db.session.commit()
        return jsonify(seat.toJSON()), 202
    else:
        return {"error": "seat not found"}, 404


@app.get('/events')
def get_all_events():
    events = Event.query.all()
    if len(events):
        return jsonify([event.toJSON() for event in events])
    else:
        return {}, 404


@app.get('/events/<int:event_id>')
def get_event(event_id):
    event = Event.query.get(event_id)
    if event:
        return jsonify([seat.toJSON() for seat in event.seats])
    else:
        return {}, 404


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3001))
