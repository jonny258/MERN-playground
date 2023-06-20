import React, {useEffect, useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Students from "../components/students";

function ClassGroup({ teacher }) {
  const [apiBoysData, setApiBoysData] = useState([])
  const [apiGirlsData, setApiGirlsData] = useState([])
  const [whatDisplay, setWhatDisplay] = useState(-1)

  useEffect(() => {
    fetch('http://localhost:5000/api/girls')
    .then(response => response.json())
    .then(data => {
      setApiGirlsData(data)
    })
    fetch('http://localhost:5000/api/boys')
    .then(response => response.json())
    .then(data => {
      setApiBoysData(data)
    })
  })

  const boyButtonHandler = () => {
    //console.log(apiBoysData)
    setWhatDisplay(0)
  }

  const girlButtonHandler = () => {
    //console.log(apiGirlsData)
    setWhatDisplay(1)
  }

  return (
    <>
      <Header />
      <div className="container text-center class-cont">
        <div className="row">
          <label>Teacher</label>
          <h1>{teacher}</h1>
        </div>
        <div className="row">
          <h2>Students</h2>
          <section>
            <button className="btn btn-primary" onClick={()=> girlButtonHandler()}>Girls</button>
            <button className="btn btn-primary" onClick={()=> boyButtonHandler()}>Boys</button>
          </section>
        </div>
      </div>
      <div className="container text-center class-cont">
      {whatDisplay === -1 && <p>select students</p>}
      {whatDisplay === 0 && <Students header={'Boys'} studentsArr={apiBoysData}/>}
      {whatDisplay === 1 && <Students header={'Girls'} studentsArr={apiGirlsData}/>}
      </div>
      <Footer />
    </>
  );
}

export default ClassGroup;
