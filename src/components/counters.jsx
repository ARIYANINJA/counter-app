import React, { Component } from 'react';
import Counter from './counter.jsx'
class Counters extends Component {
    state = { 
        counters:[
                    {id:1, value:4},
                    {id:2, value:8},
                    {id:3, value:0},
                    {id:4, value:0}]
     };
     handleIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters})
     };
     handleDelete = (CounterId) =>{
       const counters = this.state.counters.filter(c => c.id !== CounterId) 
       this.setState({counters: counters});
    };
    handleReset = () =>{    
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;  
        });
        this.setState({counters})
    }
    render() { 
        return (
            <React.Fragment>
                <button
                onClick={this.handleReset}
                 className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                <ul style={{listStyle:"none"}}>
            {this.state.counters.map(counter => <li key = {counter.id}>
                <Counter onDelete = {this.handleDelete} onIncrement = {this.handleIncrement} value = {counter.value} counter = {counter}/>
                </li>)}
            </ul>
            </React.Fragment>
        );
    }
}
 
export default Counters;