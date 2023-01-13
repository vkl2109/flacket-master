const BookingCard = ({booking}) => {
    return (
        <div>
            Name:{booking.name} Location:{booking.location} Time:{booking.time}
        </div>
    )
}
export default BookingCard