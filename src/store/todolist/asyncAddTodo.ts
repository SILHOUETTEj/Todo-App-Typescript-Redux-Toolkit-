import { TodoItem } from "./todoSlice";
export const fetchTodo = (amount: TodoItem) => {
  return new Promise<TodoItem>(function (resolve) {
    setTimeout(function () {
      resolve(amount);
    }, 2000);
  });
};
