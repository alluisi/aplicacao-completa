import Cabecalho from './Cabecalho';

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
            <main>{props.children}</main>
        </div>
    )
}