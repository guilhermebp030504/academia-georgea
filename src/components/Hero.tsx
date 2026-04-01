import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center pt-20">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Academia Georgea Training" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-orange/30 text-brand-orange mb-6 text-sm font-bold tracking-widest backdrop-blur-sm shadow-lg shadow-brand-orange/10">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            A CAMINHO DA SAÚDE
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-white mb-6">
            Transforme <br/>
            seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">corpo.</span><br/>
            Supere limites.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
            Bem-vindo à Academia Georgea. Mais do que uma academia, somos a sua comunidade voltada para resultados, alta performance e bem-estar em Cocal do Sul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5548996244651?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-brand-orange hover:bg-orange-500 text-brand-black px-8 py-4 rounded-full font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20"
            >
              Comece Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services" 
              className="group bg-white/5 hover:bg-white text-white hover:text-brand-black border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
            >
              <Play size={18} className="group-hover:text-brand-black text-white transition-colors" fill="currentColor" />
              Conheça Tudo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur at the bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
}
