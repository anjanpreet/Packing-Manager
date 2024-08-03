import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Header.js";
import Form from "./Form.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import "../index.css";
function App() {
  const [packedCount, setPackedCount] = useState(0);
  return (
    <>
      <Logo></Logo>
      <Form></Form>
      <Content count={packedCount} setpackedCount={setPackedCount}></Content>
      <Footer count={packedCount}></Footer>
    </>
  );
}

export default App;
