import React from 'react'
import BootcampContactForm from './BootcampContactForm'

const faqs = [
  {
    q: 'Who is this bootcamp for?',
    a: 'Anyone preparing for the CISSP exam, including IT professionals, security analysts, and managers who want to advance their cybersecurity careers.'
  },
  {
    q: 'How long is the bootcamp?',
    a: 'The bootcamp is an intensive 6-week program with live sessions, hands-on labs, and exam prep.'
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes! If you attend all sessions and don’t pass the CISSP exam, you get a full refund.'
  },
  {
    q: 'Are the sessions recorded?',
    a: 'Yes, all live sessions are recorded and available for replay.'
  },
]

const CisspLanding: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">CISSP Bootcamp: Pass the Exam. Advance Your Career.</h1>
        <p className="text-xl md:text-2xl mb-8">Join our proven, expert-led CISSP bootcamp and become a certified cybersecurity leader in just 6 weeks.</p>
        <a href="#enroll" className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-lg shadow-lg text-lg hover:bg-indigo-100 transition">Enroll Now</a>
        <p className="mt-4 text-indigo-100">Next cohort starts soon. Limited seats available!</p>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Why Choose Our CISSP Bootcamp?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-indigo-700">Live Expert Instruction</h3>
          <p>Learn from a CISSP-certified instructor with 15+ years of real-world cybersecurity experience.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-indigo-700">Hands-On Labs & Practice Exams</h3>
          <p>Master every CISSP domain with interactive labs, quizzes, and full-length practice exams.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-indigo-700">Pass Guarantee</h3>
          <p>Attend all sessions and complete assignments—if you don’t pass, get your money back.</p>
        </div>
      </div>
    </section>

    {/* Who is it for? */}
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Join?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
        <li>IT professionals aiming for a top-tier security certification</li>
        <li>Security analysts, engineers, and managers</li>
        <li>Anyone ready to advance their cybersecurity career</li>
      </ul>
    </section>

    {/* Instructor Section */}
    <section className="py-12 px-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-600" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Meet Your Instructor</h2>
        <p className="text-gray-700 mb-2">John Doe, CISSP, CISM, CEH</p>
        <p className="text-gray-600">John has helped over 1,000 students pass the CISSP exam. With 15+ years in cybersecurity, he brings real-world insights and a passion for teaching.</p>
      </div>
    </section>

    {/* What’s Included */}
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What’s Included</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>6 weeks of live, interactive online classes</li>
          <li>Full CISSP exam domain coverage</li>
          <li>Downloadable study guides & resources</li>
          <li>Hands-on labs and real-world scenarios</li>
          <li>Weekly quizzes and practice exams</li>
          <li>Private student community & support</li>
        </ul>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Session recordings for flexible review</li>
          <li>1:1 instructor Q&A sessions</li>
          <li>Exam application & endorsement guidance</li>
          <li>Certificate of completion</li>
          <li>Pass guarantee or your money back</li>
        </ul>
      </div>
    </section>

    {/* Pricing & CTA */}
    <section id="enroll" className="py-16 px-4 bg-indigo-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Become CISSP Certified?</h2>
      <p className="text-xl mb-8">Secure your spot for just <span className="font-extrabold text-yellow-300">$1,499</span> <span className="text-indigo-200">(payment plans available)</span></p>
      <a href="#" className="inline-block bg-yellow-300 text-indigo-900 font-bold px-10 py-4 rounded-lg shadow-lg text-lg hover:bg-yellow-200 transition">Enroll Now</a>
      <p className="mt-4 text-indigo-100">100% Money-Back Guarantee if you don’t pass!</p>
    </section>

    {/* Bootcamp Contact Form */}
    <BootcampContactForm />

    {/* FAQ */}
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg text-indigo-700 mb-2">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default CisspLanding 