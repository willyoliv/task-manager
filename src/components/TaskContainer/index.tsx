interface TaskContainerProps {
  children: JSX.Element | JSX.Element[]
}

export default function TaskContainer(props: TaskContainerProps) {
  return (
   <ul className="task-list"> {props.children} </ul> 
  );
}