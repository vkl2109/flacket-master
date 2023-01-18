import './css/booking.css'

const BookingCard = ({ booking }) => {

    const convertTime = (value) => {
        let minutes = value.slice(15, 17)
        let h = value.slice(11, 14)
        let AMorPM = h < 12 ? "AM" : "PM"
        let hours = (h % 12) || 12
        let time = `${hours}:${minutes} ${AMorPM}`
        return time
    }

    const convertDate = (value) => {
        let mmddyyyy = value.slice(0, 10)
        let month = value.slice(0, 2)
        let day = value.slice(3, 5)
        let year = value.slice(6, 10)
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return [weekday[new Date(`${month}/${day}/${year}`).getDay()] + ", " + mmddyyyy]
    }

    const handleDelete = () => {
        const deleteBooking = async () => {
            let req = await fetch(`http://127.0.0.1:3001/bookings/${booking.id}`, {
                method: "DELETE"
            })
            // let res = await req.json()
            if (req.ok) {
                console.log("Booking deleted")
            }
        }

        const patchSeat = async () => {
            let req = await fetch(`http://127.0.0.1:3001/seats/${booking.seat_id}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ is_empty: "True", student: "" })
            })
            let res = await req.json()
            if (req.ok) {
                console.log("Patch seat successful")
            }
        }
        deleteBooking();
        patchSeat();
    }

    return (
        <div className="bookingCard">
            <h6>{booking.event}</h6>
            <h6>Seat: {booking.seat_number}</h6>
            <p>{booking.classroom}</p>
            <p>{convertDate(booking.start_time)}</p>
            <p>{convertTime(booking.start_time)}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}
export default BookingCard