import React, { useState } from 'react';
import styles from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import GetGeoLoc from '../api/GeoAPI';


export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locData, setLocData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log("Enter clicked");
      SearchFunc();
    }
  }

  // const locClick = (lat, lon) => {
  //   console.log("New Location: " + lat + " + " + lon);
  //   //SOMEHOW CHANGE App.js STATE!
  // };  

  const SearchFunc = async () => {
    if (searchTerm !== "") {
      let data = await GetGeoLoc(searchTerm);
      setLocData(data);
      console.log("New Loc Data:" + locData);
    }
    else {
      console.log("empty search field")
    }
  }

  const getFoundLocations = () => {
    let response = [];
    locData.map((loc, i) => {
      response.push(<div key={i} onClick={() => {props.onLocClick(loc.lat,loc.lon)}} className={styles.SingleLocDiv}>{loc.name}, {loc.state}, {loc.country}</div>)
    })
    return response; 
    //() => locClick(loc.lat, loc.lon)
  }

  return (
    <div className={styles.LocHeader}>
      <div className={styles.SearchDiv}>
        <div className={styles.SearchWrapper}>
          <input type="text" value={searchTerm} onChange={handleSearchChange} onKeyDown={handleKeyDown} className={styles.SearchBar} placeholder="Search Location"></input>
          <div onClick={SearchFunc} className={styles.SearchIcon}><BiSearch></BiSearch></div>
        </div>
        <div className={styles.LocResultDiv}>{getFoundLocations()}</div>
      </div >
      <div className={styles.CurrentLoc}>
      </div>
    </div>
  )
}
