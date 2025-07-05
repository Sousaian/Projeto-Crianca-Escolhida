import { Handshake, Building, Store, Users } from "lucide-react";

const Partnerships = () => {
  const partners = [
    {
      name: "Supermercado Família",
      type: "Varejo",
      description: "Apoio com cestas básicas e pontos de coleta",
      icon: Store
    },
    {
      name: "Escola Municipal Santos",
      type: "Educação",
      description: "Parceria para identificar crianças beneficiárias",
      icon: Building
    },
    {
      name: "Grupo Voluntários Unidos",
      type: "Voluntariado",
      description: "Apoio na organização e distribuição dos brinquedos",
      icon: Users
    },
    {
      name: "Loja de Brinquedos Alegria",
      type: "Comércio",
      description: "Desconto especial em brinquedos para doação",
      icon: Handshake
    }
  ];

  return (
    <section id="parcerias" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Juntos, construímos uma rede de solidariedade que multiplica o impacto das nossas ações. 
            Conheça quem nos ajuda a transformar vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg border text-center hover:shadow-lg transition-shadow"
              >
                <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">{partner.name}</h3>
                <span className="text-sm text-secondary font-medium mb-3 block">
                  {partner.type}
                </span>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-card p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Quer ser nosso parceiro?
          </h3>
          <p className="text-muted-foreground mb-6">
            Empresas, instituições e organizações podem se juntar à nossa causa. 
            Entre em contato e descubra como podemos trabalhar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contato@criancaescolhida.org" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Entrar em Contato
            </a>
            <a 
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;