import React from "react";

const InputItem = ({
  onSubmit,
  itemName,
  setItemName,
  setItemPrio,
  itemPrio,
  setQuantity,
  itemQuantity,
}) => {
  const onChange = (e) => {
    if (e.target.name === "name") {
      setItemName(e.target.value);
    } else if (e.target.name === "priority") {
      setItemPrio(e.target.value);
    } else if (e.target.name === "quantity") {
      setQuantity(e.target.value);
    }
  };

  return (
    <form className="item-form">
      <div className="pseudo-label">
        <span>Artikel</span>
        <span>Menge</span>
      </div>
      <div className="input-wrapper">
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
      <div className="slider">
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
      </div>
    </form>
  );
};

export default InputItem;
