import React from 'react'
import Header from "../components/Header"
import PremiumFurnishedApartments from '../components/Rent/PremiumFurnishedApartments/PremiumFurnishedApartments'
import FamilyHomes from '../components/Rent/FamilyHomes/FamilyHomes'
import BachelorFriendlyStudios from '../components/Rent/BachelorFriendlyStudios/BachelorFriendlyStudios'
import BudgetRentals from '../components/Rent/BudgetRentals/BudgetRentals'
import CorporateHousing from '../components/Rent/CorporateHousing/CorporateHousing'
import LuxuryPenthouses from '../components/Rent/LuxuryPenthouses/LuxuryPenthouses'

const Rent = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Header />
      <PremiumFurnishedApartments />
      <FamilyHomes />
      <BachelorFriendlyStudios/>
      <BudgetRentals/>
      <CorporateHousing/>
      <LuxuryPenthouses/>
    </div>
  )
}

export default Rent