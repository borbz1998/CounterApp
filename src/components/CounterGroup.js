import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {

    initArray(size) {
        const number = size > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    }

    render() {
        const size = this.props.size;
        console.log(this.props.number + "counterGroup");
        
        const counterSizeArray = this.initArray(size);
        return (
            <div>{counterSizeArray.map((value) => (
                <Counter key={value} addCounterValues={this.props.addCounterValues} />
            ))}
            </div>
        );
    }
}

export default CounterGroup;