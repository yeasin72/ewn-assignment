import './assets/style/app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nutrition from './pages/Nutrition/Nutrition';

/**
 * Application.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nutrition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
