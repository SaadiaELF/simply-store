import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridItem from "./gridItem";

describe("GridItem component", () => {
  it("Shows Item's title, img , price and 'Add to Basket' button ", () => {
    render(<GridItem />);
    const item = screen.getByTestId("item");
    const img = screen.getByTestId("item-img");
    const description = screen.getByTestId("item-description");
    const title = screen.getByTestId("item-title");
    const btn = screen.getByTestId("item-btn");
    expect(item).toContainElement(img, description, title, btn);
    expect(btn).toHaveTextContent("Add to Basket");
  });
});
