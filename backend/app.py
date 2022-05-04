from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({"response": "server is up and running"})
