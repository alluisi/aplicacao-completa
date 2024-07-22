import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: 'SOLARSPACEDEMO-Regular' }}>
        Teste da fonte SOLARSPACEDEMO-Regular
      </Text>
      <Text style={{ fontFamily: 'SPACEMISSION' }}>
        Teste da fonte SPACEMISSION
      </Text>
    </View>
  );
}
