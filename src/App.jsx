import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"; 
import { Register,List } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="nuevo" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
