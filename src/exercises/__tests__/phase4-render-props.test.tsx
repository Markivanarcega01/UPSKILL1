import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HoverTracker } from "../phase4-render-props";
import { describe, expect, it } from "vitest";

describe("HoverTracker", () => {
  it("renders not hovered state initially", async () => {
    // your test here
    render(
      <HoverTracker>
        {(isHovered) => <div>{isHovered ? "Hovered" : "Not Hovered"}</div>}
      </HoverTracker>,
    );
    expect(screen.getByText("Not Hovered")).toBeInTheDocument();
  });

  it("renders hovered state on mouse enter", async () => {
    // your test here
    const { container } = render(
      <HoverTracker>
        {(isHovered) => <div>{isHovered ? "Hovered" : "Not Hovered"}</div>}
      </HoverTracker>,
    );
    const wrapper = container.firstChild;

    await userEvent.hover(wrapper);
    expect(screen.getByText("Hovered")).toBeInTheDocument();
  });

  it("renders not hovered state on mouse leave", async () => {
    // your test here
    const { container } = render(
      <HoverTracker>
        {(isHovered) => <div>{isHovered ? "Hovered" : "Not Hovered"}</div>}
      </HoverTracker>,
    );
    const wrapper = container.firstChild;
    await userEvent.hover(wrapper);
    await userEvent.unhover(wrapper);
    expect(screen.getByText("Not Hovered")).toBeInTheDocument();
  });
});
