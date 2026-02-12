import React from 'react'
import { Resume } from './components/Resume'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/resume" element={<Resume/>} />
    </Routes>
  )
}

export default AppRoutes