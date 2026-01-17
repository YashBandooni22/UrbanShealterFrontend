import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      {/* Montserrat Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        `}
      </style>

      <footer
        className="w-full flex flex-col border-t border-gray-200"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <div className="w-full px-10 py-20 grid grid-cols-4 text-gray-600">

            {/* BRAND */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <img src="/public/icon.png" alt="" className="w-7 h-7 opacity-80" />
                <p className="text-lg tracking-wide text-gray-600">
                  URBAN<span className="font-medium text-black">SHELTER</span>
                </p>
              </div>

              <p className="text-sm leading-relaxed max-w-sm text-gray-400">
                Discover exceptional properties through immersive video experiences.
              </p>

              {/* APP STORE / GOOGLE PLAY */}
              <div className="space-y-4">
                {/* APP STORE */}
                <div className="flex items-center gap-4 border border-gray-300 w-84 h-14 px-5 hover:border-black transition-colors">
                  <img src="/public/Vector.png" alt="" className="w-4 h-5" />
                  <div className="leading-tight">
                    <p className="text-sm uppercase tracking-widest text-gray-500">Download on the</p>
                    <p className="text-sm font-medium text-gray-900">App Store</p>
                  </div>
                </div>

                {/* GOOGLE PLAY */}
                <div className="flex items-center gap-4 border border-gray-300 w-84 h-14 px-5 hover:border-black transition-colors">
                  <img src="/public/Vector (1).png" alt="" className="w-4 h-5" />
                  <div className="leading-tight">
                    <p className="text-sm uppercase tracking-widest text-gray-500">Get it on</p>
                    <p className="text-sm font-medium text-gray-900">Google Play</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLORE */}
            <div className="space-y-5 pl-15">
              <p className="text-sm uppercase tracking-widest text-gray-900">Explore</p>
              <div className="flex flex-col gap-4 text-sm">
                <Link to="/buy" className="hover:text-black transition-colors">Buy</Link>
                <Link to="/rent" className="hover:text-black transition-colors">Rent</Link>
                <Link to="/map-view" className="hover:text-black transition-colors">Map View</Link>
              </div>
            </div>

            {/* SERVICES */}
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-widest text-gray-400">Services</p>
              <div className="flex flex-col gap-4 text-sm">
                <Link to="/list-property" className="hover:text-black transition-colors">List Property</Link>
                <Link to="/co-worker-program" className="hover:text-black transition-colors">Co-Worker Program</Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-widest text-gray-400">Company</p>
              <div className="flex flex-col gap-4 text-sm">
                <Link to="/about" className="hover:text-black transition-colors">About</Link>
                <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 px-5 py-6 flex justify-between items-center text-sm text-gray-500">
          <p>© 2024 Urban Shelter. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#"><img src="/public/Icon (1).png" alt=""  className='h-5 w-5'/></Link>
            <Link to="#"><img src="/public/Vector (2).png" alt=""  className='h-5 w-5'/></Link>
            <Link to="#"><img src="/public/Vector (3).png" alt="" className='h-5 w-5'/></Link>
            <Link to="#"><img src="/public/Vector (4).png" alt="" className='h-5 w-5'/></Link>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
