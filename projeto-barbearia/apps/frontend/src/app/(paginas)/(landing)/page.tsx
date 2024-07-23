'use client'

import TituloSlogan from "@/components/landing/TituloSlogan";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import ContainerComBackground from "@/components/shared/ContainerComBackground";

export default function Home() {
  return (
    <div>
      <TituloSlogan />
      <ContainerComBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </ContainerComBackground>
      <ContainerComBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </ContainerComBackground>
    </div>
  );
}
