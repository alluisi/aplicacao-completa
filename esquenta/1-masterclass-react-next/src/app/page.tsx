import Link from "next/link";

export default function Inicio() {
  return (
    <div>
      <h1>Masterclass Next</h1>
      <nav>
        <Link href={"/primeiro"}>Primeiro Componente</Link>
      </nav>
    </div>
  );
}
