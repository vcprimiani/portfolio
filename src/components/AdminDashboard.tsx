import React, { useEffect, useState } from 'react'
import { getBootcampContacts } from '../lib/database'
import { useAuth } from '../contexts/AuthContext'

const ADMIN_EMAIL = 'vincent.primiani@gmail.com' // Change to your admin email

const AdminDashboard: React.FC = () => {
  const { user } = useAuth()
  const [contacts, setContacts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      fetchContacts()
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