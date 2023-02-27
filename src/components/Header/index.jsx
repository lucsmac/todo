import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoImage} alt="todo logotype" />
    </header>
  )
}
