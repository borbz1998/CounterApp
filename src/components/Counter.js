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
        this.props.addCounterValues(this.state.number * -1);
    }

    onIncrease = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.addCounterValues(1));
    }

    onDecrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }), () => this.props.addCounterValues(-1));
    }

    render() {
        const mystyle = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial",
            margin: "10px",
            background: "black",
            fontSize: "30px"
        };
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