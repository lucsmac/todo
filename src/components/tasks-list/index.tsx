import { useState } from 'react';
import styles from './styles.module.css';
import emptyTasksIcon from './../../assets/empty.svg';
import trashIcon from './../../assets/trash.svg';

interface Task {
  id: number;
  label: string;
  done: boolean;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      label: 'Tarefa 1',
      done: false,
    },
    {
      id: 2,
      label: 'Tarefa 2',
      done: true,
    },
    {
      id: 3,
      label: 'Tarefa 3',
      done: false,
    },
    {
      id: 4,
      label: 'Tarefa 4',
      done: false,
    },
  ])

  const completedTasks = tasks.reduce((total, task) => task.done ? total + 1 : total, 0)
  const orderedTasks = tasks.sort((a, b) => Number(a.done) - Number(b.done));

  function handleCompleteTask(id: number) {
    const selectedTask = tasks.find(task => task.id === id)

    console.log(selectedTask);
  }

  return (
    <div className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div className={styles.tasksInfo}>
          <p className={styles.createdTasksTitle}>
            Tarefas criadas
          </p>
          <span className={styles.tasksInfoCounter}>
            {tasks.length}
          </span>
        </div>

        <div className={styles.tasksInfo}>
          <p className={styles.completedTasksTitle}>
            Concluídas
          </p>
          <span className={styles.tasksInfoCounter}>
            {completedTasks} de {tasks.length}
          </span>
        </div>
      </header>

      {tasks.length > 0 ?
        (
          <ul className={styles.tasksList}>
            {orderedTasks.map(task => (
              <li
                key={task.id}
                className={`${styles.task}${task.done ? ' ' + styles.taskDone : ''}`}
                onClick={() => handleCompleteTask(task.id)}
              >
                <span className={styles.taskCheck}>
                  {task.done ? '✔' : ''}
                </span>
                <p className={styles.taskLabel}>{task.label}</p>
                <img className={styles.taskDelete} src={trashIcon} alt="Trash icon" />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyTasks}>
            <img src={emptyTasksIcon} alt="Icon with an paper with a list" />
            <p className={styles.emptyTasksTitle}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.emptyTasksSubtitle}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
      }
    </div>
  )
}