import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./main";
import fetchProducts from "../../data/fetchProducts";

jest.mock("../../data/fetchProducts");

describe("Main component", () => {
  it("Shows header correctly", async () => {
    fetchProducts.mockResolvedValueOnce();
    waitFor(() => render(<Main />));
    expect(screen.getByText("Available online")).toBeInTheDocument();
  });
});
