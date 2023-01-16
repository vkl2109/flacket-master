import React from "react";
import { useState } from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";
import Map from "./Map";
import EventList from "./EventList";

function Home(){
    const [ reservation, setReservations ] = useState([])

    return (
        <div className='main-cont'>
            <div className='sub-cont'>
                <EventList reservation={reservation} setReservations={setReservations}/>
                <div style={{"display":"flex", "flexDirection":"column", "alignItems":'center'}}>
                    <Map />
                    <BookingBar booking={reservation}/>
                </div>
            </div>
        </div>
    )
}

export default Home