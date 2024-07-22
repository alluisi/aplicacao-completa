'use client'
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/UseCarrinho";

export default function Home() {
  const { numero, incrementar, decrementar } = useCarrinho()
  return (
    <Pagina>
      <div>Início: {numero}</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </Pagina>
  );
}
