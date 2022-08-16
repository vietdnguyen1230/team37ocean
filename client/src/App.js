import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Directories from "./pages/Directories";
import Events from "./pages/Events";
import UserProfile from "./pages/UserProfile";
import Event from "./pages/Event";
import Publish from "./pages/Publish";

export default function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={!user ? <Register /> : <Home />} />
        <Route path='login' element={<Login />} />
        <Route path='directories' element={<Directories />} />
        <Route path='publish' element={<Publish />} />
        <Route path='events' element={<Events />} />
        <Route path='event/:id' element={<Event />} />
        <Route path='/profile' element={user && <UserProfile />} />
      </Routes>
    </div>
  );
}
