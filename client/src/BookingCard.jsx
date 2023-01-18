import './css/booking.css'

const BookingCard = ({booking}) => {
    return (
        <div className="bookingCard">
            <h6>
                {booking.event}
            </h6>
            <p>{booking.classroom}</p>
            <p>{booking.start_time.split(',')[0]}</p>
            <p>{booking.start_time.split(',')[1].slice(0, -3)}</p>
        </div>
    )
}
export default BookingCard