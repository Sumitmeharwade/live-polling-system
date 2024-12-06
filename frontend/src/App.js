import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import GettingStarted from './components/GettingStarted';
import GettingStartedTeacher from './components/GettingStartedTeacher';
import GettingStartedStudent from './components/GettingStartedStudent';
import WaitingScreen from './components/WaitingScreen';
import QuestionScreen from './components/QuestionScreen';
import KickedOut from './components/KickedOut';
import PollHistory from './components/PollHistory';


// function App() {
//   return (
//     <div className="App">

//     <Welcome></Welcome>
//     {/* <GettingStarted></GettingStarted> */}
//     {/* <GettingStartedStudent></GettingStartedStudent> */}
//     {/* <WaitingScreen></WaitingScreen> */}
//     {/* <QuestionScreen></QuestionScreen> */}
//     {/* <KickedOut></KickedOut> */}
//     {/* <PollHistory></PollHistory> */}
//     </div>
//   );
// }

function App() {
  const navigate = useNavigate();
  return (
      <div>
        {/* <button onClick={() => navigate(-1)}>go back</button> */}
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/home" element={<Welcome/>}/>
          <Route exact path="/getting-started" element={<GettingStarted/>}/>
          <Route exact path="/question-screen" element={<QuestionScreen/>}/>
          <Route exact path="/poll-history" element={<PollHistory/>}/>
          <Route exact path="/kicked-out" element={<KickedOut/>}/>
          {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
  );
}

export default App;
