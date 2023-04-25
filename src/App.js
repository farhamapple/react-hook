import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/LandingPage";
import UseStatePage from "./pages/UseStatePage";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/usestate" element={<UseStatePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
