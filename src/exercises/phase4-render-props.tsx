import React, { useState } from "react";

interface HoverTrackerProps {
  children: (isHovered: boolean) => React.ReactNode;
}

export const HoverTracker = ({ children }: HoverTrackerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children(isHovered)}
    </div>
  );
};

const sampleComponent = (isHovered: boolean) => {
  return <div>{isHovered ? "Hovered" : "Not Hovered"}</div>;
};

const App = () => {
  return (
    <>
      <HoverTracker>{sampleComponent}</HoverTracker>
    </>
  );
};

<App />;
