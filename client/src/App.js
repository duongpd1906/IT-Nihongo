import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Error from "./pages/Error/Error";
import Detail from "./pages/detail";
import UpLoad from "./pages/upLoad/upLoad";
import DesignChosen from "./pages/designPage/Design";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/design" element={<DesignChosen />} />
      <Route path="/Upload" element={<UpLoad />} />
        <Route path="/error" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
