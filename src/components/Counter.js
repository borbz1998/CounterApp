import React, { Component } from 'react';
import "./css/Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    componentWillUnmount() {
        // this.props.addCounterValues(this.state.number * -1);
        this.props.revertSum(this.state.number);
    }

    onIncrease = () => {
        // this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.addCounterValues(1));
        this.setState((prevState) => ({number: prevState.number + 1})
        , this.props.increaseSum());
    }

    onDecrease = () => {
        // this.setState((prevState) => ({ number: prevState.number - 1 }), () => this.props.addCounterValues(-1));
        this.setState((prevState) => ({number: prevState.number - 1})
        , this.props.decreaseSum());
    }

    render() {
        return (
            <section>
                <input type="button" id="counter" value="+" onClick={this.onIncrease} />
                <span>{this.state.number}</span>
                <input type="button" id="counter" value="-" onClick={this.onDecrease} />
            </section>
        );
    }
}

export default Counter;