import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <p>Choose your activity:</p>
      <div className="activity-buttons">
        <Link to="/letters">
          <button type="button">Letters</button>
        </Link>
        <Link to="/numbers">
          <button type="button">Numbers</button>
        </Link>
      </div>
    </main>
  );
}

export default App;
