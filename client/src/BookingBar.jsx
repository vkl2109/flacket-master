import React from "react";
import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar ({loginData}) {
    const [ bookings, setBookings ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(()=>{
        const request = async () => {
            let req = await fetch(`http://localhost:3001/bookings/${loginData.id}`)
            let res = await req.json()
            if (req.ok) {
                setBookings(bookings => res)
            }
        }
        setIsLoading(true)
        request()
        setIsLoading(false)
    },[])

    return(
        <div className="bookingbar">
            {isLoading ? 
                "Loading..." 
                : 
                bookings.map((booking) => {
                    return (
                        <BookingCard key={booking.id} booking={booking}/>
                    )
                })
            }
        </div>
    )
}

export default BookingBar