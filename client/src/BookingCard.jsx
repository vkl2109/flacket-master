import './css/booking.css'

const BookingCard = ({booking}) => {

    const convertTime = (value) => {
        let minutes = value.slice(15,17)
        let h = value.slice(11, 14)
        let AMorPM = h < 12 ? "AM":"PM"
        let hours = (h%12) || 12
        let time = `${hours}:${minutes} ${AMorPM}`
        return time
    }
    
    const convertDate = (value) => {
        let mmddyyyy = value.slice(0, 10)
        let month = value.slice(0, 2)
        let day = value.slice(3, 5)
        let year = value.slice(6, 10)
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return [weekday[new Date(`${month}/${day}/${year}`).getDay()]+", "+ mmddyyyy]
    }

    return (
        <div className="bookingCard">
            <h6>
                {booking.event}
            </h6>
            <p>{booking.classroom}</p>
            <p>{convertDate(booking.start_time)}</p>
            <p>{convertTime(booking.start_time)}</p>
        </div>
    )
}
export default BookingCard