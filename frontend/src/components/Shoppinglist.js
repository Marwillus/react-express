import { useEffect, useState } from "react";
import axios from "axios";
import "./shoppinglist.css";
import InputItem from "./InputItem";
import ListItem from "./ListItem";

const Shoppinglist = () => {
  const [itemList, setItemList] = useState([]);
  const [itemObj, setItemObj] = useState();

  useEffect(() => {
    console.log("render first time");
    axios.get("/items").then((res) => setItemList(res.data));
  }, []);

  useEffect(() => {
    console.log("update");
    if (itemObj) {
      axios.post("/items", itemObj).then((res) => console.log(res));
    }
  }, [setItemObj]);

  return (
    <div className="container">
      <h3>Einkaufsliste</h3>
      <InputItem setItemObj={setItemObj} />
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
