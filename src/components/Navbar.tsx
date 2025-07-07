import { useState } from 'react'
import { Menu, X, User, LogOut } from 'lucide-react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { useAuth } from '../contexts/AuthContext'

interface NavbarProps {
  onAuthClick: () => void
  user: SupabaseUser | null
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick, user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { signOut } = useAuth()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleAuthClick = () => {
    onAuthClick()
    setIsOpen(false)
  }

  const handleSignOut = async () => {
    await signOut()
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary-600">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Auth Button */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuthClick}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <User size={16} />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Auth Button */}
              {user ? (
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuthClick}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <User size={16} />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 