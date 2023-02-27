import { Header } from './components/header';
import { TaskRegister } from './components/task-register';
import { TasksList } from './components/tasks-list';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />

      <main className={styles.tasks}>
        <TaskRegister />
        <TasksList />
      </main>
    </>
  )
}

export default App
