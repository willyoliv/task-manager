interface TaskItemProps {
  titulo: string;
  done?: boolean;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <li className={`task-item ${props.done ? "done" : ""}`}>
      <span>❌</span>
      <p>{ props.titulo }</p>
      <span>✔️</span>
    </li>
  );
}