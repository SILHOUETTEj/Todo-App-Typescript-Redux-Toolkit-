import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTodo, clearTodos } from "../store/todolist/todoSlice";
import TodoItemComponent from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [inputState, setInputState] = useState<string>("");
  const state = useAppSelector((state) => state.todos.value);
  const dispatch = useAppDispatch();
  const addTodoHandler = () => {
    dispatch(addTodo(inputState));
    setInputState("");
  };

  const clearTodosHandler = () => {
    dispatch(clearTodos());
    setInputState("");
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.TodoList__container}>
        <h1 className={styles.TodoList__title}>TodoList</h1>
        <div className={styles.TodoList__form}>
          <TextField
            label="Todo"
            id="fullWidth"
            size="small"
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            className={styles.TodoList__todoInput}
          />
          <Button
            variant="outlined"
            onClick={addTodoHandler}
            className={styles.TodoList__addTodoBtn}
          >
            Add Todo
          </Button>
          <Button
            variant="outlined"
            color="error"
            className={styles.TodoList__clearTodosBtn}
            onClick={clearTodosHandler}
          >
            Clear Todos
            <DeleteIcon color="error" />
          </Button>
        </div>
        <ul className={styles.TodoList__list}>
          {state.map((item) => {
            return <TodoItemComponent data={item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
