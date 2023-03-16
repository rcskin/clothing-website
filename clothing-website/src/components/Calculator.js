import React from "react";

//create a class component for the calculator
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingAmount: "",
            months: "",
            total: "",
            monthlyPayments: "",
        };
        //if user wants to recalculate without refreshing page use new handles to allow this
        this.handleShoppingAmountChange = this.handleShoppingAmountChange.bind(this);
        this.handleMonthsChange = this.handleMonthsChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }
    //make handle event changes and set state
    handleShoppingAmountChange (e) {
        this.setState({shoppingAmount: e.target.value});
    }
    handleMonthsChange (e) {
        this.setState({months: e.target.value});
    }

    handleCalculate () {
        //calculate total with interest
        const total = this.state.shoppingAmount * 1.2;

        //calculate monthly payment
        const monthlyPayments = total / this.state.months;

        //update state with results
        this.setState({total, monthlyPayments});
    }
    
    //render the component
    render () {
        return (
            //create and display input fields; add labels for good practice and accessibility
            <div className="calculator-content">
                <h2>Calculate your Interest Payments!</h2>
                <p>We use 20% non-compounding interest if using our monthly payment scheme.</p>
                <label> 
                    Shopping Amount:
                    <input type="number" 
                    //set value to shoppingAmount prop of the component's state
                    value={this.state.shoppingAmount}
                    //onChange event fired to update the prop in component's state with new value entered by user
                    onChange={this.handleShoppingAmountChange} />
                </label>
                <br />
                <label>
                    Months to Pay Back:
                    <input type="number"
                    value={this.state.months}
                    onChange={this.handleMonthsChange} />
                </label>
                <br />
                <button onClick={this.handleCalculate}>Calculate Payments</button>
                <br />
                {/* use conditional rendering to display results if they exist - see source below */}
                {this.state.total && (<div className="paymentTotal">Total to Pay: ${this.state.total}</div>)}
                {this.state.monthlyPayments && (<div className="monthlyPaymentTotal">Monthly Payments: ${this.state.monthlyPayments}</div>)}
            </div> 
        );
    }
}

export default Calculator;

/*Note to Reviewer:
I saw some examples of logic && operators being used in React examples describing 
rendering only if 'truthy' and was curious as to what it meant and how to use.
What I did above to render the display results if they existed, was used Short-circuit evalution
which takes each operand and converts to a boolean. So if one is found to be false or 'falsy' then
it does not evaluate the second operand. Therefore, as I understand it, as 
long as this.state.total or this.state.monthlyPayments is false, it won't output a null result
to the user because of operator precedence. This allows the <div> elements with the state total and monthly
payments to display only if those values are true to begin with or 'truthy'. 
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

Other sources used to help with the input text and handling events were:
https://reactjs.org/docs/forms.html#controlled-components
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label


*/