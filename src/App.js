import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NavBer from "./pages/Shared/NavBar/NavBer";
import Medicines from "./pages/Home/Medicine/Medicines";
import Owners from "./pages/Owners/Owners";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Registert from "./pages/Login/Login/register/Registert";
import AuthProvider from "./context/AuthProvide/AuthProvider";
import PrivateRoute from "./pages/Login/Login/PrivateRoute/PrivateRoute";
import Booking from "./Booking/Booking/Booking";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBer></NavBer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="owner" element={<Owners />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registert />} />
          <Route
            path="/booking/:serviceId"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
