import React from 'react'

import UserSubmission from '../userSubmissionTable/userSubmissionTable.component'
import { Table } from 'semantic-ui-react'
const TableContainer = ({colOneLabel,colTwoLabel,colThreeLabel}) => (
        <Table className="tags-table">
        <div className="tr">
          <div className="name head">{colOneLabel}</div>

          <div className="city head">{colTwoLabel}</div>

          <div className="tags head">{colThreeLabel}</div>
        </div>

        <div className="tbody">
          <div><UserSubmission/></div>
        </div>
      </Table>
    )

export default TableContainer
