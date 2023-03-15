import React, { useState } from "react";
import "./PersonalInfo.css";
import { Link } from "react-router-dom";


function PersonalInfo() {

  const [aadharNumber, setAadharNumber] = useState("");
  const [name, setName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [children, setChildren] = useState("");
  const [show, setShow] = useState(false);

  const [numChildren, setNumChildren] = useState(0);

  // for validation purposes


  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };
    const handleNumChildrenChange = (e) => {
    setNumChildren(e.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Perform validation on fields
  //   if (aadharNumber.length !== 12) {
  //     alert('Please enter a valid Aadhar number');
  //     return;
  //   }

  //   if (name.length < 2) {
  //     alert('Please enter a valid name');
  //     return;
  //   }

  //   if (passportNumber.length < 7) {
  //     alert('Please enter a valid passport number');
  //     return;
  //   }

  //   if (passportExpiryDate === '' || new Date(passportExpiryDate) < new Date()) {
  //     alert('Please enter a valid passport expiry date');
  //     return;
  //   }

  //   if (dob === '' || age < 18) {
  //     alert('Please enter a valid date of birth');
  //     return;
  //   }

  //   if (religion.length < 3) {
  //     alert('Please enter a valid religion');
  //     return;
  //   }

  //   if (maritalStatus === '') {
  //     alert('Please select a marital status');
  //     return;
  //   }

  //   if (maritalStatus === 'married' && (numChildren === '' || isNaN(numChildren))) {
  //     alert('Please enter a valid number of children');
  //     return;
  //   }
  // Function for calculate age

  //   const calculateAge = (dateString) => {
  //     let today = new Date();
  //     let birthDate = new Date(dateString);
  //     let age = today.getFullYear() - birthDate.getFullYear();
  //     let month = today.getMonth() - birthDate.getMonth();
  //     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  //       age--;
  //     }
  //     setAge(age);
  //   };

  const handleAgeChange = (event) => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
    setAge(ageInYears);
  };


  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     calculateAge(dob);
  //   };


  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/editProfileSidebar" className="nav-link active">
                <i className='<i class="fa-sharp fa-solid fa-pen-to-square"></i>'></i>
                <span className="nav-link-name">Edit Profile</span>
              </Link>
              <Link to="/forgotPassSidebar" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Change Password</span>
              </Link>
              <Link to="/list" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">List</span>
              </Link>

              <Link to="/PersonalInfo" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Personal Info</span>
              </Link>
              <Link to='/CustomerOrder' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>CustomerOrder</span>
              </Link>
             

              <Link to="/Cards" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Profile Card</span>
              </Link>
            </div>
          </div>
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>

      
      {/* Onblur is used to handle function calls
      The onblur event occurs when an HTML element loses focus.
      The onblur event is often used on input fields.
      The onblur event is often used with form validation (when the user leaves a form field). */}
      <div className="PersonalInfo">
        <h1>Personl Info </h1>
        <form >
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input
            type="text"
            id="aadharNumber"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />

          <label htmlFor="name">Name as per Aadhar:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="passportNumber">Passport Number:</label>
          <input
            type="text"
            id="passportNumber"
            value={passportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
          />

          <label htmlFor="expiryDate">Passport Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />

          {/* <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dateOfBirth}
        //   onChange={(e) => setDOB(e.target.value)}
        onChange={(e) => setDateOfBirth(e.target.value)} 
        onBlur={handleAgeChange}
        />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={age} readOnly /> */}
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            onBlur={handleAgeChange}
          />

          <label htmlFor="age">Age:</label>
          <input type="text" id="age" value={age} disabled />

          <label htmlFor="religion">Religion:</label>
          <input
            type="text"
            id="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />

          <label htmlFor="maritalStatus">Marital Status:</label>
          <select
            id="maritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>

          <label htmlFor="children">Number of Children:</label>
          <input
            type="number"

            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default PersonalInfo;
