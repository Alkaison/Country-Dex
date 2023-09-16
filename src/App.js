import './App.css';
import Filter from './Components/Filter';
import Fetch from './Components/Fetch';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Fetch />
    </div>
  );
}

export default App;
