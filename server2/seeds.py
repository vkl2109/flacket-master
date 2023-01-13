from app import app
from models import db, User, Booking, Classroom, Event, Seat

print('Seeding database ... 🌱')
# Add your seed data here
user1 = User('test123', 'test@example.com','12345')
db.session.add(user1)
db.session.commit()

rooms = ['Turing', 'Collins', 'Kay']
event_names = ['Rails', 'Python', 'React']

for room in rooms:
    new_classroom = Classroom(room)
    for e in event_names:
        new_event = Event(e, '2023-01-13 12:00:00.000', '2023-01-14 13:00:00.000', new_classroom.id)
        for i in range(30):
            new_seat = Seat()
        db.session.add(new_event)
        db.session.commit()
    db.session.add(new_classroom)
    db.session.commit()

print('Done! 🌳')