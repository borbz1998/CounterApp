import React, { Component } from 'react';
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from './CounterGroupSum';

class MultipleCounter extends Component {
    constructor(props) {
        super(props);

        this.onGenerate = this.onGenerate.bind(this)

        this.state = {
            sum : 0, 
            size: 0
        };
    }

    onGenerate(size) {
        this.setState({ size });
    }

    addCounterValues = (addend) => {
        this.setState((prevState) => ({sum : prevState.sum + addend}));
    }

    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGenerator onGenerate={this.onGenerate} />
                    <CounterGroupSum sum={this.state.sum}/>
                </fieldset>
                <CounterGroup size={this.state.size} addCounterValues={this.addCounterValues}/>
            </div>
        );
    }
}

export default MultipleCounter;