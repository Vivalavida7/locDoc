import React from "react";

const transactions = (props) => {
  return (
    <div>
      Bank:{}
      <br />
      From :<input />
      <br />
      {/* Receiver Bank:
      <select value={props.selectedBank} onChange={props.bankSelect}>
        {props.banklist.map((bank) => (
          <option key={bank.value} value={bank.value}>
            {bank.display}
          </option>
        ))}
      </select> */}
      <br />
      To:
      <input onChange={props.toAccount} />
      <br />
      Exchange rate:
      <input /> <button onClick={props.exRate}>Get Exchange rate</button>
      <br />
    </div>
  );
};

export default transactions;
