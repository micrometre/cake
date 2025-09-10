import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cakes = [
  {
    id: 1,
    image: '/images/choco_fudge.png',
    title: 'Chocolate Fudge Cake',
    description: 'Rich and decadent chocolate fudge cake, perfect for any celebration.',
  },
  {
    id: 2,
    image: '/images/red_velvet.png',
    title: 'Red Velvet Cake',
    description: 'A southern classic with a moist crumb and a hint of cocoa.',
  },
  {
    id: 3,
    image: '/images/carrot_cake.png',
    title: 'Carrot Cake',
    description: 'A delicious and moist cake with freshly grated carrots and cream cheese frosting.',
  },
  {
    id: 4,
    image: '/images/pink_cake.png',
    title: 'Strawberry Delight',
    description: 'Light and fluffy cake with fresh strawberries and vanilla cream.',
  },
  {
    id: 5,
    image: '/images/cake1.png',
    title: 'Classic Vanilla',
    description: 'Timeless vanilla cake with buttercream frosting and elegant decorations.',
  },
  {
    id: 6,
    image: '/images/cake2.png',
    title: 'Berry Bliss',
    description: 'Mixed berry cake with fresh fruit and whipped cream topping.',
  },
];

const CakeCard = ({ cake, index }: { cake: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={cake.image}
          alt={cake.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold text-gray-800 mb-2"
          whileHover={{ color: '#ec4899' }}
          transition={{ duration: 0.2 }}
        >
          {cake.title}
        </motion.h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {cake.description}
        </p>
        
        <motion.button
          className="mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const CakeGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="cakes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Famous Cakes
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Each cake is crafted with love, using only the finest ingredients to create unforgettable moments
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <CakeCard key={cake.id} cake={cake} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;
