import './App.css';

import { Route } from 'react-router-dom';

import Movie from './pages/Movie/Movie';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './UI/Components/Navbar/Navbar';
import { Component } from 'react';
class App extends Component {
  state = {
    q: '',// search query
    searchResults: []
  }

  search = (event) => {
    const inp = event.currentTarget;
    const q = inp.value;

    // axios

    this.setState({q: q, searchResults: ['inception', 'minions']})
    console.log('user entered search query');
  };

  render() {
    let mainPage = <Route exact path="/" component={Home} />;
    if (this.state.q.length > 0) {
      mainPage = <Route exact path="/" render={() => <Search results={this.state.searchResults} />} />;
    }

    return (
      <div className="App">
        <Navbar onSearch={this.search} />
        {mainPage}
        <Route exact path="/movie/:code" component={Movie} />
      </div>
    );
  }
}

export default App;
