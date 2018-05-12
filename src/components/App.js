import React, { Component } from 'react';

import Board from './Board.js';
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board />
            </div>
        );
    }
}

export default App;
