import './App.css';

import { Route } from 'react-router-dom';

import Movie from './pages/Movie/Movie';
import Home from './pages/Home/Home';
import Navbar from './UI/Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:code" component={Movie} />
    </div>
  );
}

export default App;
