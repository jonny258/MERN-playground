import React from "react";

function Students({ header, studentsArr }) {
  return (
    <>
      <h1>{header}</h1>
      <div className="d-flex flex-wrap">
        {studentsArr.map((student, index) => {
            return (
                <div key={index} className="card m-2">
                <div className="card-header">
                  {student.name}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{student.email}</li>
                  <li className="list-group-item">{student.phone}</li>
                  <li className="list-group-item">{student.address}</li>
                </ul>
              </div>
            )
        })}
        </div>
    </>
  );
}

export default Students;
