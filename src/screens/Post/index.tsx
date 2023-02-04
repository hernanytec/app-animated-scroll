import { useRef, useState } from "react";
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
  const scrollRef = useRef<ScrollView>(null)

  const dimensions = useWindowDimensions()

  function scrollPercentage({ layoutMeasurement, contentOffset, contentSize }: ScrollProps) {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100)
    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100

    setPercentage(value < visibleContent ? 0 : value)
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
  }

  return <View style={styles.container}>
    <ScrollView
      ref={scrollRef}
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

    <ProgressBar value={percentage} onMoveTop={handleScrollMoveTop} />
  </View>
}