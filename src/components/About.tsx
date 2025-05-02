import React from 'react';
import { motion } from 'framer-motion';
import { Download, Video } from 'lucide-react';
import myimage from './images/viinitpic.png';
import myPDF from './images/vinitcv.pdf';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
              <img 
                src={myimage}
                alt="Dependra" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-[-76%] translate-y-[5%] w-24 h-24 md:w-28 md:h-28 bg-primary-500 rounded-full flex items-center justify-center z-10 border-4 border-dark-800 shadow-lg">
  <span className="text-white font-bold text-sm md:text-base text-center">3rd Year</span>
</div>

          </motion.div>
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Maschine Learning</h3>
            <p className="text-gray-300 mb-6">
            I am Vinit Kumar Singh, an aspiring AI and Machine Learning Engineer with a strong foundation in multiple programming languages, including Python, Java, and C++. I have hands-on experience working on real-world projects such as developing a Personal Album website using HTML, CSS, and JavaScript, as well as creating a Stock Trading Bot utilizing machine learning techniques.

Beyond software, I have also been involved in building physical projects like an RC car equipped with a proximity sensor and Bluetooth module. I am passionate about research and have written and reviewed multiple papers on topics like Sentiment Analysis and more.

Known for my analytical skills, effective time management, and collaborative nature, I am always ready to learn, adapt, and help others. I am actively seeking an opportunity to showcase my skills and grow as an AI & ML Engineer.


            </p>
            
            
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={myPDF} download className="button-primary">
                <Download size={18} />
                Download CV
              </a>
              <a href="" target="_blank" className="button-secondary">
                <Video size={18} />
                Video CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
