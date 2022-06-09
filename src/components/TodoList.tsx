import React from 'react'
import styles from './TodoList.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'

const TodoList = () => {
  return (
        <div className={styles.TodoList}>
            <div className={styles.TodoList__container}>
            <h1 className={styles.TodoList__title}>TodoList</h1>
            <div className={styles.TodoList__form}>
                <TextField
                    label="Todo"
                    id="fullWidth"
                    size="small"
                    className={styles.TodoList__todoInput}/>
                <Button
                    variant="outlined"
                    className={styles.TodoList__addTodoBtn}>Add Todo</Button>
                <Button
                    variant="outlined"
                    color="error"
                    className={styles.TodoList__clearTodosBtn}
                    >Clear Todos
                    <DeleteIcon color="error" />
                    </Button>
            </div>

            </div>

        </div>
  )
}

export default TodoList
