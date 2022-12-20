import React, { useEffect, useState } from "react";
import axios from "axios";

function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAllRecords = async () => {
      try {
        const res = await axios.get("http://localhost:8800/records");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRecords()
  }, []);

  return <div>Records</div>;
}

export default Records;
