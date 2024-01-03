import "./App.css";
import "./lib/fontawesome/css/all.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Add from "./components/Add";
import { GlobalProvider } from "./Context/GlobalState";
import Header from "./components/Header";
import Person from "./components/Person";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="/person" element={<Person />} />
          merhaba
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;