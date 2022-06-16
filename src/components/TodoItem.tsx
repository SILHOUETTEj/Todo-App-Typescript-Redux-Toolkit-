import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox } from "@mui/material";
import { TodoItem } from "../store/todolist/todoSlice";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  data: TodoItem;
};
const TodoItemComponent = ({ data }: TodoItemProps) => {
  return (
    <li className={styles.TodoItem}>
      <div className={styles.TodoItem__container}>
        <div className={styles.TodoItem__text}>{data.text}</div>
        <Checkbox className={styles.TodoItem__checkbox} />
        <Button
          className={styles.TodoItem__deleteTodoBtn}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItemComponent;
