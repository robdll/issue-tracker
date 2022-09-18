import routeStyles from '@styles/Route.module.scss'
import homeStyles from '@styles/Home.module.scss'

import { API_DOMAIN } from '@constants/app.constants'

export default function IssueGet() {
  const keys = Object.entries({
    _id: '5871dda29faedc3491ff93bb',
    issue_title: 'Fix error in posting data',
    issue_text: 'When we post data it has an error.',
    created_on: '2017-01-08T06:35:14.240Z',
    updated_on: '2017-01-08T06:35:14.240Z',
    created_by: 'Joe',
    assigned_to: 'Joe',
    status_text: 'In QA',
    open: true,
  })

  let keysHtml = keys.map(([key, val]) => {
    val = typeof val === 'string' ? `"${val}"` : val
    return (
      <>
        <span className={routeStyles.marginLeft}>{`"${key}": ${val}`}</span>
        <br />
      </>
    )
  })
  return (
    <>
      <h2 className={homeStyles.title}>
        <span className={routeStyles.green}>GET</span> Issue
      </h2>
      <div className={routeStyles.method}>
        <span className={routeStyles.label}>Method: </span>
        <span className={`${routeStyles.label} ${routeStyles.green}`}>GET</span>
      </div>
      <div className={routeStyles.endpoint}>
        <p className={routeStyles.label}>Full endpoint: </p>
        <code className={homeStyles.code}>
          {API_DOMAIN}issues/<b>{'<PROJECT_NAME>'}</b>
        </code>
      </div>
      <p className={homeStyles.description}>
        Retrieves all the issues from the database related to a certain project{' '}
        (<b>{'<PROJECT_NAME>'}</b>). <br />
        There are 3 projects available: <b>development</b>, <b>test</b>, and{' '}
        <b>production</b>.
      </p>
      <p className={`${homeStyles.description} ${routeStyles.noMT}`}>
        <span className={routeStyles.label}>Filters </span>
        <br />
        It&rsquo;s possible to filter the results based on one or multiple of
        the following fields:
        <i>
          _id, issue_title, issue_text, created_by, assigned_to, status_text,
          open
        </i>
      </p>
      <p className={`${homeStyles.description} ${routeStyles.noMT}`}>
        Example:
        <br />
        <code className={homeStyles.code}>
          .../api/issues/<b>{'<PROJECT_NAME>'}</b>?open=true&assigned_to=Joe
        </code>
      </p>
      <p className={`${homeStyles.description} ${routeStyles.noMT}`}>
        Response:
        <br />
        {'['}
        {'{'}
        <br />
        {keysHtml}
        {'},'}
        <br />
        {'...'}
        <br />
        {']'}
      </p>

      <p className={`${homeStyles.description} ${routeStyles.noMT}`}>
        <b>Test Get Request:</b>
      </p>
      <form className={routeStyles.form}>
        <label htmlFor="projectName">Project Name: </label>
        <select name="project">
          <option value="development">development</option>
          <option value="test">test</option>
          <option value="production">production</option>
        </select>
        <label htmlFor="open">Open: </label>
        <select name="status">
          <option value="1">true</option>
          <option value="0">false</option>
        </select>
        <label htmlFor="_id">id: </label>
        <input type="text" name="_id" placeholder="_id" />
        <label htmlFor="assigned_to">Assigned To: </label>
        <input type="text" name="assigned_to" placeholder="assigned to" />
        <label htmlFor="created_by">Created by: </label>
        <input type="text" name="created_by" placeholder="created by" />
        <label htmlFor="issue_title">Issue Title: </label>
        <input type="text" name="issue_title" placeholder="issue title" />
        <label htmlFor="issue_text">Issue Text: </label>
        <input type="text" name="issue_text" placeholder="issue text" />
        <label htmlFor="status_text">Status Text: </label>
        <input type="text" name="status_text" placeholder="status text" />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
