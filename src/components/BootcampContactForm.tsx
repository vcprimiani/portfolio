import React, { useState } from 'react'
import { supabase } from '../lib/supabase'

const BootcampContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    const { name, email, phone, message } = form
    const { error } = await supabase.from('bootcamp_contacts').insert([{ name, email, phone, message }])
    if (error) {
      setError('Submission failed. Please try again.')
    } else {
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Bootcamp Enrollment / Inquiry</h2>
      {success && <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">Thank you! We’ll be in touch soon.</div>}
      {error && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone <span className="text-gray-400">(optional)</span></label>
        <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-500" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Message / Interest</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-500" />
      </div>
      <button type="submit" disabled={loading} className="w-full bg-indigo-700 text-white font-bold py-3 rounded hover:bg-indigo-800 transition disabled:opacity-50">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default BootcampContactForm 