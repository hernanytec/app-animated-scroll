import { useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number
  }
  contentOffset: {
    y: number
  }
  contentSize: {
    height: number
  }
}

export function Post() {
  const [percentage, setPercentage] = useState(0)
  const dimensions = useWindowDimensions()

  function scrollPercentage({ layoutMeasurement, contentOffset, contentSize }: ScrollProps) {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100)
    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100

    setPercentage(value < visibleContent ? 0 : value)
  }

  return <View style={styles.container}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      onScroll={(e) => scrollPercentage(e.nativeEvent)}
      scrollEventThrottle={16}
    >
      <Text style={styles.title}>Lorem ipsum</Text>

      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio modi odio repellat ipsum voluptas fugiat aspernatur sint nesciunt a debitis repellendus,
          labore voluptatum ea adipisci culpa,
          quas laborum distinctio enim.
        </Text>
      </View>
    </ScrollView>

    <ProgressBar value={percentage} />
  </View>
}