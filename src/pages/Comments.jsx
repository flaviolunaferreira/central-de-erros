import { Box } from "@chakra-ui/react";
import React from "react";
import CommentsCard from "../components/CommentsCard";
import Header from "../components/Header";

export default function Comments() {
  return (
    <div>
      <Header title="Comentários" />
      <Box m={20}>
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U016AC76H3K-5cb3952c982a-512"
          text="Acredito que meu maior aprendizado foi ver como um time unido pode resolver desafios que aparentemente seria impossível. Vejo agora que com dedicação e apoio dos colegas da equipe, estamos prontos para encarar desafios cada vez maiores e espero que em minha vida profissional possa ter o privilégio de trabalhar com pessoas tão incríveis como as que me deram a honra de participarem comigo deste empreendimento. Enfatizando ainda que nossas diferenças fizeram com que víssemos os problemas com ângulos diferente o que ajudou na tomada de decisões."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U015WC2N0UD-1f443cee1c8f-512"
          text="Como o Java é uma linguagem totalmente nova para mim, acredito que acrescentou bastante em questão de conhecimento. Consegui ver com mais clareza o conceito de Orientação a Objeto e tipagem do Java. Na reta final, o grupo se uniu bastante e podemos compartilhar mais conhecimento. Isso foi essencial para meu aprendizado."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-U016ABV368Z-6fbf8b9c27a5-512"
          text="Java parecia um desafio quase intransponível pra mim. Mas, logo no começo, a após a sintaxe deixar de parecer estranha, eu me encantei pela linguagem e pelo paradigma orientado a objetos. Foi um curso bastante desafiador e, por isso mesmo, altamente recompensador. O apoio do time, nesse projeto de conclusão, foi essencial e certamente a parte que mais me acrescentou em termos de conhecimento e vivência nas ferramentas utilizadas. Foram muitas horas passadas discutindo e planejando estratégias e soluções para o desafio que, no fim, tiveram um resultado com uma qualidade inesperada para mim, iniciante em Java e Spring. Acredito que saio dessa aceleração um programador mais experiente e preparado."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-UV69SG9N1-dcc767dd8647-512"
          text="Ao utilizar Java na prática perdi os medos e receios que tinha da linguagem. Aprendi que tipagem permite um controle maior do código além de ver a Orientação a Objetos na prática. O time é sensacional, pude aprender bastante com o conhecimento e experiência de cada um."
        />
        <CommentsCard
          myImage="https://ca.slack-edge.com/TMDDFEPFU-UUW6LLF41-b88f9e6cf661-512"
          text="Realizar a aceleração foi bem desafiador, mas tive grandes aprendizados. Na parte de Java pude aprofundar os conhecimentos de POO e conhecer a ferramenta incrivel que é o Spring. Trabalhar com esse grupo foi muito gratificante, cada um sempre esteve a disposição para ajudar e sanar alguma duvida, com certeza aprendi muito com cada um."
        />
      </Box>
    </div>
  );
}
