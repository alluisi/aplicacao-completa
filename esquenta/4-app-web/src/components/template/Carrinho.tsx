import useCarrinho from '@/data/hooks/UseCarrinho'
import { IconShoppingCart } from '@tabler/icons-react'
import Link from 'next/link'

export default function Carrinho() {
    const { qtdeDeItens } = useCarrinho()
    return (
        <Link href="/carrinho">
            <div className="flex relative">
                <IconShoppingCart size={32} stroke={1} />
                <div
                    className="
                        absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-500 rounded-full
                        flex justify-center items-center text-xs text-white
                    "
                >
                    {qtdeDeItens}
                </div>
            </div>
        </Link>
    )
}