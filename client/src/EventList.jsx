import { useState, useEffect } from 'react'
import './css/eventlist.css'

const EventList = () => {

    const [ classrooms, setClassrooms ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        };

        if (searchInput.length > 0) {
            seedData.filter((country) => {
            return country.name.match(searchInput);
        });
        }
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
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            {isLoading ? "Loading..." : classrooms.map(classroom => {
                return (
                    <div className="table">
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
                    </div>
                )
            })}
        </div>
    )
}
export default EventList