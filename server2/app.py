import os
from flask import Flask, send_file, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Booking, Classroom, Event, Seat
import json

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

@app.get('/')
def home():
    return send_file('welcome.html')

@app.route('/classrooms')
def get_all_classrooms():
    classrooms = Classroom.query.all()
    if len(classrooms):
        return jsonify([room.toJSON() for room in classrooms])
    else:
        return {}, 404

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3000))