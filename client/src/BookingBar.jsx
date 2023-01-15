import React from "react";
import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar ({booking}) {
    // const [ bookings, setBookings ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const seedData = [
        {
            "name": "Rails",
            "location": "Turing",
            "time": "1pm",
            "id": 1
        },
        {
            "name": "React",
            "location": "Kay",
            "time": "10am",
            "id": 2
        },
        {
            "name": "DS&A",
            "location": "Collins",
            "time": "5pm",
            "id": 3
        }
    ]
    //will pass data in here 
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
        // setBookings(seedData)
        setIsLoading(false)
    },[])

    return(
        <div className="bookingbar">
            {isLoading ? 
                "Loading..." 
                : 
                booking.map((booking) => {
                    return (
                        <BookingCard key={booking.id} booking={booking}/>
                    )
                })
            }
        </div>
    )
}

export default BookingBar