import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { deleteTodo, TodoItem, toggleTodo } from "../store/todolist/todoSlice";

import styles from "./TodoItem.module.css";

type TodoItemProps = {
  data: TodoItem;
};

const TodoItemComponent = ({ data }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const deleteTodoHandler = () => {
    dispatch(deleteTodo(data.id));
  };

  const checkBoxHandler = () => {
    dispatch(toggleTodo(data.id));
  };
  return (
    <li className={data.status ? styles.TodoItem_done : styles.TodoItem}>
      <div className={styles.TodoItem__container}>
        <div
          className={
            data.status ? styles.TodoItem__text_done : styles.TodoItem__text
          }
        >
          {data.text}
        </div>
        <Checkbox
          className={styles.TodoItem__checkbox}
          onClick={checkBoxHandler}
        />
        <Button
          className={styles.TodoItem__deleteTodoBtn}
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={deleteTodoHandler}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItemComponent;
