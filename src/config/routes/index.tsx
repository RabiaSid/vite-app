import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../../pages/auth/sign-in-and-sign-up";
import Dashboard from "../../pages/dashboard";
import AppHome from "../../pages/app-home";
// import Protected from "../../pages/protected";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="app-home" element={<AppHome />} />
          {/* <Route path="app-home" element={<ProfileProtected Screen={<AppHome />}/>} /> */}
          {/* <Route path="/sign-up" element={<Protected Screen={Signup} />} /> */}
        </Routes>
      </Router>
    </>
  );
}
