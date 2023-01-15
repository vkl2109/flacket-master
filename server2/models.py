from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json
from datetime import datetime

db = SQLAlchemy()
migrate = Migrate(db)

class User(db.Model):
    # __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User %r>' % self.username


class Booking(db.Model):
    # __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    seat_id = db.Column(db.Integer, db.ForeignKey('seat.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, user_id, seat_id):
        self.user_id = user_id
        self.seat_id = seat_id

    def __repr__(self):
        return '<Bookings %r>' % self.user_id


class Classroom(db.Model):
    # __tablename__ = 'classrooms'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())
    events = db.relationship('Event', backref='classroom', lazy=True)

    def toJSON(self):
        return {"id": self.id, "name": self.name, "events": self.events}

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Classroom %r>' % self.name


class Event(db.Model):
    # __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    classroom_id = db.Column(db.Integer, db.ForeignKey('classroom.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())
    seats = db.relationship('Seat', backref='event', lazy=True)


    def toJSON(self):
        return {"id": self.id, "name": self.name, "start_time": self.start_time.strftime("%m/%d/%Y, %H:%M:%S"), "end_time": self.end_time.strftime("%m/%d/%Y, %H:%M:%S"), "classroom_id": self.classroom_id}


    def __init__(self, name, start_time, end_time, classroom_id):
        self.name = name
        self.start_time = start_time
        self.end_time = end_time
        self.classroom_id = classroom_id

    def __repr__(self):
        return '<Event %r>' % self.name


class Seat(db.Model):
    # __tablename__ = 'seats'
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    seat_number = db.Column(db.Integer, nullable=False)
    is_empty = db.Column(db.Boolean(), nullable=False)
    student_name = db.Column(db.String(80))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())
    bookings = db.relationship('Booking', backref='seat', lazy=True)


    def __init__(self, event_id, seat_number, is_empty, student_name):
        self.event_id = event_id
        self.seat_number = seat_number
        self.is_empty = is_empty
        self.student_name = student_name

    def __repr__(self):
        return '<Seat %r>' % self.seat_number
