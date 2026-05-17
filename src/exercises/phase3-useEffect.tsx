import { useEffect, useState } from "react";

export const TimeOnPage = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{count}</>;
};
