import React from 'react';
import './WaitingScreen.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../api/socket';
import { useNavigate } from 'react-router-dom';

const WaitingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

        useEffect(() => {
          const interval = setInterval(() => {
            // dispatch(fetchPolls());

          socket.on('poll-ack', () => {
            // dispatch(fetchPolls());
            navigate('/question-screen');
          });
          }, 5000);

          // socket.on('pollUpdated', () => {
          //   navigate('/question-screen');
            
          // });
          

          return () => {
            clearInterval(interval);
            socket.off('newQuestions');
          };
        }, [dispatch]);
  return (
    <div className="container">
      <div className="header">
        <span className="badge">🎤 Intervue Poll</span>
        
      </div>
      <div className="content">
        {/* <img src="https://dashboard.codeparrot.ai/api/assets/Z09kP3FEV176CUtJ" alt="Loading" className="loading-icon" /> */}
        <span class="loader"></span>
        <h1>Wait for the teacher to ask questions..</h1>
      </div>
      <div className="chat-bubble">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z09kQHFEV176CUtK" alt="Chat" />
      </div>
    </div>
  );
};

export default WaitingScreen;
