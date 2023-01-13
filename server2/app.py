import os
from flask import Flask, send_file
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)

@app.get('/')
def home():
    return send_file('welcome.html')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3000))