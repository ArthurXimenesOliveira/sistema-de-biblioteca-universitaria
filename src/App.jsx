import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/routes";

function App() {
  return (
    <Router>
      <Rotas />
    </Router>
  );
}

export default App;
