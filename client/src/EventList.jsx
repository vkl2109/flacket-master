import { useState, useEffect } from 'react'
import './css/eventlist.css'

const EventList = () => {

    const [ classrooms, setClassrooms ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const seedData = [
        {
            "name" : "Turing",
            "events" : [
                {
                    "name" : "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]
            
        },
        {
            "name" : "Kay",
            "events" : [
                {
                    "name" : "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]
            
        },
        {
            "name" : "Collins",
            "events" : [
                {
                    "name" : "React",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]
            
        }
    ]

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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

{/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
            {isLoading ? "Loading..." : classrooms.map(classroom => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>{classroom.name}:</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {classroom.events.map(event => {
                                return (
                                    <tr>
                                        <td>{event.name}</td>
                                        <td>{event.start_time}</td>
                                        <td>{event.seats}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )
            })}
        </div>
    )
}
export default EventList