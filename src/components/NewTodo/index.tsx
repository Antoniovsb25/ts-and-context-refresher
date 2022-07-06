import { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInput = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInput.current!.value;
        if (enteredText.trim().length === 0) return;
        todosCtx.addTodo(enteredText);
    }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label> 
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default NewTodo;
