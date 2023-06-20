import React, { useState, useEffect } from "react";

function Test() {
  const [counter, setCounter] = useState(0);
  const [apiUser, setApiUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/boys")
      .then((response) => response.json())
      .then((data) => {
        setApiUser(data);
      });
  }, []);

  const increment = () => {
    console.log(apiUser);
    setCounter(counter + 1);
  };

  return (
    <div>
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}
    </div>
  );
}

export default Test;
