import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Detect WebP support and preload the best format
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
        const supported = webP.height === 2;
        const src = supported 
          ? '/images/choco_banana_optimized.webp'
          : '/images/choco_banana_optimized.jpg';
        setImageSrc(src);
        
        // Preload the hero image
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = src;
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    
    checkWebPSupport();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 shimmer-gradient z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: imageLoaded ? 1 : 0,
        }}
        animate={{
          opacity: imageLoaded ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: imageLoaded && imageSrc ? `url(${imageSrc})` : 'none',
            filter: 'brightness(0.7)',
            willChange: 'transform',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Beautifully
          </motion.span>
          <motion.span
            className="block text-pink-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            crafted cakes
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            for every occasion
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Indulge in our signature chocolate banana creations
        </motion.p>

        <motion.a
          href="#cakes"
          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Cakes
        </motion.a>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-60"
        animate={{
          y: [-20, 20, -20],
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-60"
        animate={{
          y: [20, -20, 20],
          rotate: -360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        animate={{
          x: [-10, 10, -10],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;
