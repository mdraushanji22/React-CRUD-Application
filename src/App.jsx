import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./pages/CreateUser";
import Update from "./pages/Update";
import Read from "./pages/Read";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
