import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "./grid";
import MOCK_PRODUCTS from "../../data/mockProducts";
import fetchProducts from "../../data/fetchProducts";

jest.mock("../../data/fetchProducts");

describe("Grid component", () => {
  it("Shows list of products", async () => {
    fetchProducts.mockResolvedValueOnce(MOCK_PRODUCTS);
    waitFor(() => render(<Grid />));
    const grid = screen.getByTestId("grid");
    expect(grid).toHaveTextContent("Loading");
    expect(fetchProducts).toHaveBeenCalledTimes(1);

    waitFor(() =>
      MOCK_PRODUCTS.forEach((product) =>
        expect(screen.getByText(product.node.title)).toBeInTheDocument()
      )
    );
  });
});
