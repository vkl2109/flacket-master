import React from "react";

function BookingBar () {
    //will pass data in here 
    return(
        <div style={{"width" : "100%", "height" : "30%", "background" : "orange"}}>
            <h1>Bookings</h1>
            {/* {
            data.map ((x) => {
                return (
                    <></>
                )
            })
            } */}
            <ul>
                <li>Room: Placeholder Room</li>
                <li>Date: 12/12/2012</li>
                <li>Time: 12:12 PM</li>
            </ul>
        </div>
    )
}

export default BookingBar