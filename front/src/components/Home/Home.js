import Axios from "axios";
import React, { useEffect, useState } from "react"
import "./Home.css"

export default function Home () {
    const [heroList, setHeroList] = useState([]);
    
    useEffect( () => {
        Axios.get("http://localhost:3001/heroes").then( ( response ) => {
            setHeroList(response.data)
        });
    })

    return (
        <div>
            <div className="heroes">
                <div className="Team1">
                    <h1 className="titleunderline">TEAM #1 AVENGERS</h1>
                    { heroList.map( ( val, key ) => {
                        if ( val.team == 1 ) {
                            return (
                                <a href={`http://localhost:3000/Hero/`+ val.id} style={{ backgroundImage:`url("./hero_pic/` + val.picture + `")`}} key={val.id} className='Hero' id={val.id}>
                                    <div className="identity">{val.identity}</div>
                                </a>
                            )
                        }
                    })}
                </div>

                <div className="Team2">
                    <h1 className="titleunderline">TEAM #2 GARDIENS DE LA GALAXIE</h1>
                    { heroList.map( ( val, key ) => {
                        if ( val.team == 2 ) {
                            return (
                                <a href={`http://localhost:3000/Hero/`+ val.id} style={ { backgroundImage:`url("./hero_pic/` + val.picture + `")` } } key={val.id} className='Hero' id={val.id}>
                                    <div className="identity">{val.identity}</div>
                                </a>
                            )
                        }
                    })}
                </div>

                <div className="Team3">
                    <h1 className="titleunderline">TEAM #3 X-MEN</h1>
                    { heroList.map( ( val, key ) => {
                        if ( val.team == 3 ) {
                            return (
                                <a href={`http://localhost:3000/Hero/`+ val.id} style={{ backgroundImage:`url("./hero_pic/` + val.picture + `")`}} key={val.id} className='Hero' id={val.id}>
                                    <div className="identity">{val.identity}</div>
                                </a>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}