import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/final" element={<Final />} /> */}
        {/* <Route path="/items/:type" element={<Items />} /> */}
      </Routes>

    </div>
  );
}

export default App;
