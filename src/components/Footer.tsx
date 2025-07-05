import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/ce269598-af01-49b8-b103-3e01f5bd140c.png" 
                alt="Logo Criança Escolhida" 
                className="w-12 h-12 mr-3"
              />
              <h3 className="text-xl font-bold">Criança Escolhida</h3>
            </div>
            <p className="text-background/80 mb-4">
              Transformando vidas através do amor e solidariedade. 
              Juntos, fazemos a diferença na vida de centenas de crianças.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-background/80" />
                <span className="text-background/80">contato@criancaescolhida.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-background/80" />
                <span className="text-background/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-background/80" />
                <span className="text-background/80">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-background/80 hover:text-background transition-colors">
                Sobre Nós
              </a>
              <a href="#parcerias" className="block text-background/80 hover:text-background transition-colors">
                Parcerias
              </a>
              <a href="#doacoes" className="block text-background/80 hover:text-background transition-colors">
                Como Ajudar
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-background/80">
              Feito com amor para as crianças
            </span>
          </div>
          <p className="text-background/60 text-sm">
            © 2025 ONG Criança Escolhida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;