import "../styles/footer.css";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext";
function Footer({ count }) {
  const { itemList } = useContext(ItemContext);
  console.log(count);
  return (
    <div id="footer">
      <p>
        You have added {itemList.length} items and packed{" "}
        {count > 0 ? (count / itemList.length) * 100 : 0} %
      </p>
    </div>
  );
}

export default Footer;
