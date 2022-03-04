import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h2 className="header-title">Alphabet & Numbers Learning</h2>
        </Link>
      </header>
      <body>
        <p>Choose your activity:</p>
        <div className="activity-buttons">
          <Link to="/letters">
            <button type="button">Letters</button>
          </Link>
          <Link to="/numbers">
            <button type="button">Numbers</button>
          </Link>
        </div>
      </body>
      <footer>
        <div>
          <p>
            Images: ©{" "}
            <a
              href="https://alphabetimals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              Alphabetimals
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
