import React, { useState } from "react";
import "../styles/form.css";
import "./Button.js";
import Button from "./Button.js";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext.js";
function Form() {
  const { itemList, setItemList } = useContext(ItemContext);
  const [itemCount, setItemCount] = useState();
  const [itemName, setItemName] = useState("");
  function handleAddition() {
    if (itemCount > 0) {
      const containsItemName = itemList.some(
        (item) => item.itemName === itemName
      );
      if (!containsItemName) {
        setItemList((itemList) => [
          ...itemList,
          { itemCount, itemName, isPacked: false, id: itemList.length },
        ]);
      }
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddition();
      }}
    >
      <p>What do you need for your trip?</p>
      <input
        className="item count"
        name="ItemCount"
        type="number"
        min="0"
        placeholder="Count"
        onChange={(e) => setItemCount(Number(e.target.value))}
        autoComplete="off"
      />
      <input
        className="item name"
        name="itemName"
        type="text"
        placeholder="Item.."
        value={itemName}
        //To track and do functions if any change in inpput value
        onChange={(e) => setItemName(e.target.value)}
        //To avoid suggestions in input field
        autoComplete="off"
      />
      <button id="add">Add</button>
    </form>
  );
}
//onClick={() => handleAddition()
export default Form;
