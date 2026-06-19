import React, { Suspense, useState } from "react";

// TODO 1: you'll need two more things from 'react' for code splitting.
//         (one creates the lazy component, one shows the fallback)

// TODO 2: create the lazy-loaded Dashboard here.
//         Remember: lazy() takes a function that returns a dynamic import().
//
// const Dashboard = ______(() => ______('./phase6-suspense-dashboard'));
const Dashboard = React.lazy(() => import("./phase6-suspense-dashboard"));

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDashboard(true)}>Open Dashboard</button>

      {/*
        TODO 3: when showDashboard is true, render <Dashboard /> —
        but wrap it so React can pause while the chunk downloads.
        What component wraps it? What prop holds the "Loading…" UI?
      */}
      {showDashboard && (
        // <____ fallback={____}>
        //   <Dashboard />
        // </____>
        <Suspense fallback={<>Loading</>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}
