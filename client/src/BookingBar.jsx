import React from "react";
import { useState, useEffect } from 'react';
import BookingCard from './BookingCard'
import './css/booking.css'

function BookingBar({ loginData, bookings, isLoading }) {

    return (
        <div className="container">
            <button className="handle left-handle">
                <div className="text">&#8249;</div>
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
            <button className="handle right-handle">
                <div className="text">&#8250;</div>
            </button>
        </div>
    )
}

export default BookingBar