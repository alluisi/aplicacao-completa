'use client'
import AreaItemCarrinho from '@/components/carrinho/AreaItemCarrinho'
import Pagina from '@/components/template/Pagina'
import useCarrinho from '@/data/hooks/UseCarrinho'

export default function PaginaCarrinho() {
    const { itens, adicionar } = useCarrinho()
    return (
        <Pagina className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                {itens.map((item) => (
                    <AreaItemCarrinho
                        key={item.produto.id}
                        item={item}
                        adicionar={(item) => adicionar(item.produto)}
                    />
                ))}
            </div>
        </Pagina>
    )
}