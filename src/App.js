import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Additional from "./pages/Additional";
import Authorization from "./pages/Authorization";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="additional" element={<Additional/>}/>
        <Route path="authorization" element={<Authorization/>}/>
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;