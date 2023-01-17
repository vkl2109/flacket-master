import './css/booking.css'

const BookingCard = ({booking}) => {
    return (
        <div className="bookingCard">
            <h4>
                {booking.event}
            </h4>
            <p>{booking.classroom}</p>
            <p>{booking.start_time}</p>
        </div>
    )
}
export default BookingCard