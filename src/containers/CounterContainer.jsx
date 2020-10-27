import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseSum,decreaseSum,revertSum } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    increaseSum: () => {dispatch(increaseSum())},
    decreaseSum: () => {dispatch(decreaseSum())},
    revertSum: (value) => {dispatch(revertSum(value))}
});

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;