import { Heart, Users, Gift } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sobre a Criança Escolhida
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa missão é levar alegria e esperança para crianças em situação de vulnerabilidade, 
            especialmente durante a Semana da Criança, promovendo momentos de felicidade através de brinquedos e atividades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-card border">
            <Heart className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Promover o bem-estar e a felicidade de crianças em situação de vulnerabilidade, 
              oferecendo momentos de alegria e esperança através de doações e atividades.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser referência em ações sociais voltadas para a infância, 
              criando uma rede de solidariedade que transforme vidas e construa um futuro melhor.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border">
            <Gift className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Nossos Valores</h3>
            <p className="text-muted-foreground">
              Solidariedade, transparência, respeito e amor ao próximo. 
              Acreditamos que pequenos gestos podem gerar grandes transformações na vida das crianças.
            </p>
          </div>
        </div>

        <div className="bg-accent rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
            Campanha Semana da Criança 2025
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            Durante a Semana da Criança, nossa meta é arrecadar brinquedos para mais de 200 crianças 
            de comunidades carentes da região. Cada doação faz a diferença e ajuda a construir sorrisos genuínos.
          </p>
          <div className="text-center">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
              Meta: 200 Crianças Beneficiadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;