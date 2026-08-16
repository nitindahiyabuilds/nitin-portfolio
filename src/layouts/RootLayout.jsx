import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CustomCursor from '../components/common/CustomCursor'

import Navbar from '../components/common/Navbar'

export default function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)] pt-[15px]">
      <CustomCursor />
      <Navbar />
      <Outlet key={pathname} />
    </div>
  )
}
