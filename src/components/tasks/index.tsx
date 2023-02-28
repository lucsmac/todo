import { useState } from 'react';
import { TaskRegister } from '../task-register';
import { TasksList } from '../tasks-list';
import styles from './styles.module.css';

export interface Task {
  id: number;
  label: string;
  done: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: Task) {
    setTasks([task, ...tasks])
  }

  function deleteTask(taskId: number) {
    const tasksWhithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWhithoutDeletedOne)
  }

  function toggleTask(taskId: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) task.done = !task.done
      return task
    });
    setTasks(updatedTasks)
  }

  const orderedTasks = tasks.sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <main className={styles.tasks}>
      <TaskRegister
        handleAddTask={addTask}
      />
      <TasksList
        tasks={orderedTasks}
        handleDeleteTask={deleteTask}
        handleToggleTask={toggleTask}
      />
    </main>
  )
}