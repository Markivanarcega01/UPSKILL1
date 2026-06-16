import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// --- Types ---

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// --- Fake API (pretend these hit a server) ---

async function getTodos(): Promise<Todo[]> {
  const res = await fetch("/api/todos");
  if (!res.ok) throw new Error(`Server Error: ${res.status}`);
  return res.json();
}

// May reject if the server is unhappy — that's what makes rollback matter.
async function deleteTodo(id: number): Promise<void> {
  const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Server Error: ${res.status}`);
}

// --- The query that powers the list (already done) ---

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

// --- YOUR EXERCISE: optimistic delete ---
//
// Goal: when the user deletes a todo, it disappears from the screen
// INSTANTLY, and only reappears if the server actually rejects.
//
// API surface you need:
//   queryClient.cancelQueries({ queryKey })          -> stop in-flight refetches
//   queryClient.getQueryData<Todo[]>(["todos"])      -> read the cache
//   queryClient.setQueryData(["todos"], newValue)    -> write the cache
//   queryClient.invalidateQueries({ queryKey })      -> refetch the truth
//
// Remember: whatever you RETURN from onMutate becomes `context` below.

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    onMutate: async (id: number) => {
      // 1. cancel in-flight refetches for ["todos"] — why? (clobber risk)

      // 2. snapshot the current cache value (your rollback)

      // 3. optimistically update the cache — remove the todo with this id

      // 4. return the snapshot so onError can use it as `context`
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const snapshot = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData<Todo[]>(["todos"], (old) =>
        old ? old.filter((t) => t.id !== id) : [],
      );
      return snapshot;
    },

    onError: (_err, _id, context) => {
      // roll back: restore the snapshot you stashed in context
      queryClient.setQueryData(["todos"], context);
    },

    onSettled: () => {
      // why is this here? (sync UI with server truth, win or lose)
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
