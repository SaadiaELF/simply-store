import { useState } from "react";
import Nav from "../components/nav/nav";
import Main from "../components/main/main";

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <Nav selectedProducts={selectedProducts} />
      <Main
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </>
  );
}
