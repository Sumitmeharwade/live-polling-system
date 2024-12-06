// import React from 'react';
// import './GettingStarted.css';

// function GettingStarted() {
//   return (
//     <div className="getting-started-container">
//       <div className="badge">Intervue Poll</div>
//       <h1>Let’s <strong>Get Started</strong></h1>
//       <p>you’ll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time.</p>
      
//       <div className="question-section">
//         <div className="question-header">
//           <span>Enter your question</span>
//           <div className="time-dropdown">
//             <span>60 seconds</span>
//             <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUcMnfhe40mLev" alt="dropdown" />
//           </div>
//         </div>
//         <div className="question-box">
//           <span>Rahul Bajaj</span>
//           <span className="char-count">0/100</span>
//         </div>
//       </div>

//       <div className="options-section">
//         <div className="edit-options">
//           <span>Edit Options</span>
//           <div className="option">
//             <div className="option-number">1</div>
//             <div className="option-text">Rahul Bajaj</div>
//           </div>
//           <div className="option">
//             <div className="option-number">2</div>
//             <div className="option-text">Rahul Bajaj</div>
//           </div>
//           <button className="add-option">+ Add More option</button>
//         </div>
//         <div className="correct-section">
//           <span>Is it Correct?</span>
//           <div className="correct-options">
//             <div className="correct-option">
//               <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUdMnfhe40mLew" alt="yes" />
//               <span>Yes</span>
//             </div>
//             <div className="correct-option">
//               <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUdcnfhe40mLex" alt="no" />
//               <span>No</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="ask-question-button">Ask Question</button>
//     </div>
//   );
// }

// export default GettingStarted;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPoll, setPolls } from '../redux/pollSlice'; // Redux action to create a poll
import './GettingStartedTeacher.css';
import { useSelector } from 'react-redux';
import socket from '../api/socket';
import { useNavigate } from 'react-router-dom';

function GettingStarted() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']); // Two default options
  const [timeLimit, setTimeLimit] = useState('');
  const navigate = useNavigate();
  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCreatePoll = () => {
    if (question.trim() && options.every(option => option.trim())) {
      const pollData = {
        id: `poll-${Date.now()}`,
        question,
        options,
        timeLimit
      };
      dispatch(createPoll(pollData));


      

  
      socket.emit('addPoll', pollData);
      socket.on('poll-ack', (poll) => {
        // dispatch(setPolls(poll)); // Update the Redux state 
        
      });
      navigate('/poll-history');
        


      setQuestion('');
      setOptions(['', '']); // Reset options
    } else {
      alert('Please fill in the question and all options.');
    }
  };

  const role = useSelector((state) => state.role); 

  return (
    <div className="getting-started-container">
      <div className="badge" style={{margin:'0px'}}>Intervue Poll</div>
      <h1 style={{marginTop:'10px'}}>Let’s <strong>Get Started </strong></h1>
      <p style={{marginBottom:'5px'}}>you’ll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time.</p>

      <div className="question-section">
        <div className="question-header">
          <span>Enter your question</span>
          <div className="sel">
          <select className="time-dropdown-select" value={timeLimit} onChange={(e) => setTimeLimit(String(e.target.value))}>
              <option value={30}>30 seconds</option>
              <option value={45}>45 seconds</option>
              <option value={60}>60 seconds</option>
              
            </select>
          </div>
          {/* <div className="time-dropdown">
          
            <span>{timeLimit} seconds</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUcMnfhe40mLev" alt="dropdown" />
          </div> */}
        </div>
        <div className="question-box">
          {/* <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="Type your question here" 
            maxLength={100} 
            className="question-input"
          /> */}
          
          <textarea name="text" rows="4" cols="10" wrap="soft"
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          placeholder="Type your question here" 
          maxLength={100} 
          className="question-input"> 
            
          </textarea>
          <span className="char-count">{question.length}/100</span>
        </div>
      </div>

      {/* <div className="options-section"> */}
        <div className="edit-options">
          <span>Edit Options</span>
          {options.map((option, index) => (
            <div className="option" key={index}>
              <div className="option-number">{index + 1}</div>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                className="question-input option"
              />
              <div className='ratiosection'>
                <span>Is it Correct?</span> 
                <div>
                <input type="radio" id={`yes${index}`} name={`correct${index}`} value={`yes${index}`} />
                <label for={`yes${index}`}>Yes</label>
                <input type="radio" id={`no${index}`} name={`correct${index}`} value={`no${index}`} />
                <label for={`no${index}`}>No</label>
                </div>
                </div>
            </div>
          ))}
          <button className="add-option" onClick={handleAddOption}>+ Add More option</button>
        </div>
        {/* <div className="correct-section">
          <span>Is it Correct?</span>
          <div className="correct-options">
            <div className="correct-option">
              <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUdMnfhe40mLew" alt="yes" />
              <span>Yes</span>
            </div>
            <div className="correct-option">
              <img src="https://dashboard.codeparrot.ai/api/assets/Z1BUdcnfhe40mLex" alt="no" />
              <span>No</span>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <button className="ask-question-button" onClick={handleCreatePoll}>Ask Question</button>
    </div>
  );
}

export default GettingStarted;
