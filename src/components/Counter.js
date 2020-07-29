import React from 'react'

class Counter extends React.Component{
    render() {
        const {value, onIncreament, onDecreament } = this.props
        return(
            <div>
                <h2> Count: {value} </h2>
                <button onClick={onIncreament}>Increment</button>
                <button onClick={onDecreament}>Decrement</button>
            </div>
        )
    }
}

export default Counter