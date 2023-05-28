import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./nav";

describe("Navbar component", () => {
  it("Shows headers correctly", () => {
    render(<Nav selectedProducts={[]} />);
    expect(screen.getByText("Simply.")).toBeInTheDocument();
    expect(screen.getByText("Online Fashion Store")).toBeInTheDocument();
  });
});
