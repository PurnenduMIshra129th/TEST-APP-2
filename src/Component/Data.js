import React, { useState, useeffect } from "react";

function Data(props) {
  const [data, setData] = useState({
    start: "",
    end: "",
    startSave: "",
    endSave: "",
  });
  const renderUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/${props.name}`;
    let startTime = new Date().toLocaleTimeString();
    let data = await fetch(url);

    let parsedData = await data.json();
    let endTime = new Date().toLocaleTimeString();
    console.log(parsedData);
    const myJSON = JSON.stringify(parsedData);
    let startSaveTime = new Date().toLocaleTimeString();
    localStorage.setItem(props.name, myJSON);
    let endSaveTime = new Date().toLocaleTimeString();
    setData({
      start: startTime,
      end: endTime,
      startSave: startSaveTime,
      endSave: endSaveTime,
    });
  };
  return (
    <div className="col border  border-dark">
      <p>Start:{data.start}</p>
      <p> End:{data.end}</p>
      <p>Start Save:{data.startSave}</p>
      <p> End Save:{data.endSave}</p>
      <button className="btn btn-success mt-3 mb-3" onClick={renderUsers}>
        Store {props.name}
      </button>
    </div>
  );
}

export default Data;
