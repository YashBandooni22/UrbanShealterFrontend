import React, { useState } from 'react'
import Mapheader from '../components/MapView/Mapheader'
import Properties from '../components/MapView/Properties'
import PropertyMap from '../components/MapView/PropertyMap'

const MapView = () => {
  const [activeMenu, setActiveMenu] = useState('menu1') // default: split view

  return (
    <>
      <Mapheader
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* CONTENT AREA */}
      <div className="flex w-full min-h-[calc(100vh-120px)]">
        {activeMenu === 'menu1' && (
          <>
            {/* MAP – LEFT */}
            <div className="w-1/2 border-r">
              <PropertyMap />
            </div>

            {/* PROPERTIES – RIGHT */}
            <div className="w-1/2 overflow-y-auto">
              <Properties />
            </div>
          </>
        )}

        {activeMenu === 'menu2' && (
          <div className="w-full overflow-y-auto">
            <Properties />
          </div>
        )}
      </div>
    </>
  )
}

export default MapView
