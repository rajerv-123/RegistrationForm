import React, { useState, useEffect } from 'react';
import './Dashbord.css';
import { Link ,useParams} from 'react-router-dom';
import "./View.css"

const Sidebar = () => {
  const [show, setShow] = useState(false);
  let articalId = useParams ();
  const [dataId ,setDataId] = useState();
  const [dataPostid ,setDataPostid] = useState();
  const [dataName ,setDataname] = useState();
  const [dataemail ,setDataemail] = useState();
  const [dataBody ,setDatabody] = useState();

  useEffect(() => {
    const gettabledata = async () => {
      const reqData = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${articalId.id}`
      );

      const resData = await reqData.json();
      setDataId(await resData.id);
      setDataPostid(await resData.postid);
      setDataname(await resData.name);
      setDataemail(await resData.email);
      setDatabody(await resData.body);
      // setTable(await resData);
    };
    gettabledata();
  }, [articalId]);

  return (
    <main id='main' className={show ? 'space-toggle' : null}>
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
                <i className='fas fa-hotel nav-link-icon'></i>
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

            </div>
          </div>

          <Link to='/login' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
        <div className='fields p-2 d-lg-grid' style={{border:"solid 2px black"}}>
          <h5>id: {dataId}</h5>
          <h5>postId: {dataPostid}</h5>
          <h5>name: {dataName}</h5>
          <h5>email: {dataemail}</h5>
          <h5>body: {dataBody}</h5>
        </div>
        <Link as={Link} to="/list">
        <button  className='btn p-2' style={{border:"2px"}}>
          Go Back
        </button>
        </Link>
       
    
    </main>
  );
};

export default Sidebar;
