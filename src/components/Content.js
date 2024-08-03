import Button from "./Button.js";
import "../styles/content.css";
import "../styles/button.css";
import { useContext, useState } from "react";
import { ItemContext } from "../context/itemContext.js";
import { useEffect } from "react";
import { useCallback } from "react";
function Content({ count, setpackedCount }) {
  const { itemList, setItemList } = useContext(ItemContext);
  const [sortType, setSortType] = useState("input");
  console.log(itemList);
  const applySort = useCallback(() => {
    let sortedList = [...itemList];
    if (sortType === "packed") {
      sortedList.sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
    } else {
      // Assuming you want to maintain the original order
      sortedList.sort((a, b) => a.id - b.id);
      console.log("Based on input", sortedList);
    }
    return sortedList;
  }, [itemList, sortType]);

  // Apply sorting whenever the itemList or sortType changes
  useEffect(() => {
    const sortedList = applySort();
    if (JSON.stringify(itemList) !== JSON.stringify(sortedList)) {
      setItemList(sortedList); // Only update if the sorted list is different
    }
  }, [itemList, applySort, setItemList]);
  function handleClearList() {
    setItemList([]);
    setpackedCount(0);
    console.log("Inside clear", itemList);
  }
  function handleDelete(itemName) {
    setItemList(
      itemList.filter((item) => {
        if (itemName !== item.itemName) {
          return true;
        }
      })
    );
  }

  function handleOrder(e) {
    setSortType(e.target.value); // Update the sort type
  }
  function handleCheck(itemName) {
    console.log("handleCheck", itemList);
    setItemList(
      itemList.map((item) => {
        if (item.itemName === itemName) {
          if (item.isPacked === false) {
            setpackedCount((c) => c + 1);
            return { ...item, isPacked: true }; // Update isPacked only if item matches
          } else {
            if (count > 0) {
              console.log(count);
              setpackedCount((c) => c - 1);
            }
            return { ...item, isPacked: false };
          }
        }
        return item; // Return unchanged item if it doesn't match
      })
    );
  }
  return (
    <>
      <div id="content">
        <ul>
          {itemList.map((item) => (
            <li key={item.itemName}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.itemName)}
              />
              <p>{item.itemCount}</p>
              <p>{item.itemName}</p>
              <Button id="delete" onClick={(e) => handleDelete(item.itemName)}>
                ❌
              </Button>
            </li>
          ))}
        </ul>
        <select id="sort" onChange={(e) => handleOrder(e)}>
          <option value="input">Sort based on input</option>
          <option value="packed">Sort based on packing status</option>
        </select>
        <Button id="clear-list" onClick={handleClearList}>
          Clear List
        </Button>
      </div>
    </>
  );
}

export default Content;
