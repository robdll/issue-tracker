import styles from '@styles/Aside.module.scss'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Link href="#introduction">
        <div className={styles.section}>Introduction</div>
      </Link>
      <Link href="#issues">
        <div className={styles.section}>ISSUE ROUTES</div>
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
