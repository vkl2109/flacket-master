import React from "react";
import { Link } from 'react-router-dom'

function Map () {
    return (
        <div style={{"width" : "70%", "height" : "70%", "background": "yellow"}}>
            <Link to={"/calendar"}>
                <img src="/src/assets/khoratan-nemeris-mapou.jpeg" style={{"width" : "100%", "height" : "auto"}}/>
            </Link>
        </div>
    )
}
export default Map