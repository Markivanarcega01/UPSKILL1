import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  // 1. initialize state so hasError starts false
  state: State = { hasError: false };

  // 2. this runs when a child throws during render.
  //    return the new state that flips hasError.
  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  // 3. side-effect slot — log the error
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  // 4. render: if we caught an error, show the fallback.
  //    otherwise, render children normally.
  render() {
    if (this.state.hasError === true) {
      return <div>{this.props.fallback}</div>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

// --- Throwaway child to test the boundary, once you've filled it in ---
export function Bomb(): ReactNode {
  throw new Error("💥 render exploded");
}
