import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import stock from "./images/stock.jpg";
import rc from "./images/rc.jpg";
interface ProjectProps {
  title: string;
  period: string;
  description: string[];
  technologies: string;
  image: string;
  liveLink?: string;
  githubLink: string;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  period,
  description,
  technologies,
  image,
  liveLink,
 
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="project-card relative overflow-hidden rounded-lg shadow-lg bg-dark-800"
  >
    {/* Image with overlay */}
    <div className="relative h-[200px] z-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80 pointer-events-none z-0"></div>
      <div className="absolute bottom-4 left-4 z-10">
        <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full">{technologies}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 z-10 relative">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex space-x-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
        )}

       
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Stock Trading Bot Research',
      period: 'Aug 2024 - Nov 2024',
      description: [
        'Conducted thorough review of multiple research papers authored by industry and academic experts.',
        'Identified challenges and gaps in existing stock trading bot technologies, such as market unpredictability and model overfitting.',
        'Authored a comprehensive research paper suggesting improvements and future directions using machine learning techniques.'
      ],
      technologies: 'Python, Machine Learning, Research Analysis',
      image: stock,
      
      index: 1
    },
    
    {
      title: 'RC Car with Bluetooth and Proximity Sensor',
      period: 'Oct 2022 - Nov 2022',
      description: [
        'Built an RC car using Arduino Uno, integrated with a Bluetooth module for wireless control.',
        'Implemented a proximity sensor to detect obstacles and enhance navigation safety.',
        'Designed the project for potential use in providing relief and aid in disaster-prone areas.'
      ],
      technologies: 'Arduino Uno, Bluetooth Module, Proximity Sensor, Python, Electrical Engineering',
      image: rc,
      
      index: 2
    },
    
    {
      title: 'WaterWise (SIH)',
      period: 'Oct 2024 - Oct 2024',
      description: [
        'Led development of a website to address agricultural challenges.',
        'Provided resources to support farmers.',
        'Built with MERN Stack for fast performance.'
      ],
      technologies: 'MERN',
      image: 'https://images.pexels.com/photos/4139318/pexels-photo-4139318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubLink: 'https://github.com/Dependra027/WaterWise',
      index: 2
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-white mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
