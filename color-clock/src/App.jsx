import { format } from 'date-fns';
import './App.css';

function App() {
  const now = new Date();
  const formattedTime = format(now, 'PPpp');

  return (
    <div className="clock-container">
      <div className="clock-title">Current Time</div>
      <p>{formattedTime}</p>
    </div>
  );
}

export default App;