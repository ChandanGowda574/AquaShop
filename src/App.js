import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.comonent";
import "./App.css";

const Shop = () =>{
  return (
    <div className="shop">
    <h1>I am Shop component</h1>
     </div>
  );
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
      <Route path="/" index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
