import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import Persons from "./Persons";

function ViewPage() {
  // let emailRegex =
  //   /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  // let phoneRegEx =
  //   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  // let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [id, setId] = useState("");

  var index = Persons.map(function (e) {
    return e.id;
  }).indexOf(id);

  useEffect(() => {
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setGender(localStorage.getItem("Gender"));
    setHeight(localStorage.getItem("Height"));
    setWeight(localStorage.getItem("Weight"));
    setDateOfBirth(localStorage.getItem("DateOfBirth"));
    setPassport(localStorage.getItem("Passport"));
    setPhoneNumber(localStorage.getItem("PhoneNumber"));
    setEmail(localStorage.getItem("Email"));
    setId(localStorage.getItem("Id"));
  }, []);


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

    <div className="d-grid col-10 C_dashBoard">
        <div className="containers_EP">
          <div className="d-flex justify-content-center">
            <h2 className="pt-0">Create Dependents</h2>
          </div>
       
          <div className="mt-3 d-flex flex-column">
            <Form >
              <div className="d-flex flex-row">
                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>First Name</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        className="newInput"
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Height &#40;cms&#41;</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        placeholder="Enter your height"
                        aria-label="Default select example"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="newInput"
                      />
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
                        disabled
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        className="newInput"
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Weight &#40;kg&#41;</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        placeholder="Enter your weight"
                        aria-label="Default select example"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Phone Number</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                      />
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
                       disabled
                        className="newInput_EP"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option selected>--Select--</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Date of Birth</b>
                      </Form.Label>
                      <Form.Control
                       disabled
                        placeholder="D.O.B"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="newInput_EP"
                        type="date"
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Passport Number</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        placeholder="Enter passport number"
                        className="newInput_EP"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="text-center">
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
  </main>
    
      
  
  );
}

export default ViewPage;
