import { Text, View } from 'react-native'
import { somar } from '@barba/core'

export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mobile {somar(32, 48)}</Text>
        </View>
    )
}
