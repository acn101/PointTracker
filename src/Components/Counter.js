import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.state.value}</p>
                <button onClick={() => this.setState({value: this.state.value - 5})}>-5</button>
                <button onClick={() => this.setState({value: this.state.value - 1})}>-1</button>
                <button onClick={() => this.setState({value: this.state.value + 1})}>+1</button>
                <button onClick={() => this.setState({value: this.state.value + 5})}>+5</button>
                <button onClick={() => this.setState({value: 0})}>Reset</button>
            </div>
        );
    }
}

export default Counter;