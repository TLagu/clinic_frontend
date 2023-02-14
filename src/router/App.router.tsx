import { Routes, Route } from "react-router-dom";
import { About } from "components/about/About";
import { Home } from "components/home/Home";
import { Login } from "components/login/Login";
import { Navbar } from "components/navbar/Navbar";
import { Profile } from "components/profile/Profile";
import { ProtectedRoute } from "components/ProtectedRoute";
import { UnauthorizedRoute } from "components/UnauthorizedRoute";
import { Admin } from "components/admin/Admin";
import { Doctor } from "components/doctor/Doctor";
import { Secretary } from "components/secretary/Secretary";
import { Patient } from "components/patient/Patient";
import { Clinics } from "components/clinics/Clinics";
import { News } from "components/news/News";
import { Contact } from "components/contact/Contact";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/clinics" element={<Clinics />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/login"
          element={
            <UnauthorizedRoute>
              <Login />
            </UnauthorizedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <Doctor />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/secretary"
          element={
            <ProtectedRoute>
              <Secretary />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <Patient />
            </ProtectedRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
};
