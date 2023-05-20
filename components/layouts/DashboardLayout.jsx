import React from 'react';
import Header from '../shared/header/header';
import d from '../../styles/pages/dashboard/dashboard.module.css';
const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboardLayout'>
      <div className="bgEffect1"></div>
      <div className="bgEffect2"></div>
      <Header />
      <div className={d.dashboardBody}>
        <div className={d.mainArea}>

        </div>
        <div className={d.childrenArea}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout