import React from 'react'
import CoworkerDashboardHero from './CoworkerDashboardHero '
import ThingsToDoSection from './ThingsToDoSection '
import RecentActivity from './RecentActivity'
import DashboardCards from './DashboardCards '

const Dashboard = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
        <CoworkerDashboardHero />
        <ThingsToDoSection/>
        <RecentActivity/>
        <DashboardCards />
    </div>
  )
}

export default Dashboard