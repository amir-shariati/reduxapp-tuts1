import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        console.log('Increment');
    }

    decrement(){
        console.log('Decrement');
    }

    render() {
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
  }
}

export default App