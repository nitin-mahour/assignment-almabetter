from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .db_config import *

app = Flask(__name__, static_folder='static')

# initialize db
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.init_app(app)

from . import routes
