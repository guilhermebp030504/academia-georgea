import { motion } from 'framer-motion';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Nossa <span className="text-brand-orange">Estrutura</span>
            </h2>
            <p className="text-gray-400">
              Conheça o ambiente onde a mágica acontece. Equipamentos premium, climatização e um espaço pensado para sua melhor performance.
            </p>
          </div>
          <a href="https://www.instagram.com/academiageorgea/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors">
            Ver mais no Instagram &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-square relative group"
          >
            <img src="/images/hero.png" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden aspect-square relative group md:col-span-2 lg:col-span-1"
          >
            <img src="/images/gallery1.png" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-[2/1] md:aspect-square relative group md:col-span-2 lg:col-span-1"
          >
            <img src="/images/gallery2.png" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
