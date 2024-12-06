import React from 'react';
import './KickedOut.css';

function KickedOut() {
  return (
    <div className="kicked-out-container">
      <div className="badge">Intervue Poll</div>
      <h1>You’ve been Kicked out!</h1>
      <p>Looks like the teacher had removed you from the poll system. Please try again sometime.</p>
    </div>
  );
}

export default KickedOut;
