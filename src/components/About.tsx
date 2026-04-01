import { motion } from 'framer-motion';
import { Target, Trophy, Users, HeartPulse } from 'lucide-react';

export function About() {
  const cards = [
    { icon: <Target className="w-8 h-8 text-brand-orange" />, title: "Foco nos Resultados", desc: "Equipamentos de ponta e metodologia de treino para você alcançar seus objetivos." },
    { icon: <Users className="w-8 h-8 text-brand-orange" />, title: "Comunidade", desc: "Um ambiente motivador onde todos se apoiam na busca por saúde." },
    { icon: <Trophy className="w-8 h-8 text-brand-orange" />, title: "Profissionais", desc: "Equipe de instrutores altamente capacitados e apaixonados pelo que fazem." },
    { icon: <HeartPulse className="w-8 h-8 text-brand-orange" />, title: "Bem-estar", desc: "Seu corpo, suas regras. Foco na qualidade de vida e na sua transformação." },
  ];

  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Muito Mais Que <br />
              <span className="text-brand-orange">Musculação</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Com mais de 15 anos de história em Cocal do Sul, a <strong className="text-white">Academia Georgea</strong> nasceu com o propósito de transformar vidas. Nosso lema é "A caminho da saúde", porque acreditamos que o treinamento físico é a chave para o bem-estar duradouro e pleno.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {cards.map((card, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{card.icon}</div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gray relative">
              <img src="/images/gallery1.png" alt="Instrutor ajudando aluno" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-brand-orange text-brand-black p-6 rounded-2xl">
                  <div className="text-4xl font-black mb-1">+15</div>
                  <div className="font-bold text-sm uppercase tracking-wider">Anos de História</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
