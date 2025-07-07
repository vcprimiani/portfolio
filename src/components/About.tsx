import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Clients', value: '20+' },
    { label: 'Technologies', value: '20+' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Vincent Primiani
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m Vincent Primiani, a passionate full-stack developer with a love for building modern, scalable, and user-centric web applications. I thrive on solving complex problems and delivering high-quality digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Turning Ideas Into Reality
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              My expertise spans both frontend and backend development, allowing me to create seamless, performant, and visually appealing web experiences. I enjoy collaborating with teams and clients to bring ideas to life.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I’m always eager to learn new technologies and stay up-to-date with industry trends. Let’s work together to build something exceptional!
            </p>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-600" size={20} />
                <span className="text-gray-700">Toronto, Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary-600" size={20} />
                <span className="text-gray-700">Available for hire</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-600" size={20} />
                <span className="text-gray-700">vincent.primiani@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-primary-600" size={20} />
                <span className="text-gray-700">Full-time & Freelance</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 