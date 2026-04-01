import { motion } from 'framer-motion';
import { Dumbbell, Activity, FastForward } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="w-12 h-12 mb-6 text-brand-orange" />,
    title: "Musculação",
    desc: "Estrutura completa com equipamentos modernos para hipertrofia e definição.",
  },
  {
    icon: <Activity className="w-12 h-12 mb-6 text-brand-orange" />,
    title: "Funcional",
    desc: "Dinâmico e intenso. Treinos que preparam seu corpo para os desafios reais do dia a dia.",
  },
  {
    icon: <FastForward className="w-12 h-12 mb-6 text-brand-orange" />,
    title: "Jump & Zumba",
    desc: "Aulas coletivas cheias de energia, música animada e muita queima de calorias.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Nossas <span className="text-brand-orange">Modalidades</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Escolha o treino que melhor se adapta aos seus objetivos. Oferecemos uma variedade de opções para garantir que você nunca caia na rotina.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[300px] xl:w-[320px] bg-brand-black border border-brand-light-gray hover:border-brand-orange p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
