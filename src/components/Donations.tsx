import { Copy, QrCode, Heart, Gift, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Donations = () => {
  const { toast } = useToast();
  
  const pixKey = "criancaescolhida@exemplo.com";
  
  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para sua área de transferência.",
    });
  };

  const donationOptions = [
    {
      icon: Gift,
      title: "Brinquedos Novos",
      description: "Bonecas, carrinhos, jogos educativos, pelúcias e muito mais",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Materiais Escolares",
      description: "Cadernos, lápis, canetinhas, mochilas e livros infantis",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Doação via PIX",
      description: "Contribua financeiramente para comprarmos mais brinquedos",
      color: "text-secondary"
    }
  ];

  return (
    <section id="doacoes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Como Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sua doação transforma vidas! Escolha a forma que mais combina com você 
            e faça parte desta corrente do bem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {donationOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="text-center p-6 bg-card rounded-lg border">
                <IconComponent className={`w-16 h-16 mx-auto mb-4 ${option.color}`} />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border">
          <div className="text-center mb-8">
            <QrCode className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Doação via PIX
            </h3>
            <p className="text-muted-foreground mb-6">
              Use nossa chave PIX para fazer sua doação de forma rápida e segura
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-card p-6 rounded-lg border mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Chave PIX</p>
                  <p className="font-mono text-lg text-foreground break-all">
                    {pixKey}
                  </p>
                </div>
                <Button
                  onClick={copyPixKey}
                  size="sm"
                  className="ml-4 bg-secondary hover:bg-secondary/90"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Sua doação é 100% direcionada para a compra de brinquedos e materiais para as crianças.
                Emitimos recibo para todas as doações.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-foreground">
            Pontos de Coleta de Brinquedos
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <h5 className="font-semibold text-foreground">Supermercado Família</h5>
              <p className="text-sm text-muted-foreground">Rua das Flores, 123 - Centro</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h5 className="font-semibold text-foreground">Escola Municipal Santos</h5>
              <p className="text-sm text-muted-foreground">Av. Principal, 456 - Jardim</p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h5 className="font-semibold text-foreground">Loja Alegria</h5>
              <p className="text-sm text-muted-foreground">Shopping Center - Loja 89</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Donations;