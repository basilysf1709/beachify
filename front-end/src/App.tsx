import './App.css';
import Navbar from './components/Navbar/Navbar'
import RouteHandler from './Routes/RouteHandler';

// Color: #55c5d9
// Secondary Color: #f73952

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <RouteHandler />
    </div>
  );
}

export default App;
