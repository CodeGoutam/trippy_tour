import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Service } from "./routes/Service";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/service" Component={Service} />
        <Route path="/about" Component={About} /> 
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
