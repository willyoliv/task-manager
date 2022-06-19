import { Item } from "./styles";
interface TaskItemProps {
  titulo: string;
  done?: boolean;
  concluirTarefa: () => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <Item done={props.done}>
      <span>❌</span>
      <p>{ props.titulo }</p>
      <span onClick={ props.concluirTarefa }>✔️</span>
    </Item>
  );
}