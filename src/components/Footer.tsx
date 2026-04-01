import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Instagram = ({ size }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-brand-light-gray border-opacity-30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-4 mb-6 w-fit">
              <img src="/logo.png" alt="Academia Georgea Logo" className="h-16 md:h-20 w-auto rounded-full border border-brand-orange/20" />
              <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-white">
                ACADEMIA <span className="text-brand-orange">GEORGEA</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Transformando vidas através do movimento. Venha fazer parte da nossa família e trilhar o seu caminho da saúde.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/academiageorgea/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-light-gray/50 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Rua Guy Marcos Nunes de Souza, 346<br />Centro, Cocal do Sul - SC</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>(48) 99999-9999 / (48) 3447-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>academiageorgea@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-brand-light-gray/30 pb-2">
                <span>Seg - Qui</span>
                <span className="text-white font-medium">05:30 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-light-gray/30 pb-2">
                <span>Sexta</span>
                <span className="text-white font-medium">05:30 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-light-gray/30 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Academia Georgea. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Desenvolvido com dedicação</span>
            <button onClick={scrollToTop} className="ml-4 w-8 h-8 rounded bg-brand-light-gray/30 flex items-center justify-center hover:bg-brand-orange hover:text-brand-black transition-colors" aria-label="Voltar ao topo">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
