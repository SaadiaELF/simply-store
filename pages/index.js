import { useState } from "react";
import Nav from "../components/nav/nav";
import Main from "../components/main/main";
import Checkout from "../components/checkout/checkout";

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [show, setShow] = useState(false);

  function showBasket() {
    setShow(!show);
  }

  return (
    <>
      <Nav selectedProducts={selectedProducts} showBasket={showBasket} />
      <Checkout
        show={show}
        products={selectedProducts}
        setProducts={setSelectedProducts}
        setShow={setShow}
      />
      <Main
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </>
  );
}
