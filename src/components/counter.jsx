import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value: this.props.value
    };
    styles = {
        fontSize: '1.1rem',
        fontWeight: 'bold',
    }
    handleIncrement = (product) =>{
        this.setState({value: this.state.value + 1});
    };
    render() { 
        return(
        <React.Fragment>
        <span style = {this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement({id:1})} className='btn btn-secondary m-2'>increment</button>
        </React.Fragment>
        );
}
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
formatCount(){
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
}
}
 
export default Counter;