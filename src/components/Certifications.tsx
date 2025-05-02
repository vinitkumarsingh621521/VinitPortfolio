import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import dsaimage from './images/cpp.png';
import nptelimage from './images/nptel.png';
import htmlimage from './images/Google.jpg';
import udemyimage from './images/h.jpg';
import linkedinimage from './images/udem1.jpg';
import phpimage from './images/cpa.jpg';
interface CertificationProps {
  title: string;
  issuer: string;
  image: string;
  link: string;
  index: number;
}

const CertificateCard: React.FC<CertificationProps> = ({ title, issuer, image, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="certificate-card"
  >
    <div className="relative overflow-hidden h-[150px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{issuer}</p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm"
      >
        <ExternalLink size={16} className="mr-1" />
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: 'Programming in C++: A Hands-on Introduction',
      issuer: 'Coursera',
      image: dsaimage,
      link: 'https://www.coursera.org/account/accomplishments/specialization/LUXSC6GJEPCS',
      index: 0
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      image: nptelimage,
      link: 'https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs118',
      index: 1
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Coursera',
      image: htmlimage,
      link: 'https://www.coursera.org/account/accomplishments/verify/YEJ6KJKQL63B',
      index: 2
    },
    {
      title: 'Computer Organization and Architecture',
      issuer: 'Udemy',
      image: phpimage,
      link: 'https://www.udemy.com/certificate/UC-bfab2666-2f01-46c6-89c3-bfc7e725f824/',
      index: 3
    },
    {
      title: ' Static Routing Configuration Using Packet Tracer',
      issuer: 'Coursera',
      image: udemyimage,
      link: 'https://coursera.org/share/091129ed571adf34ff44eaae40949818',
      index: 4
    },
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy',
      image: linkedinimage,
      link: 'https://www.udemy.com/certificate/UC-58b7be46-c188-475e-b2a2-d5cb10ee11e3/',
      index: 5
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;