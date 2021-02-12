import { Component } from 'react';
class Search extends Component {
    render(){
        return (
        <div>Searching..
            {this.props.results}
        </div>
        )
    }
}

export default Search;