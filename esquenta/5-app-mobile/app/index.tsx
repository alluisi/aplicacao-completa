import { View } from 'react-native'
import Logo from '@/components/template/Logo'
import Pagina from '@/components/template/Pagina'
import Pergunta from '@/components/questionario/Pergunta'
import useQuestionario from '@/data/hooks/useQuestionario'

export default function Index() {
    const { pergunta, responder } = useQuestionario()

    return (
        <Pagina>
            <View style={{ gap: 40 }}>
                <Logo />
                <Pergunta pergunta={pergunta} opcaoSelecionada={responder} />
            </View>
        </Pagina>
    )
}