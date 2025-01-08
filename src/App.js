import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage.js';
import ReserveTable from './components/reserve-a-table/ReserveTable.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reserve-a-table" element={<ReserveTable />} />
      </Routes>
    </div>
  );
}

export default App;