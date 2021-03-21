import axios from "axios";
import React, { useState } from "react";

const ListItem = ({ item, index }) => {
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
    axios.put("/items", toUpdate).then((res) => console.log(res));
  };
  const deleteItem = (e) => {
    const deleteId = { id: e.target.previousSibling.id };
    console.log(deleteId);
    axios.delete(`/items`, { data: deleteId }).then((res) => console.log(res));
  };

  return (
    <div>
      <input
        type="number"
        name="itemQuantity"
        id="itemQuantity"
        value={quantityValue}
        onChange={(e) => handleChange(e)}
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
