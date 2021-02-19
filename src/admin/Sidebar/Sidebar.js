import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return (
            <div>
                <Link to="/admin/genres">Genres</Link>
            </div>
        )
    }
}

export default Sidebar;