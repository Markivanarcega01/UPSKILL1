import { renderHook, act } from "@testing-library/react";
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  assert,
} from "vitest";
import { useDebounce } from "../phase3-custom-hooks";

describe("useDebounce", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("returns the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("hello", 300));
    expect(result.current).toBe("hello");
  });

  it("does not update the value before the delay has passed", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "hello" } },
    );

    rerender({ value: "world" });
    vi.advanceTimersByTime(299);
    expect(result.current).toBe("hello");
  });

  it("updates the value after the delay has passed", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "hello" } },
    );

    rerender({ value: "world" });
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("world");
  });
  it("only updates to the latest value when changed multiple times rapidly", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      { initialProps: { value: "hello" } },
    );

    rerender({ value: "world" });
    vi.advanceTimersByTime(100);
    rerender({ value: "final" });
    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe("final");
  });
});
