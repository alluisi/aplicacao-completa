import Link from "next/link";

export default function Inicio() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient=to-r from-black to-zink-800
      "
    >
      <h1 className="font-black">Masterclass Next</h1>
      <nav className="flex flex-col">
        <Link href={"/primeiro"}>Primeiro Componente</Link>
        <Link href={"/flexbox"}>Flexbox</Link>
      </nav>
    </div>
  );
}
