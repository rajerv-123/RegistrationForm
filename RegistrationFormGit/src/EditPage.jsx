import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import Persons from "./Persons";


function EditPage() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newHeight, setNewHeight] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newPassport, setNewPassport] = useState("");
  const [newId, setNewId] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passportError, setPassportError] = useState("");

  var index = Persons.map(function (e) {
    return e.id;
  }).indexOf(newId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidate();

    if (isValid) {
      navigate("/cards");
    }
    
    let data = Persons[index];
    data.FirstName = newFirstName;
    data.LastName = newLastName;
    data.Gender = newGender;
    data.Height = newHeight;
    data.Weight = newWeight;
    data.DOB = newDateOfBirth;
    data.Passport = newPassport;
    data.PhoneNumber = newPhoneNumber;
    data.Email = newEmail;
   console.log(data);
  };

  useEffect(() => {
    setNewFirstName(localStorage.getItem("FirstName"));
    setNewLastName(localStorage.getItem("LastName"));
    setNewGender(localStorage.getItem("Gender"));
    setNewHeight(localStorage.getItem("Height"));
    setNewWeight(localStorage.getItem("Weight"));
    setNewDateOfBirth(localStorage.getItem("DateOfBirth"));
    setNewPassport(localStorage.getItem("Passport"));
    setNewPhoneNumber(localStorage.getItem("PhoneNumber"));
    setNewEmail(localStorage.getItem("Email"));
    setNewId(localStorage.getItem("Id"));
    //console.log(setNewId);
  }, []);

  const formValidate = () => {
    let isValid = true;

    if (newFirstName.length > 2) {
      setFirstNameError("");
      // console.log("data:", newFirstName);
    } else {
      isValid = false;
      setFirstNameError("Enter first properly");
    }

    if (newLastName.length > 2) {
      setLastNameError("");
    } else {
      isValid = false;
      setLastNameError("Enter last properly");
    }

    if (newHeight.length > 1) {
      setHeightError("");
    } else {
      isValid = false;
      setHeightError("Enter height properly");
    }

    if (emailRegex.test(newEmail)) {
      setEmailError("");
    } else {
      isValid = false;
      setEmailError("Enter email properly");
    }

    if (newWeight.length > 1) {
      setWeightError("");
    } else {
      isValid = false;
      setWeightError("Enter weight properly");
    }

    if (phoneRegEx.test(newPhoneNumber)) {
      setPhoneNumberError("");
    } else {
      isValid = false;
      setPhoneNumberError("Enter valid phone number");
    }

    if (!newGender.match("Select")) {
      setGenderError("");
    } else {
      isValid = false;
      setGenderError("Select gender");
    }
    if (passportRegEx.test(newPassport)) {
      setPassportError("");
    } else {
      isValid = false;
      setPassportError("Invalid Passport no.");
    }

    return isValid;
  };
  return (
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
            <div className="d-flex justify-content-center">
              <h2 className="pt-0" style={{fontFamily: 'sans-serif'}}>Edit Dependents</h2>
            </div>
          
            <div className="mt-3 d-flex flex-column">
              <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-row">
                  <div className="d-grid col-4 mx-4">
                    <div className="d-flex flex-column">
                      <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>
                          <b>First Name</b>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
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
                          value={newHeight}
                          onChange={(e) => setNewHeight(e.target.value)}
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
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
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
                          value={newLastName}
                          onChange={(e) => setNewLastName(e.target.value)}
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
                          value={newWeight}
                          onChange={(e) => setNewWeight(e.target.value)}
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
                          value={newPhoneNumber}
                          onChange={(e) => setNewPhoneNumber(e.target.value)}
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
                          value={newGender}
                          onChange={(e) => setNewGender(e.target.value)}
                        >
                          <option selected>--Select--</option>
                          <option>Male</option>
                          <option>Female</option>
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
                          value={newDateOfBirth}
                          onChange={(e) => setNewDateOfBirth(e.target.value)}
                          className="newInput_EP"
                          type="date"

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
                          value={newPassport}
                          onChange={(e) => setNewPassport(e.target.value)}
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
                <div className="text-center" >
                  <Button style={{background:"blue"}} variant="success" type="submit" className="btn m-2">
                    Update
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
  );
}
export default EditPage;
