import styles from '@styles/Aside.module.scss'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Link href="#tracker-api">
        <div className={styles.section}>Tracker API</div>
      </Link>
      <ul>
        <Link href="#introduction">
          <li className={styles.route}>Introduction</li>
        </Link>
        <Link href="#issue-model">
          <li className={styles.route}>Issues Model</li>
        </Link>
      </ul>
      <Link href="#endpoint">
        <div className={styles.section}>Endpoints</div>
      </Link>
      <ul>
        <Link href="#get">
          <li className={styles.route}>GET Issues</li>
        </Link>
        <Link href="#put">
          <li className={styles.route}>PUT Issues</li>
        </Link>
        <Link href="#post">
          <li className={styles.route}>POST Issues</li>
        </Link>
        <Link href="#delete">
          <li className={styles.route}>DELETE Issues</li>
        </Link>
      </ul>
    </aside>
  )
}
