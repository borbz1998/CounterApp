import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);

        this.state = {
            number: 0
        };
    }

    onIncrease() {
        this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.addCounterValues(1));
    }

    onDecrease() {
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
                <input type="button" value="+" onClick={(event) => { this.onIncrease() }} style={mystyle} />
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={(event) => { this.onDecrease() }} style={mystyle} />
            </section>
        );
    }
}

export default Counter;