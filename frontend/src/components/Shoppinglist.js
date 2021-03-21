import { useEffect, useState } from "react";
import axios from "axios";
import "./shoppinglist.css";
import InputItem from "./InputItem";
import ListItem from "./ListItem";

const Shoppinglist = () => {
  const [newItem, setNewItem] = useState();
  const [priority, setPriority] = useState(2);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log("render");

    axios
      .get("http://localhost:3030/items")
      .then((res) => setItemList(res.data));
  }, []);

  return (
    <div className="container">
      <h3>Einkaufsliste</h3>
      <InputItem />
      <ul className="item-list">
        {itemList.map((item, index) => {
          return (
            <li key={index}>
              <ListItem item={item} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shoppinglist;
