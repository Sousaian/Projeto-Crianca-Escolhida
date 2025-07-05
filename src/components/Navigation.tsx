import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ce269598-af01-49b8-b103-3e01f5bd140c.png" 
              alt="Logo Criança Escolhida" 
              className="w-10 h-10 mr-3"
            />
            <span className="text-xl font-bold text-foreground">Criança Escolhida</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('parcerias')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Parcerias
            </button>
            <button
              onClick={() => scrollToSection('doacoes')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Doações
            </button>
            <Button 
              onClick={() => scrollToSection('doacoes')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Fazer Doação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('parcerias')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Parcerias
              </button>
              <button
                onClick={() => scrollToSection('doacoes')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Doações
              </button>
              <Button 
                onClick={() => scrollToSection('doacoes')}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Fazer Doação
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;