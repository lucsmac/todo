import { useState } from 'react';
import styles from './styles.module.css';
import emptyTasksIcon from './../../assets/empty.svg';

export function TasksList() {
  const [tasks, setTasks] = useState([
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3'
  ])

  return (
    <div className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div className={styles.tasksInfo}>
          <p className={styles.createdTasksTitle}>
            Tarefas criadas
          </p>
          <span className={styles.tasksInfoCounter}>
            0
          </span>
        </div>

        <div className={styles.tasksInfo}>
          <p className={styles.completedTasksTitle}>
            Tarefas concluídas
          </p>
          <span className={styles.tasksInfoCounter}>
            0
          </span>
        </div>
      </header>

      {tasks.length > 0 ?
        (
          <div className={styles.emptyTasks}>
            <img src={emptyTasksIcon} alt="Icon with an paper with a list" />
            <p className={styles.emptyTasksTitle}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.emptyTasksSubtitle}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) :
        <ul>
          {tasks.map(task => <p>{task}</p>)}
        </ul>
      }
    </div>
  )
}