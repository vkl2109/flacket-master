from app import app
from models import db, User, Booking, Classroom, Event, Seat
from datetime import datetime

def run_seeds():
    with app.app_context():
        db.drop_all()
        db.create_all()
        print('Seeding database ... 🌱')
        # Add your seed data here
        user1 = User('test123', 'test@example.com', '12345')
        db.session.add(user1)
        db.session.commit()

        rooms = ['Turing', 'Collins', 'Kay', 'Borg', 'Johnson']
        event_names = ['Rails', 'Python', 'React']
        start_times = ['01/13/23 10:00:00',
                    '01/13/23 13:00:00', '01/13/23 17:00:00']
        end_times = ['01/13/23 11:00:00',
                    '01/13/23 14:00:00', '01/13/23 18:00:00']

        for room in rooms:
            new_classroom = Classroom(room)
            db.session.add(new_classroom)
            db.session.commit()
            for i in range(3):
                new_event = Event(event_names[i], datetime.strptime(
                    start_times[i], '%m/%d/%y %H:%M:%S'), datetime.strptime(end_times[i], '%m/%d/%y %H:%M:%S'), new_classroom.id)
                db.session.add(new_event)
                db.session.commit()
                for i in range(16):
                    new_seat = Seat(new_event.id, i, True, '')
                    db.session.add(new_seat)
                    db.session.commit()
            print(new_classroom.toJSON())
        for i in range(1, 4):
            new_booking = Booking(user1.id, i)
            db.session.add(new_booking)
            db.session.commit()
        print('Done! 🌳')
run_seeds()