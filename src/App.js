import './App.css'
import Navbar from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataCard from './components/DataCard.js';
import ActiveUserCard from './components/ActiveUserCard.js';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="d-flex justify-content-around mt-4 pb-2">
        <DataCard/>
        <ActiveUserCard/>
      </div>
    </div>
  );
}

export default App;
