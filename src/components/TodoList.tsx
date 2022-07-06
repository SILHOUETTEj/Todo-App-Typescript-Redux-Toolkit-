import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTodo, asyncAddTodo, clearTodos } from "../store/todolist/todoSlice";
import TodoItemComponent from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [inputState, setInputState] = useState<string>("");
  const state = useAppSelector((state) => state.todos.value);
  const isFetching = useAppSelector((state) => state.todos.isFetching);
  const dispatch = useAppDispatch();
  const addTodoHandler = () => {
    if (inputState) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          text: inputState,
          status: false,
        })
      );
      setInputState("");
    }
  };
  const clearTodosHandler = () => {
    dispatch(clearTodos());
    setInputState("");
  };

  const asyncAddTodoHandler = () => {
    if (inputState) {
      dispatch(
        asyncAddTodo({
          id: new Date().getTime(),
          text: inputState,
          status: false,
        })
      );
      setInputState("");
    }
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
            color={inputState ? "primary" : "error"}
          />
          <Button
            variant="outlined"
            onClick={addTodoHandler}
            className={styles.TodoList__addTodoBtn}
            size="small"
          >
            Add Todo
          </Button>
          {isFetching ? (
            <CircularProgress color="info" size="25px" />
          ) : (
            <Button
              variant="outlined"
              onClick={asyncAddTodoHandler}
              className={styles.TodoList__asyncAddTodoBtn}
              size="small"
            >
              Add Todo(Async)
            </Button>
          )}

          <Button
            variant="outlined"
            color="error"
            className={styles.TodoList__clearTodosBtn}
            onClick={clearTodosHandler}
            size="small"
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
