import './App.css';
import Filter from './Components/Filter';
import MainBody from './Components/MainBody';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <MainBody />
    </div>
  );
}

export default App;
