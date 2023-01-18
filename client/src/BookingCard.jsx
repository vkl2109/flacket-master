import './css/booking.css'

const BookingCard = ({ booking, setReFetch }) => {

    const convertTime = (value) => {
        let minutes = value.slice(15, 17)
        let h = value.slice(11, 14)
        let AMorPM = h < 12 ? "AM" : "PM"
        let hours = (h % 12) || 12
        let time = `${hours}:${minutes} ${AMorPM}`
        return time
    }

    const convertDate = (value) => {
        let date = value.slice(0,10)
        let mmdd = date.slice(0,date.length-5)
        let month = value.slice(0, 2)
        let day = value.slice(3, 5)
        let year = value.slice(6, 10)
        const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return [weekday[new Date(`${month}/${day}/${year}`).getDay()] + ", " + mmdd]
    }

    const handleDelete = () => {
        const deleteBooking = async () => {
            let req = await fetch(`http://127.0.0.1:3001/bookings/${booking.id}`, {
                method: "DELETE"
            })
            // let res = await req.json()
            if (req.ok) {
                console.log("Booking deleted")
                setReFetch(reFetch => !reFetch)
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
            <button onClick={handleDelete}>X</button>
            <h6>{booking.event} in {booking.classroom}</h6>
            <p>Seat: {booking.seat_number}</p>
            <p>{convertDate(booking.start_time)}</p>
            <p>{convertTime(booking.start_time)}</p>
            
        </div>
    )
}
export default BookingCard