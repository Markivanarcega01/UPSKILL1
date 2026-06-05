import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// --- Types ---

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "viewer";
}

// --- Exercise 1: Typed fetch function ---
// Complete getUser using what you just built in the session.
// - Accept a userId (number)
// - Fetch from `/api/users/${userId}`
// - Check response.ok before parsing
// - Cast .json() to User
// - Throw on error

export async function getUser(userId: number): Promise<User> {
  // TODO
  return await fetch(`/api/users/${userId}`).then((data) => {
    if (data.ok) {
      return data.json();
    } else {
      throw new Error(`Server Error: ${data.status}`);
    }
  });
}

// --- Exercise 2: Generic useFetch hook ---
// Fill in the three sections below.

export function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  // 1. declare state for data, loading, and error

  // 2. useEffect — fetch url, update state on success and error
  //    hint: remember the async-inside-useEffect pattern

  // 3. return the three values
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetching() {
      try {
        await fetch(url).then(async (data) => {
          const result = (await data.json()) as T;
          setData(result);
        });
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown Error");
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [url]);

  return { data, loading, error };
}

export function useUser(userId: number) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    staleTime: 1000 * 60 * 5, //5 minutes
  });
}
