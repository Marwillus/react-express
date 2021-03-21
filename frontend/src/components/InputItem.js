import React, { useState } from "react";
import axios from "axios";

const InputItem = ({ setItemObj }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrio, setItemPrio] = useState(3);
  const [itemQuantity, setQuantity] = useState(1);

  const onChange = (e) => {
    if (e.target.name === "name") {
      setItemName(e.target.value);
    } else if (e.target.name === "priority") {
      setItemPrio(e.target.value);
    } else if (e.target.name === "quantity") {
      setQuantity(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const itemObj = {
      name: itemName,
      priority: itemPrio,
      quantity: itemQuantity,
    };
    axios.post("/items", itemObj).then((res) => console.log(res));
    // setItemObj(itemObj);
  };

  return (
    <form className="item-form">
      <div>
        <input
          type="text"
          placeholder="enter item"
          name="name"
          id="itemInput"
          value={itemName}
          onChange={(e) => onChange(e)}
          required={true}
        />
        <select
          name="quantity"
          id="quantity"
          value={itemQuantity}
          onChange={(e) => onChange(e)}
        >
          {[...Array(20)].map((_, i) => {
            return (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <button onClick={(e) => onSubmit(e)}>+</button>
      </div>
      <span>unwichtig</span>
      <input
        type="range"
        name="priority"
        id="priority"
        min="1"
        max="5"
        value={itemPrio}
        onChange={(e) => onChange(e)}
      />
      <span>wichtig</span>
    </form>
  );
};

export default InputItem;
