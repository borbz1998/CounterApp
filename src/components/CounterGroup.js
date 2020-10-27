import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {

    initArray(size) {
        const number = size > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    }

    render() {
        const size = this.props.size;
        
        const counterSizeArray = this.initArray(size);
        return (
            <div>{counterSizeArray.map((value) => (
                <CounterContainer key={value} />
            ))}
            </div>
        );
    }
}

export default CounterGroup;