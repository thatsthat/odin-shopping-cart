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

  it("all product images are present", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByText(/Products/);
    await user.click(button);

    const images = ["apple", "banana", "grapes", "melon", "pear", "plum"];

    images.forEach((i) => expect(screen.getByAltText(i)).toBeInTheDocument());
  });

  it("number of images is correct", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByText(/Products/);
    await user.click(button);

    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getAllByText(/Add to cart/)).toHaveLength(6);
  });
});
