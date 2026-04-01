import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Aluno há 2 anos",
    text: "A estrutura é fantástica e os professores são super atenciosos. Consegui atingir minhas metas de emagrecimento com a ajuda da equipe maravilhosa da Academia Georgea!"
  },
  {
    name: "Mariana Costa",
    role: "Aluna do Funcional",
    text: "Sempre tive preguiça de malhar, mas as aulas de funcional mudaram minha rotina. O ambiente é muito animado e me sinto acolhida por todos. Super recomendo."
  },
  {
    name: "Lucas Pereira",
    role: "Aluno da Musculação",
    text: "Equipamentos novos, ambiente sempre limpo e organizado. O acompanhamento dos personais faz toda a diferença para quem busca alta performance como eu."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center mb-16">
          O que nossos <span className="text-brand-orange">Alunos</span> dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-black p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6 text-brand-orange">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic">"{item.text}"</p>
              <div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <span className="text-brand-orange text-sm">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
