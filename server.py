from flask import Flask

app = Flask(__name__)

all_classrooms = [
    {
        "name": "Turing",
        "events": [
                {
                    "name": "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
            {
                    "name": "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
            {
                    "name": "DS&A Lecture",
                    "start_time": "5PM",
                    "seats": "30"
                }
        ]

    },
    {
        "name": "Kay",
        "events": [
                {
                    "name": "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
            {
                    "name": "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
            {
                    "name": "DS&A Lecture",
                    "start_time": "5PM",
                    "seats": "30"
                }
        ]

    },
    {
        "name": "Collins",
        "events": [
                {
                    "name": "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
            {
                    "name": "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
            {
                    "name": "DS&A Lecture",
                    "start_time": "5PM",
                    "seats": "30"
                }
        ]

    }
]

user_bookings = [
    {
        "name": "Rails Lecture",
        "location": "Turing",
        "time": "1pm"
    },
    {
        "name": "React Lecture",
        "location": "Kay",
        "time": "10am"
    },
    {
        "name": "DS&A Lecture",
        "location": "Collins",
        "time": "5pm"
    }
]

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/classrooms")
def get_all_classrooms():
    return all_classrooms

@app.route("/<classroom>")
def get_classroom(classroom):
    return f"<p>Classroom: {classroom}</p>"

@app.route("/<classroom>/<event>")
def get_classroom_event(classroom, event):
    return f"<p>Classroom: {classroom}, Event: {event}</p>"

@app.route("/<classroom>/<event>/<int:seat>")
def get_classroom_event_seat(classroom, event, seat):
    return f"<p>Classroom: {classroom}, Event: {event}, Seat: {seat}</p>"

@app.route("/users")
def get_users():
    return "<p>All Users</p>"

@app.route("/<user>")
def get_user(user):
    return f"<p>User: {user}</p>"

@app.route("/<user>/<booking>")
def get_user_booking(user, booking):
    return user_bookings

if __name__ == "__main__":
    app.run(host="localhost", port="5000")
