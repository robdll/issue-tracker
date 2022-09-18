import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import Seo from '@components/Seo'
import Sidebar from '@components/Sidebar'
import IssueModelTable from '@components/IssueModelTable'
import {
  MAINPAGE_SEO_TITLE,
  MAINPAGE_SEO_DESCRIPTION,
  FCC_LINK,
  API_DOMAIN,
} from '@constants/app.constants'
import IssueGet from '@components/IssueGet'

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
            <Link className={styles.link} href={FCC_LINK}>
              FreeCodeCamp Quality Assurance certification
            </Link>
            .
          </p>
          <h2 className={styles.title} id="#introduction">
            Introduction
          </h2>
          <p className={styles.description}>
            The API is a simple issue tracker. <br />
            All requests needs to be directed to the Domain:
            <br />
            <code className={styles.code}>
              {API_DOMAIN}
              <b>{'<ENDPOINT>'}</b>
            </code>
          </p>
          <p className={styles.description}>
            Replace <b>{'<ENDPOINT>'}</b> with one of the available endpoints
            which allow to <b>create</b>, <b>read</b>, <b>update</b> and{' '}
            <b>delete</b> issues. Issue model is explained below:
          </p>
          <IssueModelTable />

          <p className={styles.description}>
            Currently all the issue are linked to one of the 3 existing
            projects: <b>development</b>, <b>test</b>, <b>production</b>. At
            this time it is not possible to create a project nor to assign an
            issue to a specific project.
          </p>

          <IssueGet />
        </main>
      </div>
    </>
  )
}
