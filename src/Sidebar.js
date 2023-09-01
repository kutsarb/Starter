import React, { useState } from 'react';

const Sidebar = () => {
  const [mini, setMini] = useState(true);

  const expandSidebar = () => {
    setMini(false);
    document.getElementById('body').className='';
    document.getElementById('body').classList.add('col-10');
  };

  const retractSidebar = () => {
    setMini(true);
    document.getElementById('body').className='';
    document.getElementById('body').classList.add('col-7');
  };

  const sidebarStyle = {
    width: mini ? '7vh':"20vh",
    backgroundColor: '#111', // Background color
    transition: '0.5s',
    overflowX: 'hidden',
    paddingTop: '60px',
    whiteSpace: 'nowrap',
    color: '#818181', // Default text color
    [`d-flex d-md-flex`]: !mini,
    [`d-md-flex`]: mini,
  };

  const linkStyle = {
    padding: '5vh 8% 1vh 1vh',
    textDecoration: 'none',
    fontSize: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    color: 'inherit',
    transition: 'color 0.3s',
    [`d-flex d-sm-flex`]: !mini,
    [`d-xl-flex`]: mini,
  };

  const activeLinkStyle = {
    color: '#f1f1f1', // Hovered link text color
  };

  return (
    <div
      id="mySidebar"
      className="sidebar"
      onMouseEnter={expandSidebar}
      onMouseLeave={retractSidebar}
      style={sidebarStyle}
    >
      <ul className="list-group">
        <li className="list-group-item border-0">
          <a href="#" style={linkStyle}>
            <i class="bi bi-info-circle"></i>
            <span className="icon-text">Info</span>
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="#" style={linkStyle}>
            <i class="bi bi-truck" width="20" height="20"> </i>
            <span className="icon-text">Loads</span>
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="#" style={linkStyle}>
            <i class="bi bi-currency-dollar"></i>
            <span className="icon-text" >Accounting</span>
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="#" style={linkStyle}>
            <i class="bi bi-envelope"></i>
            <span className="icon-text">Contacts</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
