import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://www.github.com/claudiojsantos.png" />

        <strong>Cláudio Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"><
          PencilLine size={20} /> Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}