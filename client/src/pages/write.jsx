import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");

class Person {
  constructor(firstName, lastName, city, state, zip) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.city = city),
      (this.state = state),
      (this.zip = zip);
  }

  show() {
    console.log(this);
  }
}

function Write() {
  const writeButtonHandler = () => {
    const newPerson = new Person(
      firstName.value,
      lastName.value,
      city.value,
      state.value,
      zip.value
    );
    newPerson.show();
  };
  return (
    <>
      <Header />
      <div className="container text center write-form">
        <div className="row">
          <div className="col">
            <input
              id="first-name"
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              id="last-name"
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
              id="city"
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
            />
          </div>
          <div className="col-sm">
            <input
              id="state"
              type="text"
              className="form-control"
              placeholder="State"
              aria-label="State"
            />
          </div>
          <div className="col-sm">
            <input
              id="zip"
              type="text"
              className="form-control"
              placeholder="Zip"
              aria-label="Zip"
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => writeButtonHandler()}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Write;
