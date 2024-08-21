import React from 'react'
import AnalyticsTable from '../shared/AnalyticsTable'
import '../style/AnalyticsStyle.css'
function Analytics() {
  return (
    <div className='analytics-container'>
      <h1 className='analytics-title'>Quiz Analysis</h1>
      <div className='table-scroll-container'>
        <AnalyticsTable />
      </div>
 </div>
  )
}

export default Analytics
