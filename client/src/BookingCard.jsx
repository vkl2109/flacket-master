import './css/booking.css'

const BookingCard = ({booking}) => {
    return (
        <div className="bookingCard">
            <h4>
                {booking.name}
            </h4>
            <p>{booking.location}</p>
            <p>{booking.time}</p>
        </div>
    )
}
export default BookingCard