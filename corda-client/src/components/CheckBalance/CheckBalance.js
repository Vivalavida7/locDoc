import React from "react";
import classes from "./CheckBalance.css";
const checkBal = (props) => {
  return (
    <div className={classes.CheckBal}>
      <h1>Check Balance</h1>
      <form>
        <input
          type="number"
          placeholder="Account Number"
          onChange={props.accountChange}
        />
        <button onClick={() => props.reqBal()}>Request Balance</button>
        <br />
        <h1>Balance:{props.balance}</h1>
      </form>
    </div>
  );
};

export default checkBal;
