import React, { createContext, useContext, useState } from "react";

type TabsContextValue = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function Tab({ label, index }: { label: string; index: number }) {
  const { activeIndex, setActiveIndex } = useTabs();
  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={
        activeIndex === index ? { background: "gray" } : { background: "white" }
      }
    >
      {label}
    </button>
  );
}

export function TabPanel({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const { activeIndex } = useTabs();
  // your JSX here
  return <>{index === activeIndex ? children : null}</>;
}

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used inside <Tabs>");
  return ctx;
}
