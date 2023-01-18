import React from "react";
import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar({ loginData, bookings, isLoading }) {

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
        <div className="container">
            <button class="handle left-handle">
                <div class="text">&#8249;</div>
            </button>
            <div className="bookingbar slider">
            {isLoading ? 
                "Loading..." 
                : 
                bookings.map((booking) => {
                    return (
                        <BookingCard key={booking.id} booking={booking} />
                    )
                })
            }
            </div>
            <button class="handle right-handle">
                <div class="text">&#8250;</div>
            </button>
        </div>
    )
}

export default BookingBar