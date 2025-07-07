import React from 'react'

const faqs = [
  {
    q: 'What is the CISSP Study Group?',
    a: 'It’s a free online community for cybersecurity professionals and CISSP candidates to share resources, practice questions, and support each other.'
  },
  {
    q: 'How do I join?',
    a: 'Click the “Join Group” button and sign up on Skool. It’s free and open to all.'
  },
  {
    q: 'What is the AI Practice Question App?',
    a: 'It’s a web, iOS, and Android app that generates difficult, targeted CISSP practice questions and instant explanations for any domain.'
  },
  {
    q: 'Who runs the group?',
    a: 'The group is led by Vincent Primiani and a team of experienced cybersecurity professionals.'
  },
]

const testimonials = [
  {
    name: 'Fouad Ahmed',
    text: 'The community and AI app helped me pass my CISSP on the first try! The practice questions are spot on.'
  },
  {
    name: 'Owen Chin',
    text: 'I love the live study sessions and the support from other members. Highly recommended!'
  },
  {
    name: 'Therany Dunnigan',
    text: 'The best CISSP study group online. The leaderboard and community keep me motivated.'
  },
]

const SkoolLanding: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-700 to-indigo-600 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join the #1 CISSP Study Group Online</h1>
        <p className="text-xl md:text-2xl mb-8">Connect with 1,400+ cybersecurity professionals. Practice, learn, and pass your CISSP with our free community and AI-powered tools.</p>
        <a href="https://www.skool.com/cybersecurity-study-group" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg shadow-lg text-lg hover:bg-blue-100 transition">Join Group</a>
        <p className="mt-4 text-blue-100">Free to join. All experience levels welcome!</p>
      </div>
    </section>

    {/* Community Highlights */}
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What You’ll Get</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-blue-700">AI Practice Question App</h3>
          <p>Generate difficult, targeted CISSP questions for any domain. Get instant explanations and focus on your weak areas.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-blue-700">Live Study Sessions</h3>
          <p>Join weekly community study sessions, ask questions, and get support from peers and experts.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-blue-700">Leaderboard & Motivation</h3>
          <p>Climb the leaderboard, earn badges, and stay motivated with community challenges and updates.</p>
        </div>
      </div>
    </section>

    {/* AI App Section */}
    <section className="py-12 px-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&q=80" alt="AI App" className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-600" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🚀 AI-Powered Practice App</h2>
        <p className="text-gray-700 mb-2">Generate high-quality, difficult CISSP practice questions for any domain. Get instant explanations and focus on your weak areas. Available on web, iOS, and Android.</p>
        <a href="https://www.skool.com/cybersecurity-study-group" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition">Try the App</a>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What Members Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
            <p className="text-gray-700 mb-4">“{t.text}”</p>
            <div className="font-bold text-blue-700">{t.name}</div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default SkoolLanding 