import { useState, useEffect, useReducer } from 'react'
import './css/eventlist.css'

const EventList = () => {
    const seedData = [
                {
                    "room": "Mod",
                    "name": "ReactinMod",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "R1"
                },
                {
                    "room": "Mod",
                    "name": "RailsinMod",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "R2"
                },
                {
                    "room": "Mod",
                    "name": "DS&AinMod",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "R3"
                },
                {
                    "room": "Kay",
                    "name": "ReactinKay",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "K1"
                },
                {
                    "room": "Kay",
                    "name": "RailsinKay",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "K2"
                },
                {
                    "room": "Kay",
                    "name": "DS&AinKay",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "K3"
                },
                {
                    "room": "Collins",
                    "name": "ReactinCollins",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "C1"
                },
                {
                    "room": "Collins",
                    "name": "RailsinCollins",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "C2"
                },
                {
                    "room": "Collins",
                    "name": "DS&AinCollins",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "C3"
                }
            ]

    const [ isLoading, setIsLoading ] = useState(true)
    const [ eventList, setEventList ] = useState([])
    const [ searchEvent, setSearchEvent ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false)
    // const [ reservation, setReservations ] = useState([])
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

    const handleClick = (selEvent) => {
        setSelEvent(selEvent)
        setModalOpen(true)
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

    const searchEvents = eventList.filter((event) => event.name.toLowerCase().includes(searchEvent.toLowerCase()))
    const handleEventSearch = (e) => setSearchEvent(e.target.value);

    // const reserve = (reserve) => {
    //     if (reservation.includes(reserve)) return 
    //     setReservations([...reservation, reserve])
    // }

    useEffect(()=>{
        // const request = async () => {
        //     let req = await fetch("http://localhost:5000/classrooms")
        //     let res = await req.json()
        //     if (req.ok) {
        //         setClassrooms(classrooms => res)
        //     }
        // }
        setIsLoading(true)
        // request()
        setEventList(seedData)
        setIsLoading(false)
    },[])

    return(
        <div className="eventList">
            <div className="input-group input-group-sm mb-3">
                <input type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    placeholder="Search here" 
                    aria-describedby="inputGroup-sizing-sm" 
                    onChange={handleEventSearch}>
                </input>
            </div>
                {isLoading ? "Loading..." : searchEvents.map(event => {
                return (
                    <div className="table">
                        <table>
                            <tbody>
                                <tr key={event.id} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {handleClick(event)}}>
                                    <td>{event.name}</td>
                                    <td>{event.start_time}</td>
                                    <td>{event.seats}</td>
                                </tr>
                            </tbody>
                        </table>
                        {modalOpen ? 
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modalBack">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{selEvent.name} {selEvent.start_time}</h1>
                                    <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                {/* <div> */}
                                <ul className="showcase">
                                        <li><div className="seat"></div><small>Available</small></li>
                                        <li><div className="seat selected"></div><small>Selected</small></li>
                                        <li><div className="seat occupied"></div><small>Occupied</small></li>
                                    </ul>
                                {/* </div>     */}
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="row-container">
                                            <div className="row">
                                                <div className="seat" onClick={(e) => handleSeatSelect(e)}></div>
                                                <div className="seat" onClick={(e) => handleSeatSelect(e)}></div>
                                                <div className="seat"></div>
                                                <div className="seat occupied"></div>
                                                <div className="seat occupied"></div>
                                                <div className="seat"></div>
                                                <div className="seat"></div>
                                                <div className="seat"></div>
                                            </div>
                                        </div>
                                        <div className="row-container">
                                            <div className="row">
                                                <div className="seat"></div>
                                                <div className="seat"></div>
                                                <div className="seat occupied"></div>
                                                <div className="seat"></div>
                                                <div className="seat"></div>
                                                <div className="seat occupied"></div>
                                                <div className="seat"></div>
                                                <div className="seat"></div>
                                            </div>
                                        </div>
                                        <div className="text-wrapper">
                                            <p className="text">Selected Seat: </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                    <button type="button" className="btn btn-primary btn-sm">Confirm Reservation</button>
                                </div>
                                </div>
                            </div>
                            </div> 
                        : null}
                    </div>
                )
                })}
        </div>
    )
}
export default EventList