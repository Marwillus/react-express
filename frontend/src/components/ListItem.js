import axios from "axios";
import React, { useState } from "react";

const ListItem = ({ item, deleteItem }) => {
  const [inputValue, setInputValue] = useState(item.name);
  const [quantityValue, setQuantityValue] = useState(item.quantity);

  const handleChange = (e) => {
    if (e.target.name === "itemName") {
      setInputValue(e.target.value);
    } else if (e.target.name === "itemQuantity") {
      setQuantityValue(e.target.value);
    }

    e.target.value = inputValue;
  };

  const handleBlur = (e) => {
    const toUpdate = { _id: e.target.id, name: e.target.value };
    axios
      .put("/items", toUpdate)
      .then((res) => console.log("successfully updated"));
  };

  const priorityColor = {
    1: "#6CF589",
    2: "#DCF570",
    3: "#F5D26D",
    4: "#F5A66A",
    5: "#F56560",
  };

  return (
    <div className="list-item">
      <input
        type="number"
        name="itemQuantity"
        id="item-quantity"
        value={quantityValue}
        onChange={(e) => handleChange(e)}
        style={{ borderLeft: `${priorityColor[item.priority]} 5px solid` }}
      />
      <input
        type="text"
        name="itemName"
        value={inputValue}
        id={item._id}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
      />
      <button className="deleteBtn" onClick={(e) => deleteItem(e)}>
        X
      </button>
    </div>
  );
};
export default ListItem;
