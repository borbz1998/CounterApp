import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                <label htmlFor="">sum of all counters value is {this.props.sum} </label>
            </div>
        );
    }
}

export default CounterGroupSum;