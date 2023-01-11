import React from "react";
import NavBar from "./Navbar";
import BookingBar from "./BookingBar";

function LandingPage(){
    return (
        <>
            <NavBar />
            <div style={{"background": "blue", "width" : '100%'}}>
                <BookingBar />
            </div>
        </>
        
    )

}

export default LandingPage