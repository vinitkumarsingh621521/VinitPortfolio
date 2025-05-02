import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiCplusplus, SiC, SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { FaCode, FaBrain } from 'react-icons/fa';

// Skill icon component
interface SkillProps {
  icon: React.ReactNode;
  name: string;
  delay?: number;
}

const SkillIcon: React.FC<SkillProps> = ({ icon, name, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="skill-icon flex flex-col items-center text-white"
  >
    {icon}
    <span className="mt-2 text-sm font-medium">{name}</span>
  </motion.div>
);

// Skill section component
interface SkillSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; icon: React.ReactNode }>;
  delay?: number;
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, icon, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-10"
  >
    <div className="flex items-center gap-2 mb-4 text-primary-500">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill.name}
          icon={skill.icon}
          name={skill.name}
          delay={delay + 0.1 * index}
        />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const programmingLanguages = [
    { name: 'Python', icon: <SiPython size={32} /> },
    { name: 'C++', icon: <SiCplusplus size={32} /> },
    { name: 'C', icon: <SiC size={32} /> },
  ];

  const machineLearningSkills = [
    { name: 'TensorFlow', icon: <SiTensorflow size={32} /> },
    { name: 'PyTorch', icon: <SiPytorch size={32} /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn size={32} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Skills & Tools
        </motion.h2>

        <SkillSection
          title="Programming Languages"
          icon={<FaCode size={24} />}
          skills={programmingLanguages}
          delay={0.1}
        />

        <SkillSection
          title="Machine Learning Tools"
          icon={<FaBrain size={24} />}
          skills={machineLearningSkills}
          delay={0.2}
        />
      </div>
    </section>
  );
};

export default Skills;
