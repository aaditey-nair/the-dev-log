from dotenv import load_dotenv
from flask import Flask, jsonify

load_dotenv()
app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({"response": "server is up and running"})
