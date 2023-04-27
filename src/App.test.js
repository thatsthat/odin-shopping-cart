import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("renders the shopping cart image", () => {
    render(<App />);
    expect(screen.getByTitle("shoppingCart")).toBeInTheDocument();
  });

  it("shopping cart image not present after clicking on products button on navbar", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByText(/Products/);
    await user.click(button);
    expect(screen.queryByTitle("shoppingCart")).not.toBeInTheDocument();
  });
});
