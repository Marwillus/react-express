import { useEffect, useState } from "react";
import axios from "axios";
import "./shoppinglist.css";
import InputItem from "./InputItem";
import ListItem from "./ListItem";

const Shoppinglist = () => {
  const [itemList, setItemList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrio, setItemPrio] = useState(3);
  const [itemQuantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("render first time");
    axios.get("/items").then((res) => setItemList(res.data));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const itemProps = {
      name: itemName,
      priority: itemPrio,
      quantity: itemQuantity,
    };
    axios
      .post("/items", itemProps)
      .then((res) => setItemList(res.data.newList));
  };

  const deleteItem = (e) => {
    const deleteId = { id: e.target.previousSibling.id };
    axios
      .delete(`/items`, { data: deleteId })
      .then((res) => setItemList(res.data.newList));
  };

  const handleSort = (e) => {
    e.preventDefault();
    const sortedList = [...itemList];
    sortedList.sort((a, b) => {
      return b.priority - a.priority;
    });
    console.log(sortedList);
    setItemList(sortedList);
  };

  return (
    <div className="container">
      <h3>Einkaufsliste</h3>
      <InputItem
        onSubmit={onSubmit}
        itemName={itemName}
        setItemName={setItemName}
        itemPrio={itemPrio}
        setItemPrio={setItemPrio}
        itemQuantity={itemQuantity}
        setQuantity={setQuantity}
      />
      <div className="item-list">
        <button onClick={handleSort}>sortiere nach dringlichkeit</button>
        <ul>
          {itemList.map((item, index) => {
            return (
              <li key={index}>
                <ListItem item={item} deleteItem={deleteItem} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shoppinglist;
