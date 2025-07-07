import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import CisspLanding from './components/CisspLanding'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/*" element={<CisspLanding />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App 