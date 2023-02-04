import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  value: number
}

export function ProgressBar({ value }: Props) {
  const percentage = Math.min(value, 100).toFixed(0)

  return <View style={styles.container}>
    <Text style={styles.value}>{percentage}%</Text>
    <View style={styles.tracker} >
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </View>
  </View>
}