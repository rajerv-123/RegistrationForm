import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import Persons from "./Persons";


export  const  CreatePage=()=>{

  const [show, setShow] = useState(false);

  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;

   const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passportError, setPassportError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidate();

    if (isValid) {
      setFirstName("");
      setLastName("");
      setHeight("");
      setWeight("");
      setDateOfBirth("");
      setGender("");
      setEmail("");
      setPhoneNumber("");
      setPassport("");
      Persons.push({
        FirstName: firstName,
        LastName: lastName,
        Gender: gender,
        Height: height,
        Weight: weight,
        DOB: dateOfBirth,
        Email: email,
        PhoneNumber: phoneNumber,
        Passport: passport,
      });
      navigate("/cards");
    }
  };

  const formValidate = () => {
    let isValid = true;

    if (firstName.length > 2) {
      setFirstNameError("");
      console.log("data:", firstName);
    } else {
      isValid = false;
      setFirstNameError("Enter first properly");
    }

    if (lastName.length > 2) {
      setLastNameError("");
    } else {
      isValid = false;
      setLastNameError("Enter last properly");
    }

    if (height.length > 1) {
      setHeightError("");
    } else {
      isValid = false;
      setHeightError("Enter height properly");
    }

    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      isValid = false;
      setEmailError("Enter email properly");
    }

    if (weight.length > 1) {
      setWeightError("");
    } else {
      isValid = false;
      setWeightError("Enter weight properly");
    }

    if (phoneRegEx.test(phoneNumber)) {
      setPhoneNumberError("");
    } else {
      isValid = false;
      setPhoneNumberError("Enter valid phone number");
    }

    if (!gender.match("Select")) {
      setGenderError("");
    } else {
      isValid = false;
      setGenderError("Select gender");
    }

    // if (!dateOfBirth === "") {
    //   setDateOfBirthError("");
    // } else {
    //   isValid = false;
    //   setDateOfBirthError("Enter D.O.B");
    // }

    // if (passportRegEx.test(passport)) {
    //   setPassportError("");
    // } else {
    //   isValid = false;
    //   setPassportError("Invalid Passport no.");
    // }

    return isValid;
  };

  return (
    <>
    <main className={show ? 'space-toggle' : null}>
    <header className={`header ${show ? 'space-toggle' : null}`}>
      <div className='header-toggle' onClick={() => setShow(!show)}>
        <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
      </div>
    </header>

    <aside className={`sidebar ${show ? 'show' : null}`}>
      <nav className='nav'>
        <div>
          <Link to='/' className='nav-logo'>
            <i className={`fas fa-home-alt nav-logo-icon`}></i>
            <span className='nav-logo-name'>Homepage</span>
          </Link>

          <div className='nav-list'>
            <Link to='/editProfileSidebar' className='nav-link active'>
              <i className='<i class="fa-sharp fa-solid fa-pen-to-square"></i>'></i>
              <span className='nav-link-name'>Edit Profile</span>
            </Link>
            <Link to='/forgotPassSidebar' className='nav-link'>
              <i className="fa-solid fa-user-pen"></i>
              <span className='nav-link-name'>Change Password</span>
            </Link>
            <Link to='/list' className='nav-link'>
              <i className='fas fa-image nav-link-icon'></i>
              <span className='nav-link-name'>List</span>
            </Link>

            <Link to='/PersonalInfo' className='nav-link'>
              <i className='fas fa-image nav-link-icon'></i>
              <span className='nav-link-name'>Personal Info</span>
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

        <Link to='/login' className='nav-link'>
          <i className='fas fa-sign-out nav-link-icon'></i>
          <span className='nav-link-name'>Logout</span>
        </Link>
      </nav>
    </aside>
    <div className="d-flex flex-row">
      <div className="d-grid col-11 C_dashBoard">
        <div className="containers_EP">
          <div className="d-flex justify-content-center" s >
            <h2 className="pt-0" style={{textDecoration:"underlined",fontFamily: 'sans-serif'}}>
            Create Dependents</h2>
          </div>
          
          <div className="mt-3 d-flex flex-column" >
            <Form onSubmit={handleSubmit} >
              <div className="d-flex flex-row">
                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>First Name</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        // value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {firstNameError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Height &#40;cms&#41;</b>
                      </Form.Label>
                      <Form.Control
                        className="newInput_EP"
                        placeholder="Enter your height"
                        aria-label="Default select example"
                        // value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {heightError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        // value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {emailError}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Last Name</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        // value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {lastNameError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Weight &#40;kg&#41;</b>
                      </Form.Label>
                      <Form.Control
                        className="newInput_EP"
                        placeholder="Enter your weight"
                        aria-label="Default select example"
                        // value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {weightError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Phone Number</b>
                      </Form.Label>
                      <Form.Control
                        className="newInput_EP"
                        type="text"
                        // value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {phoneNumberError}
                      </span>
                    </Form.Group>
                  </div>
                </div>
                <div className="d-grid col-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Gender</b>
                      </Form.Label>
                      <select
                        className="newInput_EP"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option selected>--Select--</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {genderError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Date of Birth</b>
                      </Form.Label>
                      <Form.Control
                        placeholder="D.O.B"
                         value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="newInput_EP"
                        type="date"
                        //onChange={(e) => handleAgeChange(e)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {dateOfBirthError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Passport Number</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        // value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        placeholder="Enter passport number"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {passportError}
                      </span>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{padding:"20px"}}>
                <Button style={{background:"blue"}} variant="success" type="submit" className="btn m-2">
                  Submit
                </Button>
                <Button
                  onClick={() => navigate(-1)}
                  variant="danger"
                  className="btn m-2"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </main>
  </>
   
  );
}


