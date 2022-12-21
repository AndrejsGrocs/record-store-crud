import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAllRecords = async () => {
      try {
        const res = await axios.get("http://localhost:8800/records");
        setRecords(res.data) ;
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRecords()
  }, []);

  return <div>
    <h1>Records Store</h1>
    <div className="records">
      {records.map(record =>(
        <div className="record" key={record.id}>
          {record.cover && <img src={record.cover} alt="records cover image" />}
          <h2>{record.artist}</h2>
          <h2>{record.title}</h2>
          <h2>{record.label}</h2>
          <h2>{record.genre}</h2>
          <h2>{record.year}</h2>
          <h2>{record.price}</h2>
          <button className="update">Update</button>
          <button className="delete">Delete</button>
          
        </div>
      ))}
    </div>
    <button><Link to='/add'>Add New Record</Link></button> 
  </div>;
}

export default Records;
