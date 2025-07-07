import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '15+' },
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating 
            innovative solutions and beautiful user experiences.
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
              I specialize in building modern web applications using cutting-edge technologies. 
              With expertise in both frontend and backend development, I create seamless, 
              scalable solutions that drive business growth.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that every project not only meets but exceeds expectations. 
              I'm constantly learning and adapting to new technologies to deliver 
              the best possible solutions.
            </p>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-600" size={20} />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary-600" size={20} />
                <span className="text-gray-700">Available for hire</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-600" size={20} />
                <span className="text-gray-700">hello@example.com</span>
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