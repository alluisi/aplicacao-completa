import PerguntaModel from '@/data/model/Pergunta'
import { View, Text } from 'react-native'

export interface PerguntaProps {
    pergunta: PerguntaModel
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View>
            <Text style={{ color: '#fff' }}>{props.pergunta.enunciado}</Text>
        </View>
    )
}