import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import Seo from '@components/Seo'
import Sidebar from '@components/Sidebar'
import IssueModelTable from '@components/IssueModelTable'
import {
  MAINPAGE_SEO_TITLE,
  MAINPAGE_SEO_DESCRIPTION,
} from '@constants/app.constants'

export default function Home() {
  return (
    <>
      <Seo title={MAINPAGE_SEO_TITLE} description={MAINPAGE_SEO_DESCRIPTION} />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>
          <h1 className={styles.mainTitle}>Issue Tracker API</h1>

          <p className={styles.description}>
            This API was created as part of the{' '}
            <Link
              className={styles.link}
              href="https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker"
            >
              FreeCodeCamp Quality Assurance certification
            </Link>
            .
          </p>

          <h2 className={styles.title} id="#introduction">
            Introduction
          </h2>

          <p className={styles.description}>
            This API allow you to <b>create</b>, <b>read</b>, <b>update</b> and{' '}
            <b>delete</b> issues. Issue model is explained below:
          </p>

          <IssueModelTable />
        </main>
      </div>
    </>
  )
}
