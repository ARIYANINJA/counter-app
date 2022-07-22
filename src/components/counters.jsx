import React, { Component } from 'react';
import Counter from './counter.jsx'
class Counters extends Component {
    state = { 
        counters:[{id:1, value:4},
                    {id:2, value:0},
                    {id:3, value:0},
                    {id:4, value:0}]
     } 
    render() { 
        return (
            <React.Fragment>
                <ul style={{listStyle:"none"}}>
            {this.state.counters.map(counter => <li key = {counter.id}><Counter value = {counter.value}/></li>)}
            </ul>
            </React.Fragment>
        );
    }
}
 
export default Counters;