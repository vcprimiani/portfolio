import { motion } from 'framer-motion'
import { Code, Database, Palette, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="text-primary-600" size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="text-primary-600" size={24} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'Design & UX',
      icon: <Palette className="text-primary-600" size={24} />,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 80 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Globe className="text-primary-600" size={24} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools to create 
            amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="bg-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'HTML5', 'CSS3', 'SASS', 'GraphQL', 'REST APIs',
              'Redux', 'Zustand', 'Prisma', 'Express.js', 'FastAPI', 'Django',
              'Firebase', 'Vercel', 'Netlify', 'GitHub', 'VS Code'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 