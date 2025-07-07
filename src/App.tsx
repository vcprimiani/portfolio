import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import CisspLanding from './components/CisspLanding'
import SkoolLanding from './components/SkoolLanding'
import AdminDashboard from './components/AdminDashboard'
import { useEffect, useState } from 'react'
import { getActiveLandingPage } from './lib/database'

function DynamicLanding() {
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    const fetchLanding = async () => {
      const { data } = await getActiveLandingPage()
      setSlug(data?.slug || 'cissp-bootcamp')
      setLoading(false)
    }
    fetchLanding()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }
  if (slug === 'skool-study-group') return <SkoolLanding />
  return <CisspLanding />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/*" element={<DynamicLanding />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App 