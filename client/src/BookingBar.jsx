import React from "react";

function BookingBar () {
    //will pass data in here 
    return(
        <div style={{"width" : "30%", "height" : "70%", "background" : "orange"}}>
            <h1>Bookings</h1>
            {/* {
            data.map ((x) => {
                return (
                    <></>
                )
            })
            } */}
            <ul>
                <li>Room:</li>
                <li>Date:</li>
                <li>Time:</li>
            </ul>
        </div>
    )
}

export default BookingBar