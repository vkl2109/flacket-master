from app import app
from models import db, User, Booking, Classroom, Event, Seat

with app.app_context():
    db.drop_all()
    db.create_all()
    print('Seeding database ... 🌱')
    # Add your seed data here
    user1 = User('test123', 'test@example.com','12345')
    db.session.add(user1)
    db.session.commit()

    rooms = ['Turing', 'Collins', 'Kay']
    event_names = ['Rails', 'Python', 'React']

    # for room in rooms:
    #     new_classroom = Classroom(room)
    #     for e in event_names:
    #         new_event = Event(e, '2023-01-13 12:00:00.000', '2023-01-13 13:00:00.000', new_classroom.id)
    #         for i in range(30):
    #             new_seat = Seat(new_event.id, i, False)
    #         db.session.add(new_event)
    #         db.session.commit()
    #     db.session.add(new_classroom)
    #     db.session.commit()

    print('Done! 🌳')