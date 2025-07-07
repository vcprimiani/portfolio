import React, { useEffect, useState } from 'react'
import { getBootcampContacts, getLandingPages, setActiveLandingPage } from '../lib/database'
import { useAuth } from '../contexts/AuthContext'

const ADMIN_EMAIL = 'vincent.primiani@gmail.com' // Change to your admin email

const AdminDashboard: React.FC = () => {
  const { user } = useAuth()
  const [contacts, setContacts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [landingPages, setLandingPages] = useState<any[]>([])
  const [landingLoading, setLandingLoading] = useState(false)
  const [landingError, setLandingError] = useState('')

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchContacts()
      fetchLandingPages()
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line
  }, [user])

  const fetchContacts = async () => {
    setLoading(true)
    setError('')
    const { data, error } = await getBootcampContacts()
    if (error) setError('Failed to fetch contacts')
    else setContacts(data || [])
    setLoading(false)
  }

  const fetchLandingPages = async () => {
    setLandingLoading(true)
    setLandingError('')
    const { data, error } = await getLandingPages()
    if (error) setLandingError('Failed to fetch landing pages')
    else setLandingPages(data || [])
    setLandingLoading(false)
  }

  const handleSetActiveLanding = async (slug: string) => {
    await setActiveLandingPage(slug)
    fetchLandingPages()
  }

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Admin Access Only</h2>
          <p className="text-gray-600">You must be signed in as an admin to view this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Bootcamp Contact Submissions</h1>
        {/* Landing Page Management */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-2">Landing Page Management</h2>
          {landingLoading ? (
            <div>Loading landing pages...</div>
          ) : landingError ? (
            <div className="text-red-600">{landingError}</div>
          ) : (
            <table className="min-w-full border mb-4">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="py-2 px-4 border">Label</th>
                  <th className="py-2 px-4 border">Slug</th>
                  <th className="py-2 px-4 border">Active</th>
                  <th className="py-2 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {landingPages.map((lp) => (
                  <tr key={lp.slug} className="border-t">
                    <td className="py-2 px-4 border">{lp.label}</td>
                    <td className="py-2 px-4 border">{lp.slug}</td>
                    <td className="py-2 px-4 border text-center">{lp.is_active ? '✅' : ''}</td>
                    <td className="py-2 px-4 border text-center">
                      {!lp.is_active && (
                        <button
                          onClick={() => handleSetActiveLanding(lp.slug)}
                          className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
                        >
                          Set Active
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : contacts.length === 0 ? (
          <div className="text-gray-600">No submissions yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Phone</th>
                  <th className="py-2 px-4 border">Message</th>
                  <th className="py-2 px-4 border">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="py-2 px-4 border">{c.name}</td>
                    <td className="py-2 px-4 border">{c.email}</td>
                    <td className="py-2 px-4 border">{c.phone}</td>
                    <td className="py-2 px-4 border whitespace-pre-line">{c.message}</td>
                    <td className="py-2 px-4 border">{new Date(c.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard 