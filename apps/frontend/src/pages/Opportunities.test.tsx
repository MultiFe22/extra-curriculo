import { render, screen } from "@testing-library/react";

import Opportunities from "./Opportunities";

describe("App", () => {
  it("renders headline", () => {
    render(<Opportunities />);

    screen.debug();
  });
});
