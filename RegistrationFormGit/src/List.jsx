import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

import "./List.css";

function List() {
  const [userName, setName] = useState("");
  // const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const [getTable, setTable] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();


  //   const clearFilter = ()=>{
  //     setSearchTerm("")
  //     setFilterData(items.filter((x)=>x.name.toLowerCase().includes(searchTerm.toLowerCase())))
  // }
  // const handleClear = () => {
  //   setName("");
  // };
  useEffect(() => {
    const gettabledata = async () => {
      const reqData = await fetch(
        `https://jsonplaceholder.typicode.com/comments/`
      );
      const resData = await reqData.json();
      setTable(await resData);
    };
    gettabledata();
  }, [refresh]);


  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const search = (e) => {
    setTable(
      getTable.filter((data) =>
        data.name.toLowerCase().includes(userName.toLowerCase())
      )
    );
  };

  const clr = () => {
    setName("");
    setRefresh(refresh + 1)
  }

  const view = (id) => {
    navigate(`/view/${id}`)
  }

  return (
    <div className="" style={{ height: "100vh" }}>
      <main className={show ? "space-toggle" : null}>
        <header className={`header ${show ? "space-toggle" : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <i
              className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
            ></i>
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

            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-out nav-link-icon"></i>
              <span className="nav-link-name">Logout</span>
            </Link>
          </nav>
        </aside>

        <div className="d-flex flex-column">
          <div className="d-flex flex-row p-3" style={{ textAlign: "center" }}>
            <div className="d-flex">
              <label htmlFor="name">Name:</label>
              <input
                style={{ width: "400px" }}
                type="text"
                value={userName}
                onChange={handleName}
                id="name"
              />
            </div>
            <div className="">
              <button onClick={search}>
                Filter
              </button>
              <button onClick={clr}>
                Clear
              </button>
            </div>
          </div>

          <div className="" id="scrollbar" style={{ height: "65vh", width: "1000px" }}>
            <Table striped="columns" style={{ backgroundColor: "white" }}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Post Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody >
                {getTable.slice(0, 100).map((resTable, index) => (
                  <tr key={index} value={resTable.id}>
                    <td>{resTable.id}</td>
                    <td>{resTable.postId}</td>
                    <td>{resTable.name}</td>
                    <td>{resTable.email}</td>
                    <td><button className="btn btn-primary" onClick={() => { view(resTable.id) }}>View</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};


export default List;
