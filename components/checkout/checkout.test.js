import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkout from "./checkout";

describe("Checkout component", () => {
  describe("Basket is empty ", () => {
    const products = [];
    it("Shows a message when the basket is empty ", () => {
      render(<Checkout products={products} show={true} />);
      const message = screen.getByTestId("message");
      expect(message).toHaveTextContent(
        "You don't have anything in your basket."
      );
    });
    it("Shows total of 0  when the basket is empty ", () => {
      render(<Checkout products={products} show={true} />);
      const total = screen.getByTestId("total");
      expect(total).toHaveTextContent("Total : £0.00");
    });
  });

  describe("Basket has 2 different items ", () => {
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
    it("Shows 2 items when 2 different items are added to the basket", () => {
      render(<Checkout products={products} show={true} />);
      const productsList = screen.getAllByTestId("product");
      expect(productsList).toHaveLength(2);
    });
    it("Shows the exact total of 2 items", () => {
      render(<Checkout products={products} show={true} />);
      const total = screen.getByTestId("total");
      expect(total).toHaveTextContent("Total : £60.00");
    });
  });

  describe("Basket has 2 same items ", () => {
    const products = [
      {
        title: "Sweatpants",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
        price: 70,
        quantity: 2,
      },
    ];
    it("Shows 1 item when 2 of the same item are added to the basket", () => {
      render(<Checkout products={products} show={true} />);
      const productsList = screen.getAllByTestId("product");
      expect(productsList).toHaveLength(1);
    });
    it("Shows the exact total of 2 items", () => {
      render(<Checkout products={products} show={true} />);
      const total = screen.getByTestId("total");
      expect(total).toHaveTextContent("Total : £70.00");
    });
  });
});
