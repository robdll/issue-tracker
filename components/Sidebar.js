import styles from '@styles/Aside.module.scss'

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.section}>Introduction</div>
      <div className={styles.section}>ISSUE ROUTES</div>
      <ul>
        <li className={styles.route}>GET Issues</li>
        <li className={styles.route}>PUT Issues</li>
        <li className={styles.route}>POST Issues</li>
        <li className={styles.route}>DELETE Issues</li>
      </ul>
    </aside>
  )
}
