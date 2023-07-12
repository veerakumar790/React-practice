import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
// import axios from 'axios';

import AlertDialog from "./Delete";
import man from "../components/assets/man.png";


export default function Student() {
  // const [] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [city, setCity] = useState("");
  // const [students,setStudents] = useState("");
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("");
  const [edit, setEdit] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    const newStudent = { studentName, contactNo, emailId, city };
    // setStudents((qwe) => {
    //   return (
    //     [
    //       ...qwe, newStudent
    //     ]
    //   )

    // }
    // )

    console.log(newStudent);
    fetch("http://localhost:8080/studentdata/addStudent", {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: { "Content-Type": "application/json" },
    }).then(() => console.log("added student"));
  };
  useEffect(() => {
    fetch("http://localhost:8080/studentdata/getstudents")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setStudents(result);
      });
  }, []);

  const update = (e) => {
    e.preventDefault();
    const newStudent = { id, studentName, emailId, contactNo, city };
    console.log(newStudent);
    fetch("http://localhost:8080/studentdata/update", {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then(() => {
        console.log("student data updated successfully");
      })
      .then(() => {
        setStudentName("");
        setEmailId("");
        setContactNo("");
        setCity("");
        setEdit(!edit);
      });
  };

  const handleEdit = (student) => {
    console.log(student);
    setEdit(!edit);
    setId(student.id);
    setStudentName(student.studentName);
    setContactNo(student.contactNo);
    setEmailId(student.emailId);
    setCity(student.city);
    //  if(student.studentName ===  true && student){

    //   student.studentName = DisabledByDefault

    //   }
  };

  return (
    <div>
      <div className="frm">
        <h1>Add Student Data</h1>
        <img src={man} alt="logo" />
        <br></br>
        <br></br>
        <TextField
          sx={{ border: "1px solid black", borderRadius: 1 }}
          id="standard-basic"
          label="Student Name"
          variant="standard"
          required="required"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          disabled={!edit ? true : false}
        />
        <br></br>
        <br></br>

        <TextField
          sx={{ border: "1px solid black", borderRadius: 1 }}
          id="standard-basic"
          label="Student Contact NO"
          variant="standard"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <br></br>
        <br></br>

        <TextField
          sx={{ border: "1px solid black", borderRadius: 1 }}
          id="standard-basic"
          label="Student Email ID"
          variant="standard"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <br></br>
        <br></br>

        <TextField
          sx={{ border: "1px solid black", borderRadius: 1 }}
          id="standard-basic"
          label="Student City"
          variant="standard"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br></br>
        <br></br>
        <button id="sub" onClick={edit ? handleClick : update}>
          {edit ? "SUBMIT" : "update "}
        </button>
        <br></br>
        <br></br>
      </div>
      <br></br>

      <h1 id="tab">Student Data</h1>
      <br></br>

      <table>
        <thead>
          <tr id="head">
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.studentName}</td>
                <td>{student.contactNo}</td>
                <td>{student.emailId}</td>
                <td>{student.city}</td>

                <td>
                  <button id="ed" onClick={() => handleEdit(student)}>
                    EDIT
                  </button>
                  <AlertDialog userId={student.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
