import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div>
                <button className="square" onClick={this.props.onClickHandler}>{this.props.value}</button>
            </div>
        );
    }
}

export default Square;
