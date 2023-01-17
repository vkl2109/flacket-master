import { useState, useEffect, useReducer } from 'react'
import './css/eventlist.css'

const EventList = () => {
    const seedData = [
                {
                    "room": "Turing",
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "R1"
                },
                {
                    "room": "Turing",
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "R2"
                },
                {
                    "room": "Turing",
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "R3"
                },
                {
                    "room": "Kay",
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "K1"
                },
                {
                    "room": "Kay",
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "K2"
                },
                {
                    "room": "Kay",
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "K3"
                },
                {
                    "room": "Collins",
                    "name": "React",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "C1"
                },
                {
                    "room": "Collins",
                    "name": "Rails",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "C2"
                },
                {
                    "room": "Collins",
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "C3"
                }
            ]

    const [ isLoading, setIsLoading ] = useState(true)
    const [ eventList, setEventList ] = useState([])
    const [ searchEvent, setSearchEvent ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ currentSeats, setCurrentSeats ] = useState([])
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
        console.log(selEvent, selEvent.id)
        const request = async () => {
            let req = await fetch(`http://127.0.0.1:3001/events/${selEvent.id}`)
            let seats = await req.json()
            if (req.ok) {
                setCurrentSeats(seats)
                console.log(seats[0].is_empty)
            }
        }
        request()
        // fetch request to a useState[]
        setModalOpen(true)
    }
    console.log(currentSeats)


    const handleConfirmation = (e) => {
        console.log(e)
    }

    const handleClose = () => {
        setModalOpen(false)
        setSelEvent({ 
            'room': "",
            'name': "",
            'start_time': "",
            'seats': "",
            'id': ""
        })
    }

    const handleSeatSelect = (e) => {
        console.log('clicked seat', e)
        if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
            e.target.classList.toggle("selected");
        //     // updateSelectedCount();
        }
    }

    const searchEvents = eventList.filter((event) => (event.name.toLowerCase()).includes(searchEvent.toLowerCase()))
    const handleEventSearch = (e) => setSearchEvent(e.target.value);

    return(
        <div className="eventList">
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Search here" aria-describedby="inputGroup-sizing-sm" onChange={handleEventSearch}></input>
            </div>
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <td style={{fontWeight: "bold"}}>Classroom</td>
                            <td style={{fontWeight: "bold"}}>Lecture</td>
                            <td style={{fontWeight: "bold"}}>Date</td>
                        </tr>
                {isLoading ? "Loading..." : searchEvents.map(event => {
                return (
                <>
                    <tr key={event.id} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {handleClick(event)}}>
                        <td>{event.classroom}</td>
                        <td>{event.name}</td>
                        <td>{event.start_time}</td>
                    </tr>
                    {modalOpen ? 
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
                                            <div className={currentSeats[0].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[1].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[2].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[3].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[4].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[5].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[6].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[7].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            {/* <div className="seat" onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className="seat" onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className="seat"></div>
                                            <div className="seat occupied"></div>
                                            <div className="seat occupied"></div>
                                            <div className="seat"></div>
                                            <div className="seat"></div>
                                            <div className="seat"></div> */}
                                        </div>
                                    </div>
                                    <div className="row-container">
                                        <div className="row">
                                            {/* <div className={currentSeats[8].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[9].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[10].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[11].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[12].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[13].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[14].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div>
                                            <div className={currentSeats[15].is_empty ? "seat" : "seat occupied"} onClick={(e) => handleSeatSelect(e)}></div> */}
                                            {/* <div className="seat"></div>
                                            <div className="seat"></div>
                                            <div className="seat occupied"></div>
                                            <div className="seat"></div>
                                            <div className="seat"></div>
                                            <div className="seat occupied"></div>
                                            <div className="seat"></div>
                                            <div className="seat"></div> */}
                                        </div>
                                    </div>
                                    <div className="text-wrapper">
                                        <p className="text">Selected Seat: </p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                <button type="button" className="btn btn-primary btn-sm" onClick={(e) => handleConfirmation(e)}>Confirm Reservation</button>
                            </div>
                            </div>
                        </div>
                        </div> 
                    : null}
                </>
                )
                })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EventList