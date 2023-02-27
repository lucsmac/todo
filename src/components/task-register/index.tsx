import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../tasks';
import styles from './styles.module.css';

interface TaskRegisterProps {
  addTask: (task: Task) => void;
}

export function TaskRegister({ addTask }: TaskRegisterProps) {
  const [taskLabel, setTaskLabel] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskLabel(event.target.value);
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: Task = {
      id: Math.random(),
      label: taskLabel,
      done: false
    }

    addTask(task);
    setTaskLabel('');
  }

  return (
    <form className={styles.taskRegister} onSubmit={handleCreateTask}>
      <input
        className={styles.field}
        name="taskname"
        value={taskLabel}
        type="text"
        required
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputChange}
      />
      <button className={styles.submitButton} type="submit">Criar</button>
    </form>
  )
}
