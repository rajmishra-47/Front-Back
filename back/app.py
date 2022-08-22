import requests
import configparser
from flask import Flask

app=Flask(__name__)

# @app.route("/a")
# def fun():
#     return "Hello world"

def fun(a):
    if a%2==0:
        return "yes"
    else:
        return "no"
        
@app.route("/y/<int:a>")
def fu(a):
    return fun(a)

if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0",port=5000)
