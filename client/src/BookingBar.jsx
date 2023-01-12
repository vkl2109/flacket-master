import React from "react";
import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar () {
    const [ bookings, setBookings ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    const seedData = [
        {
            "name": "Rails",
            "location": "Turing",
            "time": "1pm"
        },
        {
            "name": "React",
            "location": "Kay",
            "time": "10am"
        },
        {
            "name": "DS&A",
            "location": "Collins",
            "time": "5pm"
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
        setBookings(seedData)
        setIsLoading(false)
    },[])

    return(
        <div className="bookingbar">
            {isLoading ? 
                "Loading..." 
                : 
                bookings.map((booking) => {
                    return (
                        <BookingCard booking={booking}/>
                    )
                })
            }
        </div>
    )
}

export default BookingBar