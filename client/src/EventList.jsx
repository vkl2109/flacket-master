import { useState, useEffect } from 'react'

const EventList = () => {

    const [ classrooms, setClassrooms ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const seedData = [
        {
            "name" : "Turing",
            "events" : [
                {
                    "name" : "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A Lecture",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]
            
        },
        {
            "name" : "Kay",
            "events" : [
                {
                    "name" : "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A Lecture",
                    "start_time": "5PM",
                    "seats": "30"
                }
            ]
            
        },
        {
            "name" : "Collins",
            "events" : [
                {
                    "name" : "React Lecture",
                    "start_time": "10AM",
                    "seats": "30"
                },
                {
                    "name" : "Rails Lecture",
                    "start_time": "1PM",
                    "seats": "30"
                },
                {
                    "name" : "DS&A Lecture",
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