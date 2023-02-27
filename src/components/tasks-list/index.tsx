import { useState } from 'react';
import styles from './styles.module.css';
import emptyTasksIcon from './../../assets/empty.svg';
import trashIcon from './../../assets/trash.svg';
import { Task } from '../tasks';

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks }: TasksListProps) {
  console.log('tasks: ', tasks)
  const completedTasks = tasks.reduce((total, task) => task.done ? total + 1 : total, 0)

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
            {tasks.map(task => (
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