import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a family-owned bakery with a passion for creating delicious and beautiful cakes. 
              Our journey began with a simple dream: to bring joy to every celebration through our 
              exceptional baked creations.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We use only the finest ingredients and our cakes are baked fresh daily. We believe that 
              every celebration deserves a special cake, and we are dedicated to making your celebration 
              unforgettable.
            </motion.p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: '500+', label: 'Happy Customers' },
                { number: '50+', label: 'Cake Varieties' },
                { number: '5', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-pink-500 mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(236, 72, 153, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Story
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img 
                  src="/images/choco_banana_optimized.webp" 
                  alt="Cake making process" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src="/images/choco_fudge.png" 
                  alt="Finished cake" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                className="space-y-4 mt-8"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <img 
                  src="/images/red_velvet.png" 
                  alt="Red velvet cake" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src="/images/carrot_cake.png" 
                  alt="Carrot cake" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
              animate={{
                y: [-10, 10, -10],
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
