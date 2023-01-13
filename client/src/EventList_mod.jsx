import { useState, useEffect } from 'react'
import './css/eventlist.css'

const EventList = () => {
    const seedData = [
        {
            "room": "Mod",
            "events": [
                {
                    "name": "ReactinMod",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "R1"
                },
                {
                    "name": "RailsinMod",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "R2"
                },
                {
                    "name": "DS&AinMod",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "R3"
                }
            ]
            
        },
        {
            "room": "Kay",
            "events": [
                {
                    "name": "ReactinKay",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "K1"
                },
                {
                    "name": "RailsinKay",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "K2"
                },
                {
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "K3"
                }
            ]
            
        },
        {
            "room": "Collins",
            "events": [
                {
                    "name": "ReactinCollins",
                    "start_time": "10AM",
                    "seats": "30",
                    "id": "C1"
                },
                {
                    "name": "RailsinCollins",
                    "start_time": "1PM",
                    "seats": "30",
                    "id": "C2"
                },
                {
                    "name": "DS&A",
                    "start_time": "5PM",
                    "seats": "30",
                    "id": "C3"
                }
            ]
            
        }
    ]
    const [ events, setEvents ] = useState([])
    const [ filterEvents, setFilterEvents ] = useState("")
    const [ isLoading, setIsLoading ] = useState(true)
    const [ selectedEvent, setSelectedEvent ] = useState({
        "room": "",
        "events": [{
            "name": "",
            "start_time": "",
            "seats": "",
            "id": ""
        }]
    })

    const [ reservation, setReservations ] = useState([])
    const [ modalOpen, setModalOpen ] = useState(false)

    // const searchShops = shops.filter((shop) => shop.name.toLowerCase().includes(searchShop.toLowerCase()))
    // const handleShopSearch = (e) => {setSearchShop(e.target.value)}
    // const seedData = [
    //     {
    //         "room": "Mod",
    //         "events": [
    //             {
    //                 "name": "ReactinMod",
    //                 "start_time": "10AM",
    //                 "seats": "30",
    //                 "id": "R1"
    //             },
    //             {
    //                 "name": "RailsinMod",
    //                 "start_time": "1PM",
    //                 "seats": "30",
    //                 "id": "R2"
    //             },
    //             {
    //                 "name": "DS&AinMod",
    //                 "start_time": "5PM",
    //                 "seats": "30",
    //                 "id": "R3"
    //             }
    //         ]
            
    //     },
    //     {
    //         "room": "Kay",
    //         "events": [
    //             {
    //                 "name": "ReactinKay",
    //                 "start_time": "10AM",
    //                 "seats": "30",
    //                 "id": "K1"
    //             },
    //             {
    //                 "name": "RailsinKay",
    //                 "start_time": "1PM",
    //                 "seats": "30",
    //                 "id": "K2"
    //             },
    //             {
    //                 "name": "DS&A",
    //                 "start_time": "5PM",
    //                 "seats": "30",
    //                 "id": "K3"
    //             }
    //         ]
            
    //     },
    //     {
    //         "room": "Collins",
    //         "events": [
    //             {
    //                 "name": "ReactinCollins",
    //                 "start_time": "10AM",
    //                 "seats": "30",
    //                 "id": "C1"
    //             },
    //             {
    //                 "name": "RailsinCollins",
    //                 "start_time": "1PM",
    //                 "seats": "30",
    //                 "id": "C2"
    //             },
    //             {
    //                 "name": "DS&A",
    //                 "start_time": "5PM",
    //                 "seats": "30",
    //                 "id": "C3"
    //             }
    //         ]
            
    //     }
    // ]
    const searchEvents = seedData.filter((event) => event.name.toLowerCase().includes(filterEvents.toLowerCase()))
    const handleEventSearch = (e) => setEvents(e.target.value);

    // const reserve = (reserve) => {
    //     if (reservation.includes(reserve)) return 
    //     setReservations([...reservation, reserve])
    // }

    const handleClick = (selectedEvent) => {
        setModalOpen(!modalOpen)
        setSelectedEvent(selectedEvent)
        console.log('hello', selectedEvent.id, selectedEvent)
    }
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
        setClassrooms(seedData)
        setIsLoading(false)
    },[])

    return(
        <div className="eventList">
            <input
                type="search"
                placeholder="Search here"
                onChange={handleEventSearch}
                value={search} 
            />
            {isLoading ? "Loading..." : events.map(classroom => {
                return (
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>{classroom.room}:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classroom.events.map(event => (
                                <>
                                    <tr key={event.id}
                                        data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal"
                                        onClick={() => {handleClick(event)}}
                                    >
                                        <td>{event.name}</td>
                                        <td>{event.start_time}</td>
                                        {/* <td onClick={() => {reserve(event)}}>{event.start_time}</td> */}
                                        <td>{event.seats}</td>
                                    </tr>
                                    {/* <!-- Modal --> */}
                                    {modalOpen ? <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{event.start_time}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {event.name}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary btn-sm">Confirm Reservation</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div> : null
                                    }
                                </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default EventList