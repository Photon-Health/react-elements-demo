import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Visits from './Visits';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visits" element={<Visits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
