import './css/booking.css'

const BookingCard = ({booking}) => {
    return (
        <div>
            {booking.name} {booking.location} {booking.time}
        </div>
    )
}
export default BookingCard