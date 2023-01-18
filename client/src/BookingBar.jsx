import React from "react";
// import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar({ loginData, bookings, isLoading }) {

    return (
        <div className="bookingbar">
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
    )
}

export default BookingBar