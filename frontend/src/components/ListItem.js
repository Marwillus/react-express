import axios from "axios";
import React, { useState } from "react";

const ListItem = ({ item, index }) => {
  const [inputValue, setInputValue] = useState(item.name);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    e.target.value = inputValue;
  };
  const handleBlur = (e) => {
    const toUpdate = { _id: e.target.id, name: e.target.value };
    axios
      .put("http://localhost:3030/items", toUpdate)
      .then((res) => console.log(res));
  };
  const deleteItem = (e) => {
    const deleteId = e.target.previousSibling.id;

    axios
      .delete(`http://localhost:3030/items:${deleteId}`)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <span>{item.quantity}</span>
      <input
        type="text"
        name="item-name"
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
