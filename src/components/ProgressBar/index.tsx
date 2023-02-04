import { Feather } from '@expo/vector-icons';
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { BounceIn, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { styles } from "./styles";


const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity)
interface Props {
  value: number,
  onMoveTop: () => void
}

export function ProgressBar({ value, onMoveTop }: Props) {
  const widthContainer = useSharedValue(200)

  const endReached = value >= 95

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value
    }
  })

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: .2 })
  }, [value])

  const percentage = Math.min(value, 100).toFixed(0)

  return <Animated.View style={[styles.container, animatedStyle]}>
    {
      endReached ?
        <TouchableOpacityAnimated entering={BounceIn} exiting={FadeOut} onPress={onMoveTop}>
          <Feather name="arrow-up" size={24} color='#C4C4CC' />
        </TouchableOpacityAnimated>
        :
        <Animated.View style={styles.progressContent} entering={FadeIn} >
          <Text style={styles.value}>{percentage}%</Text>
          <View style={styles.tracker} >
            <View style={[styles.progress, { width: `${percentage}%` }]} />
          </View>
        </Animated.View>
    }
  </Animated.View>
}