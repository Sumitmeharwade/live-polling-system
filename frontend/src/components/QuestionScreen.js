// import React from 'react';
// import './QuestionScreen.css';

// function QuestionScreen() {
//   return (
//     <div className="question-container">
//       <div className="question-header">
//         <span>Question 1</span>
//         <div className="timer">
//           {/* <img src="https://dashboard.codeparrot.ai/api/assets/Z1Bcu8nfhe40mLfH" alt="Timer" /> */}
//           <span className="time">00:15</span>
//         </div>
//       </div>
//       <div className="question-box">
//         <div className="question-title">
//           Which planet is known as the Red Planet?
//         </div>
//         <div className="options">
//           <div className="option selected">
//             <div className="option-number">1</div>
//             <span>Mars</span>
//           </div>
//           <div className="option">
//             <div className="option-number">2</div>
//             <span>Venus</span>
//           </div>
//           <div className="option">
//             <div className="option-number">3</div>
//             <span>Jupiter</span>
//           </div>
//           <div className="option">
//             <div className="option-number">4</div>
//             <span>Saturn</span>
//           </div>
//         </div>
//       </div>
//       <button className="submit-button">Submit</button>
//       <div className="chat-bubble">
//       <img src="https://dashboard.codeparrot.ai/api/assets/Z09kQHFEV176CUtK" alt="Chat" />
//       </div>
//     </div>
//   );
// }

// export default QuestionScreen;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPolls, submitAnswer } from '../redux/pollSlice';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:4000'); // Backend URL

// const QuestionScreen = () => {
//   const dispatch = useDispatch();
//   const polls = useSelector((state) => state.polls.polls);
//   const [selectedPoll, setSelectedPoll] = useState(null);

//   useEffect(() => {
//     dispatch(fetchPolls());

//     socket.on('pollUpdated', (updatedPoll) => {
//       dispatch(fetchPolls());
//     });

//     return () => socket.disconnect(); // Cleanup on component unmount
//   }, [dispatch]);

//   const handleAnswer = (pollId, answer) => {
//     dispatch(submitAnswer(pollId, answer));
//   };

//   useEffect(() => {
//     if (polls.length > 0) {
//       setSelectedPoll(polls[0]); // Set the first poll as active (update logic as needed)
//     }
//   }, [polls]);

//   if (!selectedPoll) return <p>Loading...</p>;

//   return (
//     <div className="question-screen">
//       <h2>{selectedPoll.question}</h2>
//       {selectedPoll.options.map((option, index) => (
//         <button key={index} onClick={() => handleAnswer(selectedPoll.id, option)}>
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default QuestionScreen;






// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPolls, submitAnswer } from '../redux/pollSlice';
// import socket from '../api/socket';
// import WaitingScreen from './WaitingScreen';

// const QuestionScreen = () => {
//   const dispatch = useDispatch();
//   const polls = useSelector((state) => state.polls.polls);
//   const [selectedPoll, setSelectedPoll] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     dispatch(fetchPolls());

//     socket.on('pollUpdated', () => {
//       dispatch(fetchPolls());
//     });

//     return () => socket.disconnect(); // Cleanup on component unmount
//   }, [dispatch]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//     if (selectedPoll && selectedOption) {
//       dispatch(submitAnswer(selectedPoll.id, selectedOption));
//       setSelectedOption(null); // Reset selection
//     }
//   };

//   useEffect(() => {
//     if (polls.length > 0) {
//       setSelectedPoll(polls[0]); // Set the first poll as active (update logic as needed)
//     }
//   }, [polls]);

//   if (!selectedPoll) return <div> <WaitingScreen></WaitingScreen> </div>;

//   return (
//     <div>
      
//     <div className="question-container">
//       <div className="question-header">
//         <span>Question 1</span>
//         <div className="timer">
//           <img
//             src="https://dashboard.codeparrot.ai/api/assets/Z1Bcu8nfhe40mLfH"
//             alt="Timer"
//           />
//           <span className="time">00:15</span>
//         </div>

//       </div>
//       <div className="question-box">
//         <div className="question-title">{selectedPoll.question}</div>
//         <div className="options">
//           {selectedPoll.options.map((option, index) => (
//             <div
//               key={index}
//               className={`option ${selectedOption === option ? 'selected' : ''}`}
//               onClick={() => handleOptionClick(option)}
//             >
//               <div className="option-number">{index + 1}</div>
//               <span>{option}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="submit-button" onClick={handleSubmit}>
//         Submit
//       </button>
//       <div className="chat-bubble">
//         <img
//           src="https://dashboard.codeparrot.ai/api/assets/Z1BcvMnfhe40mLfI"
//           alt="Chat Bubble"
//         />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default QuestionScreen;


import './QuestionScreen.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolls, submitAnswer } from '../redux/pollSlice';
import socket from '../api/socket';
import WaitingScreen from './WaitingScreen';
// import Timer from './timer';

function QuestionScreen() {
  const dispatch = useDispatch();
  const polls = useSelector((state) => state.polls.polls);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    dispatch(fetchPolls());

    socket.on('pollUpdated', () => {
      dispatch(fetchPolls());
    });

    return () => socket.disconnect(); // Cleanup on component unmount
  }, [dispatch]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedPoll && selectedOption) {
      dispatch(submitAnswer(selectedPoll.id, selectedOption));
      console.log(selectedOption);
      setSelectedOption(null); // Reset selection
    }
  };

  useEffect(() => {
    if (polls.length > 0) {
      setSelectedPoll(polls[0]); // Set the first poll as active (update logic as needed)
      console.log(selectedPoll)
    }
  }, [polls]);

  if (!selectedPoll) return <div> <WaitingScreen></WaitingScreen> </div>;
  return (
    <div className="question-container">
      <div className="question-header">
        <span>Question 1</span>
        {/* <Timer /> */}
        <div className="timer">
          {/* <img src="https://dashboard.codeparrot.ai/api/assets/Z1Bcu8nfhe40mLfH" alt="Timer" /> */}
          <span className="time">00:15</span>
        </div>
      </div>
      <div className="question-box">
        {/* <div className="question-title">
          Which planet is known as the Red Planet?
          
        </div> */}
        <div className="question-title">{selectedPoll.question}</div>
        <div className="options">
           {selectedPoll.options.map((option, index) => (
            <div
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              <div className="option-number">{index + 1}</div>
              <span>{option}</span>
            </div>
          ))}
        </div>
        
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      <div className="chat-bubble">
      <img src="https://dashboard.codeparrot.ai/api/assets/Z09kQHFEV176CUtK" alt="Chat" />
      </div>
    </div>
  );
}

export default QuestionScreen;

