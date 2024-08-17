import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

const HomeLayout = () => (
  <>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <Footer />
  </>
);

const AuthLayout = ({ children }) => (
  <div className="bg-black text-white">
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomeLayout />}
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
