from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/classrooms")
def get_all_classrooms():
    return "<p>All Classrooms</p>"

@app.route("/<classroom>")
def get_classroom(classroom):
    return f"<p>Classroom: {classroom}</p>"

@app.route("/<classroom>/<event>")
def get_classroom(classroom, event):
    return f"<p>Classroom: {classroom}, Event: {event}</p>"

@app.route("/<classroom>/<event>/<int:seat>")
def get_classroom(classroom, event, seat):
    return f"<p>Classroom: {classroom}, Event: {event}, Seat: {seat}</p>"

@app.route("/users")
def get_classroom():
    return "<p>All Users</p>"

@app.route("/<user>")
def get_classroom(user):
    return f"<p>User: {user}</p>"

@app.route("/<user>/<reservation>")
def get_classroom(user, reservation):
    return f"<p>User: {user}, Reservation: {reservation}</p>"

if __name__ == "__main__":
    app.run(host="localhost", port="5000")
