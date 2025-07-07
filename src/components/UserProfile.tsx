import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { getUserProfile, updateUserProfile, UserProfile as UserProfileType } from '../lib/database'
import { uploadFile, getPublicUrl } from '../lib/storage'
import { User, Edit, Save, X, Upload } from 'lucide-react'

const UserProfile: React.FC = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfileType | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [formData, setFormData] = useState({
    full_name: '',
    bio: '',
    website: '',
    github: '',
    linkedin: ''
  })

  useEffect(() => {
    if (user) {
      loadProfile()
    }
  }, [user])

  const loadProfile = async () => {
    if (!user) return

    try {
      const { data, error } = await getUserProfile(user.id)
      if (error) {
        console.error('Error loading profile:', error)
      } else if (data) {
        setProfile(data)
        setFormData({
          full_name: data.full_name || '',
          bio: data.bio || '',
          website: data.website || '',
          github: data.github || '',
          linkedin: data.linkedin || ''
        })
      }
    } catch (err) {
      console.error('Error loading profile:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = async () => {
    if (!user) return

    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const { error } = await updateUserProfile(user.id, formData)
      
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Profile updated successfully!')
        setEditing(false)
        await loadProfile() // Reload profile data
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !user) return

    try {
      const fileName = `avatars/${user.id}/${Date.now()}-${file.name}`
      const { error } = await uploadFile(file, 'avatars', fileName)
      
      if (error) {
        setError('Failed to upload avatar')
      } else {
        const avatarUrl = getPublicUrl('avatars', fileName)
        await updateUserProfile(user.id, { avatar_url: avatarUrl })
        await loadProfile()
        setSuccess('Avatar updated successfully!')
      }
    } catch (err) {
      setError('Failed to upload avatar')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <User size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Please sign in</h2>
          <p className="text-gray-600">You need to be signed in to view your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full object-cover border-4 border-white"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-4 border-white">
                      <User size={32} className="text-white" />
                    </div>
                  )}
                  {editing && (
                    <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer hover:bg-gray-100">
                      <Upload size={16} className="text-gray-600" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {profile?.full_name || 'Your Profile'}
                  </h1>
                  <p className="text-indigo-100">{user.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => setEditing(!editing)}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                {editing ? <X size={20} /> : <Edit size={20} />}
                <span>{editing ? 'Cancel' : 'Edit'}</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                {success}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{profile?.full_name || 'Not set'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  {editing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    />
                  ) : (
                    <p className="text-gray-900">{profile?.bio || 'No bio added yet'}</p>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Social Links</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  {editing ? (
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {profile?.website ? (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                          {profile.website}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub
                  </label>
                  {editing ? (
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="https://github.com/username"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {profile?.github ? (
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                          {profile.github}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  {editing ? (
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/username"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {profile?.linkedin ? (
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                          {profile.linkedin}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {editing && (
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center space-x-2"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile 