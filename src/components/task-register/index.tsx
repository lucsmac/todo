import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './styles.module.css';

export function TaskRegister() {
  const [task, setTask] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    console.log(event.target)
  }

  return (
    <form className={styles.taskRegister} onSubmit={handleCreateTask}>
      <input
        className={styles.field}
        name="taskname"
        value={task}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputChange}
      />
      <button className={styles.submitButton} type="submit">Criar</button>
    </form>
  )
}
