
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import UseStagePage from "./pages/UseStatePage";
import UseEffectPage from './pages/UseEffectPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='use-state' element={<UseStagePage />} />
          <Route path='use-effect' element={<UseEffectPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
