import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Person({ data }) {
  console.log("data");
  console.log(data[0]);
  console.log("data");
  return (
    <>
      <div className="container">
        <h1>People</h1>
        <div className="d-flex flex-wrap">
          {data.map((person, index) => {
            return (
              <div key={index} className="card mb-3 person-card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{person.firstName}</li>
                  <li className="list-group-item">{person.lastName}</li>
                  <li className="list-group-item">{person.state}</li>
                  <li className="list-group-item">{person.zip}</li>
                  <li className="list-group-item">{person.city}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Person;
