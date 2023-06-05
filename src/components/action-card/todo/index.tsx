import { api } from "@/utils/api";
import { useProtectPage } from "@/hooks/useProtectPage";
import TodoItem from "@/components/action-card/todo/todo-item";
import CreateTodo from "@/components/action-card/todo/create-todo";

export default function Todo() {
  useProtectPage();
  const { data: todos, isLoading, isError } = api.todoRouter.all.useQuery();
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="flex w-80 flex-col justify-center gap-1 rounded-xl bg-white p-4 drop-shadow-sd2">
      <h1 className="mb-2 text-center text-slate-400">Session Goals</h1>
      <div className="mt-3 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {todos?.length ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                done={todo.done}
                id={todo.id}
              />
            ))
          ) : (
            <div className="select-none text-center text-slate-300">
              {isLoading ? "Loading..." : "Empty session goal!"}
            </div>
          )}
        </div>
        <CreateTodo />
      </div>
    </div>
  );
}