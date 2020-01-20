import React, { Component } from "react";
import CheckBalance from "../../components/CheckBalance/CheckBalance";
import Transactions from "../../components/Transactions/Transactions";
import axios from "axios";

class UserHome extends Component {
  state = {
    accountno: "",
    from: "",
    receiverBank: "",
    to: "",
    balance: "",
    amount: "",
    exchange: "",
    banks: ""
  };

  componentDidMount() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.setState({
          banks: response.data
        });
        console.log(this.state.banks);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  accountChangeHandler = (event) => {
    let val = event.target.value;
    this.setState({ accountno: val });
  };

  bankChangeHandler = (event) => {
    let val = event.target.value;
    this.setState({ selectedBank: val });
  };
  toAccountHandler = (event) => {
    let val = event.target.value;
    this.setState({ to: val });
  };
  onRequestBalance = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employee/1")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <CheckBalance
          balance={this.state.balance}
          accountChange={this.accountChangeHandler}
          reqBal={this.onRequestBalance}
        />
        <Transactions
          toAccount={this.toAccountHandler}
          bankSelect={this.bankChangeHandler}
          selectedBank={this.state.receiverBank}
          banklist={this.state.banks}
          accountno={this.state.accountno}
        />
      </div>
    );
  }
}

export default UserHome;
