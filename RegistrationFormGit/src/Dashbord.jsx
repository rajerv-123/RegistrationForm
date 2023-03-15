import React, { useState } from 'react';
import './Dashbord.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);

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

      <h1></h1>
    </main>
  );
};

export default Sidebar;
