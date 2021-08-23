import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ExercisesList from './components/ExercisesList';
import SessionsList from './components/SessionsList';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exercises">Exercises</Link>
              </li>
              <li>
                <Link to="/sessions">Sessions</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/exercises" component={ExercisesList} />
          <Route path="/sessions" component={SessionsList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
