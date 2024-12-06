
# Live Polling System

This project implements a live polling system designed for two types of users: **Teachers** and **Students**. 
The system enables teachers to create polls, monitor live responses, and allows students to participate and view results in real time. 
The app utilizes **React** for the frontend, **Express.js** for the backend, and **Socket.io** for real-time communication.

---

## Technologies Used

- **Frontend**: React ( Redux for state management)  
- **Backend**: Node.js with Express.js  
- **Real-Time Communication**: Socket.io  


---

## Project Structure

```plaintext
.
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── redux
│   │   ├── api
│   │   └── App.js
│   └── package.json
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── utils
│   └── index.js
├── README.md
└── package.json
```

---

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps
1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd live-polling-system
   ```

2. **Install Dependencies**  
   - **Frontend**  
     ```bash
     cd frontend
     npm install
     ```
   - **Backend**  
     ```bash
     cd backend
     npm install
     ```

3. **Start the Application**  
   - Run the backend server:  
     ```bash
     cd backend
     node index.js
     ```
   - Run the frontend:  
     ```bash
     cd frontend
     npm start
     ```

4. **Access the Application**  
   Open `http://localhost:3000` in your browser.

---

## Usage

1. **Teacher**  
   - Navigate to the Teacher portal.
   - Create a poll and monitor student responses.

2. **Student**  
   - Enter a name on the first visit.
   - Respond to active polls within the allotted time.

---

## Future Enhancements

- Enhanced security features for user authentication.
- Analytics dashboards for teachers.
- Poll customization options (e.g., ratings).

---
