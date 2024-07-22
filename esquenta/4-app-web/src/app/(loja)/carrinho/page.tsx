'use client'
import Pagina from '@/components/template/Pagina';
import useCarrinho from '@/data/hooks/UseCarrinho';

export default function PaginaCarrinho() {
    const { numero } = useCarrinho()

    return <Pagina>Carrinho: {numero}</Pagina>
}