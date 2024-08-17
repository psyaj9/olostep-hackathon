import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from './components/Home';

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
  <>
    {children}
    <Footer />
  </>
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
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
