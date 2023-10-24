import Dropdown from 'react-bootstrap/Dropdown';
import './ThedropDown.css'
import React from 'react';
import { Link,useNavigate} from 'react-router-dom'; // Assuming you are using React Router

const ThedropDown = () => {
  const navigate=useNavigate();

  const handleOpenMaps = () => {
    navigate('/maps');
  };
  const handleFeedback = () => {
    navigate('/feedback');
  };
  return (
    <Dropdown className='dropdown-basic'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        See Also
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={handleOpenMaps}>Open Maps</Dropdown.Item>
      <Dropdown.Item onClick={handleFeedback}>Feedback</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThedropDown;
