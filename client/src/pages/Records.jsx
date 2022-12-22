import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import coverImage from '../../src/img/black_vinyl.jpg'

import Pagination from "./Pagination";


function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)




  useEffect(() => {
    const fetchAllRecords = async () => {
      try {
        const res = await axios.get("http://localhost:8800/records");
        setLoading(true) 
        setRecords(res.data) ;
        setLoading(false) 
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRecords()
  }, []);

  const handleDelete = async (id) =>{
    try {
      await axios.delete("http://localhost:8800/records/"+id);
      window.location.reload() //refreshing the page if everything is ok
    } catch (err) {
      console.log(err);
    }
  }


  //Get current records
  const indexOfLastRecord = currentPage*itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  const currentRecord =  records.slice(indexOfFirstRecord, indexOfLastRecord)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return <div className="rec-container">
 
    
    <h1>Records Store Database</h1>
    <div className="records">
    {/* records.map to see al the records on the one page */}
      {currentRecord.map(record =>(
        <div className="record" key={record.id}>
          {/*  To get data form the database code
         {record.cover && <img src={record.cover} alt="records cover image" />} */}


          {record.cover && <img src={coverImage} alt="records cover image" />}
          <p>Artist: {record.artist}</p>
          <p>Title: {record.title}</p>
          <p>Label: {record.label}</p>
          <p>Genre: {record.genre}</p>
          <p>Year: {record.year}</p>
          <p>Price: {record.price.toFixed(2)}</p>
          <button className="update"><Link className="lnk" to={`/update/${record.id}`}>Update</Link></button>
          {/* <button className="delete" onClick={()=>{handleDelete(record.id)}}>Delete</button> */}
       
          
        </div>
      ))}
    </div>

    <button className="add-record-button"><Link className="lnk" to='/add'>Add New Record</Link></button> 
     <Pagination itemsPerPage={itemsPerPage} 
          totalRecords={records.length}
            paginate={paginate}
          />
  </div>;

  
  
}

export default Records;
