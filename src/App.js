import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <Reviews/>
      <AverageRating/>
      <Analysis/>
      <Visitors/>
    </div>
  );
}

export default App;
