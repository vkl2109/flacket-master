import React from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";
import Map from "./Map";
import EventList from "./EventList";

function Home(){
    return (
        <div style={{"width" : '100%', "height" : "100%"}}>
            <div style={{"background": "blue", "width" : '100%', "display" : "flex", "height" :'80%'}}>
                <EventList />
                <div style={{"display":"flex", "flexdirection":"column"}}>
                    <Map />
                    <BookingBar />
                </div>
            </div>
        </div>
    )
}

export default Home