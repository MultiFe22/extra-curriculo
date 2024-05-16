import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  it("renders the component with all major sections", () => {
    render(<Footer />);
    // Verify presence of section titles or texts
    expect(screen.getByText("Oportunidades")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
    expect(screen.getByText("Créditos")).toBeInTheDocument();
  });

  it("contains copyright and policy information", () => {
    render(<Footer />);
    expect(
      screen.getByText("© 2024 Untitled UI. All rights reserved."),
    ).toBeInTheDocument();
    expect(screen.getByText("Terms")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Cookies")).toBeInTheDocument();
  });

  // If there are clickable elements or links, ensure they're present and correct
  // For example, if "Oportunidades" is supposed to link somewhere:
  it("has valid links for sections", () => {
    render(<Footer />);
    // This is a placeholder: adjust based on how your links are implemented
    // e.g., expect(screen.getByRole('link', { name: 'Oportunidades' })).toHaveAttribute('href', '/oportunidades');
  });

  // Additional tests can include accessibility checks, such as ensuring that all text is readable and that navigation through the footer is keyboard-friendly.
});
