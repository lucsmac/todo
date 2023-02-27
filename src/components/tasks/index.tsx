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
    setTasks([...tasks, task])
  }

  const orderedTasks = tasks.sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <main className={styles.tasks}>
      <TaskRegister
        addTask={addTask}
      />
      <TasksList
        tasks={orderedTasks}
      />
    </main>
  )
}