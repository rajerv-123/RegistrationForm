import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Persons from "./Persons";
import { BiTrash } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";



const Cards = () => {
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const handleEdit = (
    newId,
    newFirstName,
    newLastName,
    newGender,
    newHeight,
    newWeight,
    newDateOfBirth,
    newEmail,
    newPhoneNumber,
    newPassport
  ) => {
    localStorage.setItem("FirstName", newFirstName);
    localStorage.setItem("LastName", newLastName);
    localStorage.setItem("Gender", newGender);
    localStorage.setItem("Height", newHeight);
    localStorage.setItem("Weight", newWeight);
    localStorage.setItem("DateOfBirth", newDateOfBirth);
    localStorage.setItem("Passport", newPassport);
    localStorage.setItem("PhoneNumber", newPhoneNumber);
    localStorage.setItem("Email", newEmail);
    localStorage.setItem("Id", newId);
  };

  const handleDelete = (PhoneNumber) => {
    var index = Persons.map(function (e) {
      return e.PhoneNumber;
    }).indexOf(PhoneNumber);

    Persons.splice(index, 1);

    history("/cards");
  };



  return (
    <div className="d-flex flex-row">
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

        <div className="d-grid col-11 C_dashBoard" style={{ height: "95vh" }}>
          <div className="d-flex flex-column p-4">
            <div className="p-1">
              {/* <Link as={Link} to="/createpage"> */}
              <Button variant="secondary" style={{ float: "left", background: "blue", justifyContent: "center" }} onClick={() => history("/createpage")}>
                Add Dependent
              </Button>
              {/* </Link> */}
            </div>
            <h1 style={{ textDecoration: "underlined", fontFamily: 'sans-serif' }}>Profile Card</h1>
            <div className="row p-1">
              {Persons && Persons.length > 0
                ? Persons.map((data, index) => {
                  return (
                    <div key={index} className="col-4 py-2">
                      <Card
                        style={{
                          width: "auto",
                          height: "auto",
                          border: "2px solid black",
                          background: "none"
                        }}
                        key={index}
                        value={data.PhoneNumber}
                      >
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex flex-row justify-content-between py-1">
                            <div>
                              <b>Full Name:</b>
                              <br />
                              {data.FirstName} {data.LastName}
                            </div>
                            <div>
                              <BiTrash
                                onClick={(e) => handleDelete(data.PhoneNumber)}
                                size={20}
                                style={{ textDecoration: "underlined", color: "red" }}
                              />
                              <Link as={Link} to="/editpage">
                                <CiEdit size={20}
                                 onClick={() =>
                                    handleEdit(
                                      data.id,
                                      data.FirstName,
                                      data.LastName,
                                      data.Gender,
                                      data.Height,
                                      data.Weight,
                                      data.DOB,
                                      data.Email,
                                      data.PhoneNumber,
                                      data.Passport
                                    )
                                  }
                                 />
                              </Link>
                              <Link as={Link} to="/viewpage">
                                <CiImageOn size={20}
                                  style={{ textDecoration: "underlined", color: "green" }} />
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between py-1">
                            <div>
                              <b>Date of Birth:</b>
                              <br />
                              {data.DOB}
                            </div>
                            <div>
                              <b>Gender:</b>
                              <br />
                              {data.Gender}
                            </div>
                          </div>
                          <div className="" style={{}}>
                            <b>Email:</b>
                            <br />
                            {data.Email}
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
                : "No data available!"}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}

export default Cards;