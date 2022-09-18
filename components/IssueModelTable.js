import styles from '@styles/IssueModelTable.module.scss'

export default function Sidebar() {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.headerRow}>
          <th>Field</th>
          <th>Type</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.row}>
          <td>_id</td>
          <td>String</td>
          <td>5f5a6c9b9b9b9b9b9b9b9b9b</td>
        </tr>
        <tr className={styles.row}>
          <td>issue_title</td>
          <td>String</td>
          <td>Create UI</td>
        </tr>
        <tr className={styles.row}>
          <td>issue_text</td>
          <td>String</td>
          <td>create a responsive ui</td>
        </tr>
        <tr className={styles.row}>
          <td>created_on</td>
          <td>Iso-Date</td>
          <td>2020-09-07T12:00:00.000Z</td>
        </tr>
        <tr className={styles.row}>
          <td>updated_on</td>
          <td>Iso-Date</td>
          <td>2020-09-07T12:30:00.000Z</td>
        </tr>
        <tr className={styles.row}>
          <td>created_by</td>
          <td>String</td>
          <td>John Doe</td>
        </tr>
        <tr className={styles.row}>
          <td>assigned_to</td>
          <td>String</td>
          <td>John Doe</td>
        </tr>
        <tr className={styles.row}>
          <td>status_text</td>
          <td>String</td>
          <td>in progress</td>
        </tr>
        <tr className={styles.row}>
          <td>open</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  )
}
