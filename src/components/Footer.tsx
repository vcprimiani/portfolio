import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:hello@example.com' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-400">Portfolio</h3>
              <p className="text-gray-400 max-w-md">
                A passionate full-stack developer creating modern web experiences 
                and innovative digital solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>hello@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 