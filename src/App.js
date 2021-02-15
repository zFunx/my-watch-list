import './App.css';

import { Route } from 'react-router-dom';
import axios from 'axios';
import Movie from './pages/Movie/Movie';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './UI/Components/Navbar/Navbar';
import { Component } from 'react';
import Login from './admin/Login/Login';
class App extends Component {
	state = {
		q: '',// search query
		searchResults: []
	}

	search = (event) => {
		const inp = event.currentTarget;
		const q = inp.value;
		axios.get(`/movies?name_contains=${q}`)
			.then(res => {
				const searchResults = res.data;
				this.setState({ q, searchResults });
			});
	};

	render() {
		let mainPage = <Route exact path="/" component={Home} />;
		if (this.state.searchResults.length > 0) {
			mainPage = <Route exact path="/" render={() => <Search results={this.state.searchResults} />} />;
		}

		return (
			<div className="App">
				<Navbar onSearch={this.search} />
				{mainPage}
				<Route exact path="/movie/:code" component={Movie} />
				<Route exact path="/admin" component={Login} />
			</div>
		);
	}
}

export default App;
