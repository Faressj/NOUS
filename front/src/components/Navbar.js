import Axios from "axios";
import React, { useEffect, useState } from "react"
import "./Home/Home.css"

export default function Navbar() {

    return(
        <div className="Navbar">
            <img className="marvellogo" src={"../hero_pic/Marvel_Logo.png"} />
            <a href="http://localhost:3000/"><h1 className="Repository">Repository</h1></a>
        </div>
    )
}