import React from 'react'
import OverView from './SellerDashboard/OverView'
import TopPerformers from './SellerDashboard/TopPerformers '
import RecentPosts from './SellerDashboard/RecentPosts'
import GeographicSuiteDashboard from './SellerDashboard/GeographicSuiteDashboard'

const SellerDashboard = () => {
  return (
    <>
      <OverView />
      <TopPerformers />
      <RecentPosts />
      <GeographicSuiteDashboard />
    </>
  )
}

export default SellerDashboard