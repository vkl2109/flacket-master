import React, { useState } from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";
import Map from "./Map";
import EventList from "./EventList";
import EventCard from "./components/EventCard";


function Home(){
    const [ reservation, setReservations ] = useState([])
    const [ showEventCard, setShowEventCard] = useState(false)

    return (
        <div style={{"width" : '100%', "height" : "80%"}}>
            <div style={{"background": "blue", "width" : '100%', "display" : "flex", "height" :'80%'}}>  
                <EventList showEventCard={showEventCard} setShowEventCard={setShowEventCard}/>
                <div style={{"display":"flex", "flexDirection":"column"}}>
                    <EventCard  title="Modal" showEventCard={showEventCard} setShowEventCard={setShowEventCard}>
                        Modal Content
                    </EventCard>
                    <Map />
                    <BookingBar booking={reservation}/>
                </div>
            </div>
        </div>
    )
}

export default Home