import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import './UserInfo.css'; // You can style this as needed
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from "../ToastContext";
import './UserInfo.css'
import { useContext } from "react";
const UserInfo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
  const {toast}=useContext(ToastContext);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="user-profile" onClick={toggleDropdown}>
        <img
          src="https://img.icons8.com/cotton/64/user.png"
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
