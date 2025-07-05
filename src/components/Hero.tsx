import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/ce269598-af01-49b8-b103-3e01f5bd140c.png" 
            alt="Logo Criança Escolhida" 
            className="w-48 h-48 mx-auto mb-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-fredoka mb-6 text-foreground">
          Semana da Criança
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Junte-se a nós para levar alegria e brinquedos para crianças que mais precisam. 
          Sua doação pode transformar sorrisos em momentos inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3"
          >
            Fazer Doação
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3"
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;