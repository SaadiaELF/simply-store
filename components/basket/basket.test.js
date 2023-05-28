import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Basket from "./basket";

describe("Basket component", () => {
  it("Shows 0 when the basket is empty ", () => {
    const products = [];
    render(<Basket selectedProducts={products} showBasket={() => false} />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent(0);
  });

  it("Shows 2 when there is 2 different items on the basket", () => {
    const products = [
      {
        title: "Sweatpants",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
        price: 35,
        quantity: 1,
      },
      {
        title: "Slides",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
        price: 25,
        quantity: 1,
      },
    ];

    render(<Basket selectedProducts={products} showBasket={() => false} />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent(2);
  });

  it("Shows 3 when there is 3 of the same item on the basket", () => {
    const products = [
      {
        title: "Sweatpants",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
        price: 35,
        quantity: 3,
      },
    ];

    render(<Basket selectedProducts={products} showBasket={() => false} />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent(3);
  });
});
