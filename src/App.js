import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Home from './components/Home';
import ChartDisplay from './components/ChartDisplay';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/:id' exact element={<ChartDisplay/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
