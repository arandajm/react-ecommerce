import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Ecommerce/i);
  expect(titleElement).toBeInTheDocument();
});
