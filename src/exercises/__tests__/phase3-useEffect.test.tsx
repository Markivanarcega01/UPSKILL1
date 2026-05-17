import { act, render, screen } from "@testing-library/react";
import { TimeOnPage } from "../phase3-useEffect";
import { describe, it, expect, vi } from "vitest";

it("shows 0 on initial render", () => {
  render(<TimeOnPage />);
  expect(screen.getByText(0)).toBeInTheDocument();
});

it("increments every second", () => {
  vi.useFakeTimers();
  render(<TimeOnPage />);

  act(() => {
    vi.advanceTimersByTime(3000);
  });

  expect(screen.getByText(3)).toBeInTheDocument();

  vi.useRealTimers();
});

it("clears the interval on unmount", () => {
  vi.useFakeTimers();
  const { unmount } = render(<TimeOnPage />);

  unmount();

  act(() => {
    vi.advanceTimersByTime(3000);
  });

  expect(screen.queryByText(3)).not.toBeInTheDocument();

  vi.useRealTimers();
});
