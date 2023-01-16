import { useState, useEffect } from 'react'
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
    const [ events, setEvents ] = useState([])
    const [ searchEvent, setSearchEvent ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ selectedEvent, setSelectedEvent ] = useState({
        // const [ reservation, setReservations ] = useState([])
        "room": "",
        "name": "",
        "start_time": "",
        "seats": "",
        "id": ""
    })
    
    const handleClick = (selectedEvent) => {
        setModalOpen((modalOpen) => !modalOpen)
        setSelectedEvent(selectedEvent)
    }

    const searchEvents = events.filter((event) => event.name.toLowerCase().includes(searchEvent.toLowerCase()))
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
        setEvents(seedData)
        setIsLoading(false)
    },[])
    console.log(selectedEvent)

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
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedEvent.start_time}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {selectedEvent.name}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
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