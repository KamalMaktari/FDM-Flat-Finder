## Flask app.
# https://flask.palletsprojects.com/en/2.2.x/quickstart/#apis-with-json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():    
    return "<p>Hello, World!</p>"


@app.route("/listings")
def get_listings():  
    listings =  [{
        "Address" : "Mile End", 
        "PCM" : 5000,
        "NumBathroom" : 2,
        "NumBedroom" : 3 },
        { 
        "Address" : "WhiteChapel", 
        "PCM" : 4500,
        "NumBathroom" : 2,
        "NumBedroom" : 3  },
        {
        "Address" : "Stepney Green", 
        "PCM" : 3000,
        "NumBathroom" : 2,
        "NumBedroom" : 3  },
        { 
        "Address" : "Kings Cross", 
        "PCM" : 6000,
        "NumBathroom" : 2,
        "NumBedroom" : 3  },
        { 
        "Address" : "Edgeware", 
        "PCM" : 1400,
        "NumBathroom" : 2,
        "NumBedroom" : 2  }]
    # Jsonify required to return the data as json
    response = jsonify(listings)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Content-Type', 'application/json')
    return response
  
@app.route("/accounts")
def get_accounts():
    accounts = [{
        "username" : "Ben",
        "password" : "Sapez",
        "profile_picture": "https://example.com/profiles/ben.png",
        "job_position": "Software Engineer",
        "address": {
            "city": "Anytown",
            "state": "CA"
        }
    }]
    response = jsonify(accounts)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Content-Type', 'application/json')
    return response

    



if __name__ == "__main__":   
    app.run()
