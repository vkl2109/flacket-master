import { useState, useEffect, useReducer } from 'react'
import './css/eventlist.css'

const EventList = ({ selectedRoom, reFetch, setReFetch }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [eventList, setEventList] = useState([])
    const [searchEvent, setSearchEvent] = useState("")
    const [modalOpen, setModalOpen] = useState(true)
    const [currentSeats, setCurrentSeats] = useState([])
    const [selected, setSelected] = useState(Array(16).fill(null))
    const [currSeat, setCurrSeat] = useState("Not Selected")
    const [selEvent, setSelEvent] = useReducer(
        (prev, next) => {
            return { ...prev, ...next };
        }, {
        "room": "",
        "name": "",
        "start_time": "",
        "seats": "",
        "id": ""
    }
    )
    //fetch EVENTS
    useEffect(() => {
        const request = async () => {
            let req = await fetch('http://127.0.0.1:3001/events')
            let res = await req.json()
            if (req.ok) {
                setEventList(res)
            }
        }
        setIsLoading(true)
        request()
        setIsLoading(false)
    }, [])

    //fetch seat availability on select Event
    const handleClick = (selEvent) => {
        setSelEvent(selEvent)
        const request = async () => {
            let req = await fetch(`http://127.0.0.1:3001/events/${selEvent.id}`)
            let seats = await req.json()
            if (req.ok) {
                setCurrentSeats(seats)
            }
        }
        request();
    }

    const handleConfirmation = (e) => {
        addBooking();
        // updateSeats();
        // send a patch request that will update the seat table
        // event_id / seat_number(currSeat) / is_empty (false) / student_name = test123
    }

    const addBooking = async () => {
        let req = await fetch(`http://127.0.0.1:3001/bookings`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                user: 1,
                seat: currSeat
            })
        })
        let res = await req.json()
        if (req.ok) {
            // re render with updated booking
            console.log("seat is booked")
            setReFetch(reFetch => !reFetch)
            // setModalOpen(false)
            handleClose()
        }
    }

    const updateSeats = async () => {
        let req = await fetch(`http://127.0.0.1:3001/seats/${1}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                event_id: "",
                seat: "",
                is_empty: false,
                student: ""
            })
        })
    }

    const handleClose = () => {
        // setModalOpen(false)
        setSelEvent({
            'room': "",
            'name': "",
            'start_time': "",
            'seats': "",
            'id': ""
        })
        setCurrSeat("Not Selected")
        setSelected(Array(16).fill(null))
    }

    const handleSeatSelect = (e, i) => {
        // console.log('clicked seat', e)
        let newSelected = Array(16).fill(null)
        if (!selected[i]) {
            newSelected[i] = true
            setCurrSeat(i + 1)
        }
        else {
            setCurrSeat("Not Selected")
        }
        setSelected(newSelected)
    }

    const searchEvents = eventList
        .filter(event => event.classroom.toLowerCase().includes(selectedRoom))
        .filter((event) => (event.name.toLowerCase()).includes(searchEvent.toLowerCase()))

    const handleEventSearch = (e) => setSearchEvent(e.target.value);

    return (
        <div className="eventList">
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Search here" aria-describedby="inputGroup-sizing-sm" onChange={handleEventSearch}></input>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th style={{ fontWeight: "bold" }}>Classroom</th>
                            <th style={{ fontWeight: "bold" }}>Lecture</th>
                            <th style={{ fontWeight: "bold" }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventList && searchEvents.map(event => {
                            return (
                                <tr key={event.id} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleClick(event) }}>
                                    <td>{event.classroom}</td>
                                    <td>{event.name}</td>
                                    <td>{event.start_time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {modalOpen &&
                    <div className="modal fade modalBack" id="exampleModal" role="dialog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{selEvent.name} {selEvent.start_time}</h1>
                                    <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <ul className="showcase">
                                    <li><div className="seat"></div><small>Available</small></li>
                                    <li><div className="seat selected"></div><small>Selected</small></li>
                                    <li><div className="seat occupied"></div><small>Occupied</small></li>
                                </ul>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row-container">
                                            <div className="row">
                                                {currentSeats.slice(0, 8).map((seat, i) => {
                                                    return (
                                                        <div key={i} className={seat.is_empty ? (selected[i] ? "seat selected" : "seat") : "seat occupied"} onClick={(e) => handleSeatSelect(e, i)}></div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="row-container">
                                            <div className="row">
                                                {currentSeats.slice(8).map((seat, i) => {
                                                    return (
                                                        <div key={i + 8} className={seat.is_empty ? (selected[i + 8] ? "seat selected" : "seat") : "seat occupied"} onClick={(e) => handleSeatSelect(e, i + 8)}></div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="text-wrapper">
                                            <p className="text">Selected Seat: {currSeat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal" onClick={(e) => handleConfirmation(e)}>Confirm Reservation</button>
                                </div>
                            </div>
                        </div>
                    // </div>
                }
            </div>
        </div>
    )
}
export default EventList