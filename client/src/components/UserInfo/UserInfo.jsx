import React, { useState } from 'react';
import './UserInfo.css'; // You can style this as needed

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="user-profile" onClick={toggleDropdown}>
        <img
          src=""
          alt="User Profile"
          className="user-profile-image"
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li><a href="/maps">Maps</a></li>
              <li onClick={()=>{
              setUser(null);
              localStorage.clear();
              toast.success("Logged out");
              navigate("/users/sign_in",{replace:true});
            }}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
