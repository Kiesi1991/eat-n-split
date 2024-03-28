import React from "react";
import { Button } from "./Button";

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with XXX</h2>
      <label>💲 Bill value</label>
      <input type="text" />
      <label>🛃 Your expanse</label>
      <input type="text" />
      <label>👭 X's expanse</label>
      <input type="text" disabled />
      <label>🧞‍♂️ Who is paying the bill</label>
      <select>
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
