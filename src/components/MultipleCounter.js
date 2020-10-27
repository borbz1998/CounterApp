import React, { Component } from 'react';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGeneratorContainer from "../containers/CounterSizeGeneratorContainer"
import CounterGroupContainer from "../containers/CounterGroupContainer"

class MultipleCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: 0,
            size: 0
        };
    }

    onGenerate = (size) => {
        this.setState({ size });
    }

    addCounterValues = (addend) => {
        this.setState((prevState) => ({ sum: prevState.sum + addend }));
    }

    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSum sum={this.state.sum} />
                </fieldset>
                <CounterGroupContainer />
            </div>
        );
    }
}

export default MultipleCounter;