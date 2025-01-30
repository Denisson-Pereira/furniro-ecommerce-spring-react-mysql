import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { I18nextProvider } from "react-i18next";

import { Beautiful } from ".";
import i18n from "../../../../../translate";

describe("Beautiful Component", () => {
  it("Should show a text", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Beautiful />
      </I18nextProvider>
    );

    const textBox = screen.getByText(/50\+ Beautiful Room Inspirations/);
    expect(textBox).toBeInTheDocument();
    
  });
});
