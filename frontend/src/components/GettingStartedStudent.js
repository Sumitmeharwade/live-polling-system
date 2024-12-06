import React from 'react';
import './GettingStartedStudent.css';
import socket from '../api/socket';
import { useNavigate } from 'react-router-dom';

function GettingStartedStudent() {
  const navigate = useNavigate();
  const handleSumbit = () => { 
    
    socket.emit('addStudent', document.getElementById('nameinput').value);
    
    navigate('/question-screen');
  };
  return (
    <div className="student-container">
      <div className="badge">Intervue Poll</div>
      <h1>Let’s <strong>Get Started</strong></h1>
      <p>If you’re a student, you’ll be able to submit your answers, participate in live polls, and see how your responses compare with your classmates</p>
      
      {/* <div className="name-section">
        <span>Enter your Name</span>
        <div className="name-box">
          <span>Rahul Bajaj</span>
          
        </div>
      </div> */}
      <div className="name-section">
      <span>Enter your Name</span>
        <div >
        <input 
            type="text" 
            // placeholder="Type your name here" 
            maxLength={100} 
            className="question-input"
            id='nameinput'
          />
        </div>
      </div>

      <button className="continue-button" onClick={handleSumbit}>Continue</button>
    </div>
  );
}

export default GettingStartedStudent;
