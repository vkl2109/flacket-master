import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function NavBar (){
    const [searchInput, setSearchInput] = useState("")
    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Ghana", continent: "Africa" },
        { name: "Japan", continent: "Asia" },
        { name: "Canada", continent: "North America" },
        { name: "New Zealand", continent: "Australasia" },
        { name: "Italy", continent: "Europe" },
        { name: "South Africa", continent: "Africa" },
        { name: "China", continent: "Asia" },
        { name: "Paraguay", continent: "South America" },
        { name: "Usa", continent: "North America" },
        { name: "France", continent: "Europe" },
        { name: "Botswana", continent: "Africa" },
        { name: "Spain", continent: "Europe" },
        { name: "Senegal", continent: "Africa" },
        { name: "Brazil", continent: "South America" },
        { name: "Denmark", continent: "Europe" },
        { name: "Mexico", continent: "South America" },
        { name: "Australia", continent: "Australasia" },
        { name: "Tanzania", continent: "Africa" },
        { name: "Bangladesh", continent: "Asia" },
        { name: "Portugal", continent: "Europe" },
        { name: "Pakistan", continent: "Asia" },
        ]

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        };

        if (searchInput.length > 0) {
            countries.filter((country) => {
            return country.name.match(searchInput);
        });
        }
        
    return(
        <div style={{"background":"yellow", 'height' : "20%", 'display' :'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
            <h1>Title</h1>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <div>
                <div style={{'display' :'flex', 'alignItems': 'center'}}>
                    <h2>Country</h2>
                    <h2>Continent</h2>
                </div>
                {
                    countries.map((country, index) => {
                        <div style={{"backround": "red", "width": "100%"}}>
                        <p>hello</p>
                            <ul>
                                <li>{country.name}</li>
                                <li>{country.continent}</li>
                            </ul>
                        </div>
                    })
                }
            </div>
            <Link to ={"/"}> 
                <img style={{"width" : "auto", "height" : "100%"}} src="src/assets/devcrazzy.randomchat_1.png"/>
            </Link>
        </div>
    )
}

export default NavBar 