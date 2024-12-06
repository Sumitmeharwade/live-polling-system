// import React from 'react';
// import './PollHistory.css';

// function PollHistory() {
//   return (
//     <div className="poll-history-container">
//       <h1>View <strong>Poll History</strong></h1>
      
//       {[1, 2].map((questionNumber) => (
//         <div key={questionNumber} className="question-section">
//           <h2>Question {questionNumber}</h2>
//           <div className="question-box">
//             <div className="question-title">
//               Which planet is known as the Red Planet?
//             </div>
//             <div className="options">
//               {[
//                 { number: 1, text: 'Mars', percentage: '75%' },
//                 { number: 2, text: 'Venus', percentage: '5%' },
//                 { number: 3, text: 'Jupiter', percentage: '5%' },
//                 { number: 4, text: 'Saturn', percentage: '15%' },
//               ].map((option) => (
//                 <div key={option.number} className="option">
//                   <div className="option-number">{option.number}</div>
//                   <span>{option.text}</span>
//                   <div className="percentage-bar" style={{ width: option.percentage }}></div>
//                   <span className="percentage">{option.percentage}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="chat-bubble">
//         <img src="https://dashboard.codeparrot.ai/api/assets/Z1BcvMnfhe40mLfI" alt="Chat Bubble" />
//       </div>
//     </div>
//   );
// }

// export default PollHistory;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPolls } from '../redux/pollSlice';

// const PollHistory = () => {
//   const dispatch = useDispatch();
//   const polls = useSelector((state) => state.polls.polls);

//   useEffect(() => {
//     dispatch(fetchPolls());
//   }, [dispatch]);

//   return (
//     <div className="poll-history">
//       <h1>Past Polls</h1>
//       {polls.map((poll) => (
//         <div key={poll.id} className="poll">
//           <h2>{poll.question}</h2>
//           <ul>
//             {poll.options.map((option, index) => (
//               <li key={index}>
//                 {option}: {poll.answers.filter((ans) => ans === option).length} votes
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PollHistory;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolls } from '../redux/pollSlice';

const PollHistory = () => {
  const dispatch = useDispatch();
  const polls = useSelector((state) => state.polls.polls);

  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  return (
    <div className="poll-history-container">
      <h1>
        View <strong>Poll History</strong>
      </h1>
      {polls.map((poll, index) => (
        <div key={poll.id} className="question-section">
          <h2>Question {index + 1}</h2>
          <div className="question-box">
            <div className="question-title">{poll.question}</div>
            <div className="options">
              {poll.options.map((option, optionIndex) => {
                const voteCount = poll.answers.filter((ans) => ans === option).length;
                const totalVotes = poll.answers.length;
                const percentage = totalVotes > 0 ? `${((voteCount / totalVotes) * 100).toFixed(1)}%` : '0%';

                return (
                  <div key={optionIndex} className="option">
                    <div className="option-number">{optionIndex + 1}</div>
                    <span>{option}</span>
                    <div className="percentage-bar" style={{ width: percentage }}></div>
                    <span className="percentage" >{percentage}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
      <div className="chat-bubble">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z09kQHFEV176CUtK" alt="Chat Bubble" />
      </div>
    </div>
  );
};

export default PollHistory;
