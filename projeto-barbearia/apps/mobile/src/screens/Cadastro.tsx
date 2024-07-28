import { Pressable, Text, View } from 'react-native'

export default function Cadastro(props: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cadastro</Text>
            <Pressable onPress={() => {
                props.navigation.navigate('Principal')
            }}>
                <Text>Ir para Principal</Text>
            </Pressable>
        </View>
    )
}
