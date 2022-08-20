from flask import Flask

app=Flask(__name__)

# @app.route("/a")
# def fun():
#     return "Hello world"

@app.route("/y/<int:a>/<int:b>")
def fu(a,b):
    return f"{a+b}"

if __name__=="__main__":
    app.run(debug=True)
