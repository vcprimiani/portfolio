import React from 'react'

const navItems = [
  'Community',
  'Classroom',
  'Calendar',
  'Members',
  'Map',
  'Leaderboards',
  'About',
]

const groupInfo = {
  name: 'CISSP Study Group',
  url: 'https://www.skool.com/cybersecurity-study-group',
  description:
    'Share resources, get advice, and connect with peers studying cybersecurity. Join our CISSP study group and connect with fellow professionals today!',
  members: 1400,
  online: 4,
  admins: 1,
  logo: 'https://www.skool.com/api/v1/groups/1/images/logo?size=256', // Placeholder, replace with actual if available
}

const pinnedPost = {
  author: 'Vincent Primiani',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  date: '4d',
  title: '🚀AI-Powered CISSP Practice Question App! (Web, iOS & Android)',
  content:
    "Hey everyone! I'm thrilled to announce that we now have our AI-powered CISSP practice question app ready for you to use! 📱 Watch the demo video below to see exactly where to find the app and how to get started with your practice sessions.",
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual demo video if available
  reactions: 5,
  comments: 7,
  faces: [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/33.jpg',
    'https://randomuser.me/api/portraits/men/34.jpg',
    'https://randomuser.me/api/portraits/men/35.jpg',
    'https://randomuser.me/api/portraits/men/36.jpg',
  ],
}

const SkoolLanding: React.FC = () => (
  <div className="bg-gray-50 min-h-screen font-sans">
    {/* Header */}
    <header className="bg-white border-b border-gray-200 flex items-center px-6 py-3">
      <img src={groupInfo.logo} alt="CISSP Logo" className="w-10 h-10 rounded mr-3" />
      <span className="text-2xl font-bold text-gray-900">{groupInfo.name}</span>
    </header>

    {/* Nav */}
    <nav className="bg-white border-b border-gray-200 px-6">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item} className="py-3 text-gray-700 font-medium hover:text-green-700 cursor-pointer border-b-2 border-transparent hover:border-green-500 transition">
            {item}
          </li>
        ))}
      </ul>
    </nav>

    {/* Main Layout */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mt-8 px-4">
      {/* Main Feed */}
      <main className="flex-1 max-w-2xl mx-auto">
        {/* Write something */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center mb-6">
          <img src={pinnedPost.avatar} alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
          <input
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write something"
            disabled
          />
        </div>
        {/* Pinned Post */}
        <div className="bg-white rounded-xl shadow p-6 mb-6 border-l-4 border-green-500 relative">
          <div className="flex items-center mb-2">
            <img src={pinnedPost.avatar} alt="Vincent Primiani" className="w-8 h-8 rounded-full mr-2" />
            <span className="font-bold text-gray-900 mr-2">{pinnedPost.author}</span>
            <span className="text-xs text-gray-500">{pinnedPost.date} • <span className="text-yellow-500">📣 Community Updates</span></span>
            <span className="ml-auto text-xs text-gray-400">Pinned</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{pinnedPost.title}</h3>
          <p className="text-gray-700 mb-4">{pinnedPost.content}</p>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={pinnedPost.video}
              title="Demo Video"
              className="w-full h-48 rounded-lg border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-4">👍 {pinnedPost.reactions}</span>
            <span className="mr-4">💬 {pinnedPost.comments}</span>
            <div className="flex -space-x-2">
              {pinnedPost.faces.map((face, i) => (
                <img key={i} src={face} alt="face" className="w-6 h-6 rounded-full border-2 border-white" />
              ))}
            </div>
          </div>
        </div>
        {/* Community Study Session Banner */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-4 mb-6 flex items-center">
          <span className="font-bold text-green-700 mr-2">📅 Community Study Session</span>
          <span className="text-gray-700">is happening in 13 hours</span>
        </div>
        {/* Membership Requests */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 flex items-center">
          <span className="bg-red-500 text-white rounded-full px-3 py-1 text-xs font-bold mr-3">41</span>
          <span className="text-gray-700">membership requests pending</span>
        </div>
      </main>
      {/* Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <img src={groupInfo.logo} alt="CISSP logo" className="w-20 h-20 rounded mx-auto mb-4" />
          <h2 className="text-xl font-bold text-center mb-2">{groupInfo.name}</h2>
          <a href={groupInfo.url} target="_blank" rel="noopener noreferrer" className="block text-green-700 text-center font-semibold mb-2 hover:underline">{groupInfo.url.replace('https://', '')}</a>
          <p className="text-gray-700 text-center mb-4">{groupInfo.description}</p>
          <a
            href={groupInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg text-center block hover:bg-green-700 transition"
          >
            Join Group
          </a>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-6 text-center">
          <div className="flex justify-center gap-6 mb-2">
            <div>
              <div className="text-2xl font-bold text-gray-900">{groupInfo.members.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{groupInfo.online}</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{groupInfo.admins}</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
          <div className="flex justify-center -space-x-2 mt-2">
            {pinnedPost.faces.map((face, i) => (
              <img key={i} src={face} alt="face" className="w-8 h-8 rounded-full border-2 border-white" />
            ))}
          </div>
        </div>
      </aside>
    </div>
  </div>
)

export default SkoolLanding 