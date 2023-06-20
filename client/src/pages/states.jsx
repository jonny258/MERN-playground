import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function States({data}) {

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const stateButtonHandler = () => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <h1 className="justify-content-center">STATES</h1>
      <div className="state-wrapper">
      {data.map((state, index) => {
        return (
          <>
            <div key={index} className="dropdown dropdown-thing">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                aria-expanded="false"
                onClick={() => setSelectedIndex(index)}
              >
                {state.name}
              </button>
              <ul className={index === selectedIndex ? "dropdown-menu show" : "dropdown-menu"}>
                <li>
                  <a className="dropdown-item">Abbreviation: {state.abbreviation}</a>
                </li>
                <li>
                  <a className="dropdown-item">Capital: {state.capital}</a>
                </li>
                <li>
                  <a className="dropdown-item"> Population: {state.population}</a>
                </li>
              </ul>
            </div>
          </>
        );
      })}
      </div>

      <button onClick={stateButtonHandler}>Click Me</button>
      <Footer />
    </>
  );
}

export default States;
