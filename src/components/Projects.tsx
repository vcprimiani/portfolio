import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application with interactive maps and detailed forecasts.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support and SEO optimization.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication and file sharing.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 