import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PersonPage from "./person";

class Person {
  constructor(firstName, lastName, city, state, zip) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  show() {
    console.log(this);
  }
}

function Write() {
  const [apiPersonData, setApiPersonData] = useState([]);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipRef = useRef(null);

  const writeButtonHandler = async () => {
    try {
      console.log(apiPersonData)
      const newPerson = new Person(
        firstNameRef.current.value,
        lastNameRef.current.value,
        cityRef.current.value,
        stateRef.current.value,
        zipRef.current.value
      );
      
      fetch("http://localhost:5000/mongo/person", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newPerson),
      });
      // Fetch the updated person data after the write operation
      const rawPersonData = await fetch("http://localhost:5000/mongo/person");
      const personData = await rawPersonData.json();
      setApiPersonData(personData);
      
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch the initial person data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawPersonData = await fetch("http://localhost:5000/mongo/person");
        const personData = await rawPersonData.json();
        setApiPersonData(personData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Header />
      <div className="container text center write-form">
        <div className="row">
          <div className="col">
            <input
              ref={firstNameRef}
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              ref={lastNameRef}
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-7">
            <input
              ref={cityRef}
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
            />
          </div>
          <div className="col-sm">
            <input
              ref={stateRef}
              type="text"
              className="form-control"
              placeholder="State"
              aria-label="State"
            />
          </div>
          <div className="col-sm">
            <input
              ref={zipRef}
              type="text"
              className="form-control"
              placeholder="Zip"
              aria-label="Zip"
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={writeButtonHandler}>
          Submit
        </button>
      </div>
      <PersonPage data={ apiPersonData }/>
      <Footer />
    </>
  );
}

export default Write;
