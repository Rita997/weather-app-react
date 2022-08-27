import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>

      <footer>
        This project was coded by Merita Ramadani and is{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub.
      </footer>
    </div>
  );
}