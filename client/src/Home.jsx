import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";
import Map from "./Map";
import EventList from "./EventList";

function Home({ loginData }) {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reFetch, setReFetch] = useState(false);

    useEffect(() => {
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
    }, [reFetch, loginData])

    return (
        <div className='main-cont'>
            <div className='sub-cont'>
                <EventList
                    loginData={loginData}
                    selectedRoom={selectedRoom}
                    // setSelectedRoom={setSelectedRoom}
                    reFetch={reFetch}
                    setReFetch={setReFetch}

                />
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": 'center', 'height':'85vh'}}>
                    <Map selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
                    <BookingBar
                        loginData={loginData}
                        bookings={bookings}
                        // setBookings={setBookings}
                        isLoading={isLoading}
                        // setIsLoading={setIsLoading}
                        setReFetch={setReFetch}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home