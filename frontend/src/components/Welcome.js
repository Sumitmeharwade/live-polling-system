// import React from 'react';
import './Welcome.css';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../api/socket';
import { useDispatch } from 'react-redux';
import { setRole } from '../redux/roleSlice';

function Welcome() {
  // function Welcome() {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
      setSelectedRole(role);
    };

    const dispatch = useDispatch();

    const handleContinue = () => { 
      if (selectedRole) {
        socket.emit('addRole', selectedRole);
        socket.on('role-ack', (role) => {
          dispatch(setRole(selectedRole)); // Update the Redux state with the role
        });
        navigate('/getting-started');
      }
    };

    return (
      <div className="welcome-container">
        <div className="badge">Intervue Poll</div>
        <h1>Welcome to the <strong>Live Polling System</strong></h1>
        <p>Please select the role that best describes you to begin using the live polling system</p>
        <div className="roles">
          <div
            className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
            onClick={() => handleRoleSelect('student')}
          >
            <h2>I’m a Student</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div
            className={`role-card ${selectedRole === 'teacher' ? 'selected' : ''}`}
            onClick={() => handleRoleSelect('teacher')}
          >
            <h2>I’m a Teacher</h2>
            <p>Submit answers and view live poll results in real-time.</p>
          </div>
        </div>
        <button
          className={`continue-button-welcome ${selectedRole !== null? 'active' : 'disabled'}`}
          
          onClick={handleContinue}
          disabled={!selectedRole}
        >
          Continue
        </button>
      </div>
    );
  }

  
// }

export default Welcome;
