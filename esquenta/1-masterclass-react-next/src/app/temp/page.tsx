import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Título Temporário</h1>
            <nav>
                <Link href={"/temp/a/b/c"}>ABC</Link>
            </nav>
        </div>
    )
}