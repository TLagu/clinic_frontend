import { Routes, Route } from "react-router-dom";
import { About } from "components/about/About";
import { Home } from "components/home/Home";
import { Login } from "components/login/Login";
import { Navbar } from "components/navbar/Navbar";
import { ProtectedRoute } from "components/ProtectedRoute";
import { UnauthorizedRoute } from "components/UnauthorizedRoute";
import { Admin } from "components/admin/Admin";
import { Secretary } from "components/secretary/Secretary";
import { Clinics } from "components/clinics/Clinics";
import { News } from "components/news/News";
import { Contact } from "components/contact/Contact";
import { Register } from "components/register/Register";
import { DoctorSchedule } from "components/doctor/DoctorSchedule";
import { Account } from "components/common/account/Account";
import { PatientSchedule } from "components/patient/PatientSchedule";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
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
          path="/register"
          element={
            <UnauthorizedRoute>
              <Register />
            </UnauthorizedRoute>
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
          path="/doctor_schedule"
          element={
            <ProtectedRoute>
              <DoctorSchedule />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/patient_schedule"
          element={
            <ProtectedRoute>
              <PatientSchedule />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
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
      </Route>
    </Routes>
  );
};
