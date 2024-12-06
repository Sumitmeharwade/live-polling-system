import React from 'react';
import { useSelector } from 'react-redux';
import GettingStartedTeacher from './GettingStartedTeacher';
import GettingStartedStudent from './GettingStartedStudent';
import { useNavigate } from 'react-router-dom';



function GettingStarted() {
    const role = useSelector((state) => state.role); // Access the role from Redux
    const navigate = useNavigate();
    return (
        <div>
            {!role ? (
                <div>
                    <h1>Role not selected</h1>
                    <p>Please select a role to continue</p>
                    <button onClick={() => navigate('/home')}>Go to Home</button>
                </div>
            ) : role === 'teacher' ? (
                <GettingStartedTeacher />
            ) : (
                <GettingStartedStudent />
            )}
        </div>
    );
}

export default GettingStarted;