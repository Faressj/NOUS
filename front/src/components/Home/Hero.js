import Axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Home.css"

export default function Hero() {
    const id = useParams().id;
    const [heroList, setHeroList] = useState([]);
    const [poweridList, setPowerIdList] = useState([]);
    const [powerList, setPowerList] = useState([]);
    const [teamList, setTeamList] = useState([]);
    
    useEffect( () => {
        Axios.get("http://localhost:3001/heroes").then((response) => {
            setHeroList(response.data)
        });
        Axios.get("http://localhost:3001/hero_power_id").then((response) => {
            setPowerIdList(response.data)
        });
        Axios.get("http://localhost:3001/power").then((response) => {
            setPowerList(response.data)
        });
        Axios.get("http://localhost:3001/team").then((response) => {
            setTeamList(response.data)
        });
    })
    
    function team( teamid, team ) {
        var teamname;
        teamList.map((val, key) =>{
            if (val.id == teamid) {
                teamname = val.name;
            }
        })
        return teamname;
    }
    function powers( heroid, power, powerId ) {
        var str = '';
        powerId.map( ( val, key ) => {
            if ( val.hero_id == heroid ) {
                power.map( ( vall, keyy ) => {
                    if ( vall.id == val.power_id ) {
                            str += vall.power + ", ";
                    }
                })
            }
        })
        str = str.substring(0, str.length - 2);
        return str;
    }
    return(
        <div className="HeroPage">
            {heroList.map((val, key) =>{
                if(val.id == id){
                    return (
                        <div key={val.id} className='Heroo' id={val.id}>
                            <h1 className="surnom">{val.identity}</h1>
                            <img src={"../hero_pic/" + val.picture} />
                            <div className="Infos">
                                <h3>Firstname: <span>{val.firstname}</span></h3>
                                <h3>Lastname: <span>{val.lastname}</span></h3>
                                <h3>Team:<span className="teamred">{team(val.team, teamList)}</span></h3>
                                <h3>Origin: <span>{val.origin}</span></h3>
                                <h3>Powers: <span>{powers(val.id, powerList, poweridList)}</span></h3><br />
                                <h3>Description:<br /><br /><span>{val.description}</span></h3>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}