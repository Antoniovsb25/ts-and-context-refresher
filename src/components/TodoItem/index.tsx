import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>{props.text}</li>
  )
}

export default TodoItem;