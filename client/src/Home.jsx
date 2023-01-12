import React from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";
import Map from "./Map";

function Home(){
    return (
        <div style={{"width" : '100%', "height" : "100%"}}>
            <NavBar />
            <div style={{"background": "blue", "width" : '100%', "display" : "flex", "height" :'80%'}}>
                <BookingBar />
                <Map />
            </div>
        </div>
    )
}

export default Home