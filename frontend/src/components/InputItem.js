import React from "react";

const InputItem = () => {
  return (
    <form action="http://localhost:3030/items" method="POST">
      <input
        type="text"
        placeholder="enter item"
        name="name"
        id="itemInput"
        required={true}
      />
      <select name="quantity" id="quantity">
        {[...Array(10)].map((_, i) => {
          return (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <button type="submit">+</button>
      <input
        type="range"
        name="priority"
        id="priority"
        min="1"
        max="5"
        style={{ display: "block" }}
      />
    </form>
  );
};

export default InputItem;
