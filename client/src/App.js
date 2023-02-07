import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

// import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" component={Cartscreen} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
