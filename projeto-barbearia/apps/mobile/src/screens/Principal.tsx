import { Pressable, Text, View } from 'react-native'

export default function Principal({ navigation }: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Principal</Text>
            <Pressable onPress={() => {
                navigation.navigate('Sumario')
            }}>
                <Text>Ir para Sumário</Text>
            </Pressable>
        </View>
    )
}
