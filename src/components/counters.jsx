import React, { Component } from 'react';
import Counter from './counter.jsx'
class Counters extends Component {
    render() { 
        const {onReset, onIncrement, onDelete, counters} = this.props;
        return (
            <React.Fragment>
                <button
                onClick={onReset}
                 className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
            {counters.map(counter => (
                <Counter 
                key={counter.id}
                onDelete = {onDelete}
                onIncrement = {onIncrement}
                counter = {counter}
                />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Counters;